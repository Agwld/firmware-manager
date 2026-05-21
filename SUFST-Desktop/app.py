import webview
import threading
import os
import sys
import json
import shutil
import base64
import requests
import datetime
import time

DB_FILE = 'database.json'
FW_DIR = 'firmwares'
IMAGE_DIR = 'images'

class Api:
    def __init__(self):
        # Ensure directories exist
        if not os.path.exists(FW_DIR):
            os.makedirs(FW_DIR)
        if not os.path.exists(IMAGE_DIR):
            os.makedirs(IMAGE_DIR)
            
        self.github_cache = {} # { pcb_id: {"time": timestamp, "data": []} }
        self.load_db()

    def load_db(self):
        if os.path.exists(DB_FILE):
            with open(DB_FILE, 'r') as f:
                data = json.load(f)
                self.firmware_db = data.get("firmwares", {})
                self.pcbs = data.get("pcbs", [])
                self.suites = data.get("suites", [])
                self.active_suite_id = data.get("active_suite_id", "")
                self.admin_password = data.get("admin_password", "sufst")
        else:
            # Default database
            self.pcbs = [
                {"id": "bms", "name": "Battery Management System", "status": "ok", "version": "v1.2.0", "github": "https://github.com/SUFST/BMS-firmware", "description": "Monitors battery cells.", "image": ""},
                {"id": "vcu", "name": "Vehicle Control Unit", "status": "warn", "version": "v0.9.5-beta", "github": "https://github.com/SUFST/VCU", "description": "Main car controller.", "image": ""}
            ]
            self.firmware_db = {
                "bms": [
                    {"id": "fw_1", "version": "v1.2.0", "date": "2026-05-10", "type": "release", "file": "mock_bms.bin"},
                ],
                "vcu": [
                    {"id": "fw_3", "version": "v0.9.5-beta", "date": "2026-05-15", "type": "beta", "file": "mock_vcu.bin"},
                ]
            }
            self.suites = []
            self.active_suite_id = ""
            self.admin_password = "sufst"
            self.save_db()

    def save_db(self):
        with open(DB_FILE, 'w') as f:
            json.dump({
                "admin_password": self.admin_password,
                "pcbs": self.pcbs,
                "firmwares": self.firmware_db,
                "suites": self.suites,
                "active_suite_id": self.active_suite_id
            }, f, indent=4)

    def login(self, password):
        if password == self.admin_password:
            return {"status": "success", "message": "Logged in as Admin"}
        return {"status": "error", "message": "Invalid password"}

    def get_pcbs(self):
        # Embed base64 images so the webview doesn't have CORS/path issues
        result = []
        for p in self.pcbs:
            pcb_copy = dict(p)
            pcb_copy["image_data"] = ""
            if p.get("image") and os.path.exists(os.path.join(IMAGE_DIR, p["image"])):
                try:
                    with open(os.path.join(IMAGE_DIR, p["image"]), "rb") as img_file:
                        b64 = base64.b64encode(img_file.read()).decode('utf-8')
                        ext = p["image"].split('.')[-1].lower()
                        mime = f"image/{ext}" if ext in ['png', 'jpg', 'jpeg', 'gif'] else "image/png"
                        pcb_copy["image_data"] = f"data:{mime};base64,{b64}"
                except Exception:
                    pass
            result.append(pcb_copy)
        return result

    def select_image(self):
        file_types = ('Image files (*.png;*.jpg;*.jpeg)', 'All files (*.*)')
        try:
            window = webview.windows[0]
            result = window.create_file_dialog(webview.OPEN_DIALOG, allow_multiple=False, file_types=file_types)
            if result:
                source_path = result[0]
                filename = os.path.basename(source_path)
                dest_path = os.path.join(IMAGE_DIR, filename)
                shutil.copy2(source_path, dest_path)
                return {"status": "success", "file": filename}
            return {"status": "cancelled"}
        except Exception as e:
            return {"status": "error", "message": str(e)}

    def add_pcb(self, pcb_data):
        # Generate ID from name
        pcb_id = pcb_data.get("name", "Unknown").lower().replace(" ", "_")
        
        new_pcb = {
            "id": pcb_id,
            "name": pcb_data.get("name", "Unknown PCB"),
            "description": pcb_data.get("description", ""),
            "github": pcb_data.get("github", ""),
            "status": "ok",
            "version": "Unknown",
            "image": pcb_data.get("image", "")
        }
        self.pcbs.append(new_pcb)
        self.firmware_db[pcb_id] = []
        self.save_db()
        return {"status": "success", "pcb": new_pcb}

    def edit_pcb(self, pcb_id, pcb_data):
        for pcb in self.pcbs:
            if pcb["id"] == pcb_id:
                pcb["name"] = pcb_data.get("name", pcb["name"])
                pcb["description"] = pcb_data.get("description", pcb["description"])
                pcb["github"] = pcb_data.get("github", pcb["github"])
                pcb["image"] = pcb_data.get("image", pcb["image"])
                self.save_db()
                return {"status": "success", "pcb": pcb}
        return {"status": "error", "message": "PCB not found"}

    def update_pcb_version(self, pcb_id, version):
        for p in self.pcbs:
            if p["id"] == pcb_id:
                p["version"] = version
                self.save_db()
                return {"status": "success"}
        return {"status": "error"}

    def read_local_image(self, image_file):
        import os, base64
        if not image_file: return ""
        if os.path.exists(image_file):
            with open(image_file, "rb") as f:
                encoded = base64.b64encode(f.read()).decode('utf-8')
                return f"data:image/png;base64,{encoded}"
        return ""

    def get_firmwares(self, pcb_id, github_url=None):
        # 1. Get local custom imported firmwares
        local_fws = self.firmware_db.get(pcb_id, [])
        
        # 2. Get GitHub releases if a URL is provided
        github_fws = []
        
        if github_url and "github.com/" in github_url:
            # Simple cache (5 minutes)
            if pcb_id in self.github_cache and (time.time() - self.github_cache[pcb_id]["time"]) < 300:
                github_fws = self.github_cache[pcb_id]["data"]
            else:
                try:
                    # Parse owner/repo from URL
                    parts = github_url.rstrip('/').split('github.com/')[-1].split('/')
                    if len(parts) >= 2:
                        owner, repo = parts[0], parts[1]
                        api_url = f"https://api.github.com/repos/{owner}/{repo}/releases"
                        
                        response = requests.get(api_url, timeout=5)
                        if response.status_code == 200:
                            releases = response.json()
                            for rel in releases:
                                exts = set()
                                primary_url = None
                                primary_file = None
                                
                                for a in rel.get("assets", []):
                                    name = a["name"].lower()
                                    if name.endswith(('.bin', '.elf', '.srec', '.hex')):
                                        ext = "." + name.split(".")[-1]
                                        exts.add(ext)
                                        if primary_url is None:
                                            primary_url = a["browser_download_url"]
                                            primary_file = a["name"]
                                
                                if exts:
                                    date_str = rel.get("published_at", "").split("T")[0]
                                    github_fws.append({
                                        "id": f"gh_{rel['id']}",
                                        "version": rel.get("tag_name", "Unknown"),
                                        "date": date_str,
                                        "type": "github_release",
                                        "url": primary_url,
                                        "file": primary_file,
                                        "extensions": list(exts)
                                    })
                            
                            # Update cache
                            self.github_cache[pcb_id] = {"time": time.time(), "data": github_fws}
                except Exception as e:
                    print(f"Error fetching GitHub releases: {e}")
                    
        # Combine and sort (newest first, rough sort by date string)
        all_fws = github_fws + local_fws
        all_fws.sort(key=lambda x: x.get("date", "2000-01-01"), reverse=True)
        return all_fws

    def sync_github(self, pcb_id, github_url=None):
        # Force cache invalidation
        if pcb_id in self.github_cache:
            del self.github_cache[pcb_id]
        return self.get_firmwares(pcb_id, github_url)

    def get_suites(self):
        return {"suites": self.suites, "active_suite_id": self.active_suite_id}

    def set_active_suite(self, suite_id):
        self.active_suite_id = suite_id
        self.save_db()
        return {"status": "success"}

    def save_suite(self, suite_data):
        import uuid
        suite_id = suite_data.get("id")
        
        if suite_id:
            # Edit existing
            for s in self.suites:
                if s["id"] == suite_id:
                    s["name"] = suite_data.get("name", s["name"])
                    s["pcb_versions"] = suite_data.get("pcb_versions", s["pcb_versions"])
                    self.save_db()
                    return {"status": "success", "suite": s}
            return {"status": "error", "message": "Suite not found"}
        else:
            # Create new
            suite_id = str(uuid.uuid4())[:8]
            new_suite = {
                "id": f"suite_{suite_id}",
                "name": suite_data.get("name", "New Suite"),
                "date": datetime.datetime.now().strftime("%Y-%m-%d"),
                "pcb_versions": suite_data.get("pcb_versions", {})
            }
            self.suites.insert(0, new_suite)
            if not self.active_suite_id:
                self.active_suite_id = new_suite["id"]
            self.save_db()
            return {"status": "success", "suite": new_suite}

    def delete_suite(self, suite_id):
        self.suites = [s for s in self.suites if s["id"] != suite_id]
        if self.active_suite_id == suite_id:
            self.active_suite_id = self.suites[0]["id"] if self.suites else ""
        self.save_db()
        return {"status": "success"}

    def import_binary(self, pcb_id):
        # Open file dialog
        file_types = ('Binary files (*.bin;*.srec;*.hex)', 'All files (*.*)')
        try:
            window = webview.windows[0]
            result = window.create_file_dialog(webview.OPEN_DIALOG, allow_multiple=False, file_types=file_types)
            if result:
                source_path = result[0]
                filename = os.path.basename(source_path)
                
                # Copy file to our synced firmwares directory
                dest_path = os.path.join(FW_DIR, filename)
                shutil.copy2(source_path, dest_path)
                
                # Add to DB
                import datetime
                date_str = datetime.datetime.now().strftime("%Y-%m-%d")
                
                if pcb_id not in self.firmware_db:
                    self.firmware_db[pcb_id] = []
                    
                new_fw = {
                    "id": f"fw_custom_{len(self.firmware_db[pcb_id]) + 1}_{int(datetime.datetime.now().timestamp())}", 
                    "version": f"Custom ({filename})", 
                    "date": date_str, 
                    "type": "custom",
                    "file": filename
                }
                
                self.firmware_db[pcb_id].insert(0, new_fw)
                self.save_db()
                
                return {"status": "success", "file": filename, "data": new_fw}
            return {"status": "cancelled"}
        except Exception as e:
            return {"status": "error", "message": str(e)}

    def flash_firmware(self, pcb_id, firmware_id, method):
        # Mock flash function
        print(f"Flashing {pcb_id} with {firmware_id} over {method}")
        
        def run_mock_flash():
            import time
            window = webview.windows[0]
            
            # Simulated steps
            steps = [
                (10, "Initializing connection..."),
                (20, f"Connecting via {method.upper()}..."),
                (30, "Erasing target sectors..."),
                (40, "Erasing complete. Starting download..."),
                (60, "Writing payload... 50%"),
                (80, "Writing payload... 100%"),
                (90, "Verifying checksum..."),
                (100, "Flash successful. Rebooting target.")
            ]
            
            for progress, msg in steps:
                time.sleep(0.8) # Mock delay
                # Safely escape message for JS
                safe_msg = msg.replace("'", "\\'")
                window.evaluate_js(f"if(window.updateFlashProgress) window.updateFlashProgress({progress}, '{safe_msg}')")

            window.evaluate_js("if(window.flashComplete) window.flashComplete('success')")

        # Start flashing in background to not block the UI
        thread = threading.Thread(target=run_mock_flash)
        thread.daemon = True
        thread.start()

        return {"status": "started", "pcb": pcb_id, "firmware": firmware_id, "method": method}

def get_entrypoint():
    # If we are running from a pyinstaller bundle, use the dist folder
    if hasattr(sys, '_MEIPASS'):
        return os.path.join(sys._MEIPASS, 'dist', 'index.html')
    
    # If the dist folder exists locally (production build), use it
    dist_path = os.path.join(os.path.dirname(__file__), 'dist', 'index.html')
    if os.path.exists(dist_path):
        return dist_path

    # Otherwise, assume Vite dev server is running on port 5173
    return 'http://localhost:5173'

if __name__ == '__main__':
    api = Api()
    entry = get_entrypoint()
    print(f"Starting pywebview with entrypoint: {entry}")
    
    # Create the webview window
    window = webview.create_window(
        'SUFST Firmware Manager', 
        entry,
        js_api=api,
        width=1200, 
        height=800,
        background_color='#0f172a'
    )
    
    # Start the application
    webview.start(debug=True)
