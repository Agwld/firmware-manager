import './style.css';
import { initializeApp } from "firebase/app";
import { getFirestore, enableIndexedDbPersistence, collection, doc, onSnapshot, getDoc, setDoc, updateDoc, deleteDoc, writeBatch } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKaIqJhpWMQsiMUHGc08Egn22hNkNE4wg",
  authDomain: "sufst-firmware.firebaseapp.com",
  projectId: "sufst-firmware",
  storageBucket: "sufst-firmware.firebasestorage.app",
  messagingSenderId: "360125318020",
  appId: "1:360125318020:web:b50a6388bdbefd98f193d1",
  measurementId: "G-3FX30KTHDN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

enableIndexedDbPersistence(db).catch((err) => {
  console.warn("Offline persistence failed to enable:", err);
});

// Global state
let mockPCBs = [];
let mockSuites = { suites: [], active_suite_id: "" };
let isAdmin = false;
let currentPcbViewId = null;

// Firebase Listeners
onSnapshot(collection(db, "pcbs"), async (snapshot) => {
  let temp = [];
  snapshot.forEach((doc) => {
    temp.push({ id: doc.id, ...doc.data() });
  });
  
  if (window.pywebview) {
    for (let p of temp) {
      if (p.image && !p.image_data) {
        p.image_data = await pywebview.api.read_local_image(p.image);
      }
    }
  }
  
  mockPCBs = temp;
  if (document.getElementById('dashboard-view')) window.showDashboard();
  if (document.getElementById('pcb-view') && currentPcbViewId) window.viewPcb(currentPcbViewId);
});

onSnapshot(collection(db, "suites"), (snapshot) => {
  mockSuites.suites = [];
  snapshot.forEach((doc) => {
    mockSuites.suites.push({ id: doc.id, ...doc.data() });
  });
  mockSuites.suites.sort((a, b) => (a.date < b.date) ? 1 : -1);
  if (document.getElementById('suites-view')) window.showSuites();
  if (document.getElementById('dashboard-view')) window.showDashboard();
});

onSnapshot(doc(db, "config", "global"), (docSnapshot) => {
  if (docSnapshot.exists()) {
    mockSuites.active_suite_id = docSnapshot.data().active_suite_id;
  }
  if (document.getElementById('suites-view')) window.showSuites();
  if (document.getElementById('dashboard-view')) window.showDashboard();
});

function renderSidebar() {
  return `
    <div class="sidebar">
      <div class="sidebar-header">
        SUFST Firmware
      </div>
      <div class="nav-item active" id="nav-dashboard" onclick="window.showDashboard()">Dashboard</div>
      <div class="nav-item" id="nav-library" onclick="alert('Global Firmware Library coming soon!')">Firmware Library</div>
      <div class="nav-item" id="nav-suites" onclick="window.showSuites()">Firmware Suites</div>
      
      <div class="admin-login-btn" onclick="window.toggleAdmin()">
        🔒 <span id="admin-btn-text">Admin Login</span>
      </div>
    </div>
  `;
}

function renderDashboard() {
  const activeSuite = mockSuites.suites.find(s => s.id === mockSuites.active_suite_id);
  const suiteName = activeSuite ? activeSuite.name : "None Set";
  
  const pcbCards = mockPCBs.map((pcb, index) => {
    const imgHtml = pcb.image_data ? `<img src="${pcb.image_data}" alt="${pcb.name}">` : `<span style="color: var(--text-secondary); font-size: 0.8rem;">No Image</span>`;
    
    // Check if the pcb matches the active suite requirement
    let suiteReq = null;
    let matchHtml = '';
    if (activeSuite && activeSuite.pcb_versions && activeSuite.pcb_versions[pcb.id]) {
        suiteReq = activeSuite.pcb_versions[pcb.id];
        if (suiteReq !== 'ignore') {
            const isMatch = pcb.version === suiteReq;
            matchHtml = `<div style="font-size: 0.8rem; margin-top: 5px; color: ${isMatch ? 'var(--success-color)' : 'var(--danger-color)'}">
              Suite requires: ${suiteReq}
            </div>`;
        }
    }

    return `
    <div class="pcb-card fade-in" style="animation-delay: ${index * 0.1}s" onclick="window.viewPcb('${pcb.id}')">
      <div class="pcb-img-container">${imgHtml}</div>
      <div class="pcb-card-header">
        <div class="pcb-title">${pcb.name}</div>
        <div class="status-badge ${pcb.status === 'ok' ? 'status-ok' : 'status-warn'}">
          ${pcb.status === 'ok' ? 'Up to date' : 'Update Available'}
        </div>
      </div>
      <div class="pcb-desc-text">${pcb.description || ''}</div>
      <div class="pcb-version" style="margin-top: auto; padding-top: 10px;">
        Current: ${pcb.version}
        ${matchHtml}
      </div>
    </div>
  `}).join('');

  return `
    <div class="main-content" id="dashboard-view">
      <div class="header fade-in">
        <div>
          <h1>Fleet Dashboard</h1>
          <p style="color: var(--text-secondary); margin-top: 5px;">Active Suite: <strong>${suiteName}</strong></p>
        </div>
        <div style="display: flex; gap: 10px;">
          ${activeSuite ? `<button class="btn btn-primary" onclick="window.openFlashFullCarModal()">Flash Full Car</button>` : ''}
          <button class="btn btn-primary admin-only" onclick="window.openAddPcbModal()">+ Add PCB</button>
        </div>
      </div>
      <div class="pcb-grid">
        ${pcbCards}
      </div>
    </div>
  `;
}

async function renderPcbView(pcbId) {
  const pcb = mockPCBs.find(p => p.id === pcbId);
  if (!pcb) return '';

  let firmwares = [];
  if (window.pywebview) {
    firmwares = await pywebview.api.get_firmwares(pcbId, pcb.github);
  } else {
    // Mock fallback
    firmwares = [{ id: 'fw_mock', version: 'v1.0.0 (Mock)', date: 'Today', type: 'mock' }];
  }

  const fwList = firmwares.map(fw => {
    const exts = fw.extensions ? fw.extensions.map(e => `<span style="font-size: 0.65rem; padding: 2px 6px; background-color: var(--surface-hover); border: 1px solid var(--border-color); border-radius: 4px; margin-right: 4px;">${e.toUpperCase()}</span>`).join('') : '';
    return `
    <div class="fw-item">
      <div class="fw-info">
        <div class="fw-version">${fw.version}</div>
        <div class="fw-meta">${fw.date} • ${fw.type.toUpperCase()} ${exts ? '• ' + exts : ''}</div>
      </div>
      <button class="btn btn-primary" onclick="window.openFlashModal('${pcb.id}', '${fw.id}', '${fw.version}')">Select for Flash</button>
    </div>
  `}).join('');

  return `
    <div class="main-content fade-in" id="pcb-view">
      <button class="back-btn" onclick="window.showDashboard()">
        ← Back to Dashboard
      </button>
      
      <div class="detail-header">
        <div style="display: flex; gap: 20px; align-items: flex-start;">
          ${pcb.image_data ? `<img src="${pcb.image_data}" style="width: 100px; height: 100px; object-fit: cover; border-radius: 8px;">` : ''}
          <div>
            <h1 style="margin-bottom: 5px;">${pcb.name}</h1>
            <p style="color: var(--text-secondary); margin-bottom: 10px;">${pcb.description || ''}</p>
            <p style="color: var(--text-secondary); font-size: 0.9rem;">Currently installed: <strong>${pcb.version}</strong></p>
          </div>
        </div>
        <button class="btn admin-only" onclick="window.openEditPcbModal('${pcb.id}')">Edit PCB</button>
      </div>

      <div class="fw-section">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; border-bottom: 1px solid var(--border-color); padding-bottom: 10px;">
          <h2 style="margin: 0; border: none; padding: 0;">Available Firmware</h2>
          <div style="display: flex; gap: 10px;">
            <button class="btn" onclick="window.syncGithub('${pcb.id}')">🔄 Sync GitHub</button>
            <button class="btn admin-only-block" style="display:none;" onclick="window.importBinary('${pcb.id}')">Import Binary</button>
          </div>
        </div>
        
        <div class="fw-list">
          ${fwList.length > 0 ? fwList : '<p style="color: var(--text-secondary);">No firmware found.</p>'}
        </div>
      </div>
    </div>
  `;
}

window.viewPcb = async function(pcbId) {
  currentPcbViewId = pcbId;
  const appContainer = document.querySelector('.main-content');
  if (appContainer) {
    appContainer.outerHTML = await renderPcbView(pcbId);
  }
};

window.showDashboard = function() {
  currentPcbViewId = null;
  // Update nav active state
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  document.getElementById('nav-dashboard').classList.add('active');
  
  const appContainer = document.querySelector('.main-content');
  if (appContainer) {
    appContainer.outerHTML = renderDashboard();
  }
};

let suiteDraft = null;

window.showSuites = function() {
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  document.getElementById('nav-suites').classList.add('active');

  let html = '';
  if (suiteDraft !== null) {
    // ---- SUITE BUILDER VIEW ----
    const pcbCards = mockPCBs.map((pcb, index) => {
      const selectedVer = suiteDraft.pcb_versions[pcb.id] || 'ignore';
      const imgHtml = pcb.image_data ? `<img src="${pcb.image_data}" alt="${pcb.name}">` : `<span style="color: var(--text-secondary); font-size: 0.8rem;">No Image</span>`;
      return `
      <div class="pcb-card fade-in" style="animation-delay: ${index * 0.1}s; cursor: pointer; border-color: ${selectedVer !== 'ignore' ? 'var(--success-color)' : 'var(--border-color)'}" onclick="window.openSuitePcbSelector('${pcb.id}')">
        <div class="pcb-img-container">${imgHtml}</div>
        <div class="pcb-card-header">
          <div class="pcb-title">${pcb.name}</div>
        </div>
        <div class="pcb-version" style="margin-top: auto; padding-top: 10px;">
          Configured: <strong style="color: ${selectedVer !== 'ignore' ? 'var(--success-color)' : 'var(--text-secondary)'}">${selectedVer === 'ignore' ? 'Ignore' : selectedVer}</strong>
        </div>
      </div>
      `;
    }).join('');

    html = `
      <div class="main-content fade-in" id="suites-view">
        <div class="header">
          <div style="flex-grow: 1;">
            <h1>Suite Builder</h1>
            <input type="text" class="form-input" id="builder-suite-name" placeholder="Enter Suite Name..." value="${suiteDraft.name}" style="font-size: 1.2rem; font-weight: bold; margin-top: 10px; width: 60%;">
          </div>
          <div style="display: flex; gap: 10px; align-items: flex-start;">
            <button class="btn" onclick="window.cancelSuiteBuilder()">Cancel</button>
            <button class="btn btn-primary" onclick="window.saveSuiteBuilder()">💾 Save Suite</button>
          </div>
        </div>
        <p style="color: var(--text-secondary); margin-bottom: 20px;">Click on a PCB below to configure its firmware version for this suite.</p>
        <div class="pcb-grid">
          ${pcbCards}
        </div>
      </div>
    `;
  } else {
    // ---- SUITE LIST VIEW ----
    const suiteList = mockSuites.suites.map(s => {
      const isActive = s.id === mockSuites.active_suite_id;
      return `
        <div class="fw-item" style="border: 2px solid ${isActive ? 'var(--accent-color)' : 'var(--border-color)'}">
          <div class="fw-info">
            <div class="fw-version">${s.name} ${isActive ? '<span class="status-badge status-ok" style="margin-left: 10px;">ACTIVE</span>' : ''}</div>
            <div class="fw-meta">${s.date}</div>
          </div>
          <div style="display: flex; gap: 10px;">
            <button class="btn admin-only-block" style="display:none;" onclick="window.openEditSuiteBuilder('${s.id}')">Edit</button>
            <button class="btn btn-danger admin-only-block" style="display:none;" onclick="window.deleteSuite('${s.id}')">Delete</button>
            ${!isActive ? `<button class="btn btn-primary" onclick="window.setActiveSuite('${s.id}')">Set Active</button>` : ''}
          </div>
        </div>
      `;
    }).join('');

    html = `
      <div class="main-content fade-in" id="suites-view">
        <div class="header">
          <div>
            <h1>Firmware Suites</h1>
            <p style="color: var(--text-secondary); margin-top: 5px;">Manage global car configurations.</p>
          </div>
          <button class="btn btn-primary admin-only" onclick="window.openCreateSuiteBuilder()">+ Create Suite</button>
        </div>
        <div class="fw-list" style="margin-top: 20px;">
          ${suiteList.length > 0 ? suiteList : '<p style="color: var(--text-secondary);">No suites found.</p>'}
        </div>
      </div>
    `;
  }

  const appContainer = document.querySelector('.main-content');
  if (appContainer) {
    appContainer.outerHTML = html;
  }
};

window.openCreateSuiteBuilder = function() {
  suiteDraft = { id: '', name: '', pcb_versions: {} };
  window.showSuites();
};

window.openEditSuiteBuilder = function(suiteId) {
  const suite = mockSuites.suites.find(s => s.id === suiteId);
  if (!suite) return;
  // Deep clone to draft
  suiteDraft = JSON.parse(JSON.stringify(suite));
  window.showSuites();
};

window.cancelSuiteBuilder = function() {
  suiteDraft = null;
  window.showSuites();
};

window.saveSuiteBuilder = async function() {
  const nameInput = document.getElementById('builder-suite-name');
  if (nameInput) {
    suiteDraft.name = nameInput.value;
  }
  if (!suiteDraft.name) return alert("Please enter a name for this suite.");
  
  const isNew = !suiteDraft.id;
  if (isNew) suiteDraft.id = 'suite_' + Math.random().toString(36).substring(2,10);
  if (!suiteDraft.date) suiteDraft.date = new Date().toISOString().split('T')[0];

  await setDoc(doc(db, "suites", suiteDraft.id), {
    name: suiteDraft.name,
    date: suiteDraft.date,
    pcb_versions: suiteDraft.pcb_versions
  });

  suiteDraft = null;
  // UI updates automatically via listener
};

window.setActiveSuite = async function(suiteId) {
  await updateDoc(doc(db, "config", "global"), { active_suite_id: suiteId });
};

window.deleteSuite = async function(suiteId) {
  if (confirm("Are you sure you want to delete this suite?")) {
    await deleteDoc(doc(db, "suites", suiteId));
  }
};

window.importBinary = async function(pcbId) {
  if (window.pywebview) {
    const result = await pywebview.api.import_binary(pcbId);
    if (result.status === 'success') {
      alert('Imported ' + result.file);
      window.viewPcb(pcbId); // Refresh view
    } else if (result.status === 'error') {
      alert('Error: ' + result.message);
    }
  } else {
    alert('PyWebview not available. Cannot open file dialog.');
  }
};

window.syncGithub = async function(pcbId) {
  const pcb = mockPCBs.find(p => p.id === pcbId);
  if (pcb && window.pywebview) {
    await pywebview.api.sync_github(pcbId, pcb.github);
    window.viewPcb(pcbId); // Refresh view
  } else {
    alert('PyWebview not available or PCB not found. Cannot sync.');
  }
};

// Flash UI State
let currentFlashPcb = null;
let currentFlashFw = null;
let currentFlashFwVersion = null;

window.openFlashModal = function(pcbId, fwId, fwVersion) {
  currentFlashPcb = pcbId;
  currentFlashFw = fwId;
  currentFlashFwVersion = fwVersion;
  
  const pcb = mockPCBs.find(p => p.id === pcbId);
  document.getElementById('flash-modal-title').innerText = `Flash ${pcb.name}`;
  document.getElementById('flash-modal-subtitle').innerText = `Firmware: ${fwVersion}`;
  
  // Reset UI
  document.getElementById('flash-settings').style.display = 'block';
  document.getElementById('flash-progress-section').classList.remove('active');
  document.getElementById('flash-terminal').innerHTML = '';
  document.getElementById('flash-progress-fill').style.width = '0%';
  document.getElementById('btn-start-flash').style.display = 'block';
  document.getElementById('btn-close-flash').innerText = 'Cancel';
  
  document.getElementById('flash-modal').classList.add('active');
};

window.closeFlashModal = function() {
  document.getElementById('flash-modal').classList.remove('active');
};

window.startFlashing = async function() {
  const method = document.getElementById('flash-interface').value;
  
  // Hide settings, show progress
  document.getElementById('flash-settings').style.display = 'none';
  document.getElementById('flash-progress-section').classList.add('active');
  document.getElementById('btn-start-flash').style.display = 'none';
  document.getElementById('btn-close-flash').style.display = 'none'; // hide until done
  
  window.updateFlashProgress(5, 'Preparing payload...');
  
  if (window.pywebview) {
    await pywebview.api.flash_firmware(currentFlashPcb, currentFlashFw, method);
  } else {
    // Mock local progress if pywebview not found
    window.updateFlashProgress(50, 'Mock flashing...');
    setTimeout(() => window.flashComplete('success'), 2000);
  }
};

window.updateFlashProgress = function(percent, message) {
  document.getElementById('flash-progress-fill').style.width = `${percent}%`;
  const terminal = document.getElementById('flash-terminal');
  terminal.innerHTML += `<div class="terminal-line">[${new Date().toLocaleTimeString()}] ${message}</div>`;
  terminal.scrollTop = terminal.scrollHeight;
};

window.flashComplete = async function(status) {
  const terminal = document.getElementById('flash-terminal');
  if (status === 'success') {
    terminal.innerHTML += `<div class="terminal-line" style="color: var(--success-color);">[${new Date().toLocaleTimeString()}] Operation completed successfully.</div>`;
    
    // Update local state mock to show updated
    const pcb = mockPCBs.find(p => p.id === currentFlashPcb);
    if(pcb) { 
      pcb.status = 'ok'; 
      pcb.version = currentFlashFwVersion;
      await updateDoc(doc(db, "pcbs", pcb.id), { version: pcb.version, status: 'ok' });
    }
  } else {
    terminal.innerHTML += `<div class="terminal-line" style="color: var(--danger-color);">[${new Date().toLocaleTimeString()}] Operation failed.</div>`;
  }
  terminal.scrollTop = terminal.scrollHeight;
  
  document.getElementById('btn-close-flash').innerText = 'Done';
  document.getElementById('btn-close-flash').style.display = 'block';
  
  // Refresh PCB view in background
  if(document.getElementById('pcb-view')) {
    window.viewPcb(currentFlashPcb);
  }
};

function renderModal() {
  return `
    <div class="modal-overlay" id="flash-modal">
      <div class="modal-content">
        <div class="modal-header" id="flash-modal-title">Flash Firmware</div>
        <p style="color: var(--text-secondary); margin-bottom: 20px;" id="flash-modal-subtitle"></p>
        <div id="flash-settings">
          <div class="form-group">
            <label>Communication Interface</label>
            <select class="form-select" id="flash-interface">
              <option value="can">CAN Bus (Kvaser/Vector via OpenBLT)</option>
              <option value="swd">SWD (ST-Link / OpenOCD)</option>
              <option value="usb">USB DFU</option>
            </select>
          </div>
        </div>
        <div class="progress-container" id="flash-progress-section">
          <div class="progress-bar-bg"><div class="progress-bar-fill" id="flash-progress-fill"></div></div>
          <div class="terminal-log" id="flash-terminal"></div>
        </div>
        <div class="modal-actions">
          <button class="btn" id="btn-close-flash" onclick="window.closeFlashModal()">Cancel</button>
          <button class="btn btn-primary" id="btn-start-flash" onclick="window.startFlashing()">Start Flashing</button>
        </div>
      </div>
    </div>
    
    <!-- Admin Login Modal -->
    <div class="modal-overlay" id="login-modal">
      <div class="modal-content">
        <div class="modal-header">Admin Login</div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-input" id="admin-password">
        </div>
        <div class="modal-actions">
          <button class="btn" onclick="document.getElementById('login-modal').classList.remove('active')">Cancel</button>
          <button class="btn btn-primary" onclick="window.submitLogin()">Login</button>
        </div>
      </div>
    </div>

    <!-- PCB Form Modal -->
    <div class="modal-overlay" id="pcb-form-modal">
      <div class="modal-content">
        <div class="modal-header" id="pcb-form-title">Add PCB</div>
        <input type="hidden" id="pcb-form-id">
        <div class="form-group">
          <label>Name</label>
          <input type="text" class="form-input" id="pcb-name">
        </div>
        <div class="form-group">
          <label>Description</label>
          <input type="text" class="form-input" id="pcb-desc">
        </div>
        <div class="form-group">
          <label>GitHub Release URL</label>
          <input type="text" class="form-input" id="pcb-github" placeholder="e.g. https://github.com/SUFST/BMS-firmware">
        </div>
        <div class="form-group">
          <label>PCB Image</label>
          <div style="display: flex; gap: 10px; align-items: center;">
            <input type="text" class="form-input" id="pcb-image" readonly placeholder="No image selected">
            <button class="btn" onclick="window.selectImage()">Select File</button>
          </div>
        </div>
        <div class="modal-actions">
          <button class="btn" onclick="document.getElementById('pcb-form-modal').classList.remove('active')">Cancel</button>
          <button class="btn btn-primary" onclick="window.submitPcbForm()">Save</button>
        </div>
      </div>
    </div>

    <!-- Suite PCB Selector Modal -->
    <div class="modal-overlay" id="suite-selector-modal">
      <div class="modal-content">
        <div class="modal-header" id="suite-selector-title">Select Firmware</div>
        <input type="hidden" id="suite-selector-pcb-id">
        <div id="suite-selector-list" style="max-height: 400px; overflow-y: auto; margin-bottom: 20px;">
          <!-- Dynamically populated -->
        </div>
        <div class="modal-actions">
          <button class="btn" onclick="document.getElementById('suite-selector-modal').classList.remove('active')">Cancel</button>
          <button class="btn btn-primary" onclick="window.confirmSuitePcbSelection()">Confirm</button>
        </div>
      </div>
    </div>
    
    <!-- Full Car Flash Modal -->
    <div class="modal-overlay" id="flash-full-modal">
      <div class="modal-content">
        <div class="modal-header">Flash Full Car</div>
        
        <div id="flash-settings-full">
          <p style="margin-bottom: 15px;">This will flash all PCBs to the versions specified in the Active Suite.</p>
          <div class="form-group">
            <label>Communication Interface</label>
            <select class="form-select" id="flash-interface-full">
              <option value="can">CAN Bus (Kvaser/Vector via OpenBLT)</option>
            </select>
          </div>
        </div>
        
        <div class="progress-container" id="flash-progress-section-full">
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" id="flash-progress-fill-full" style="width: 0%"></div>
          </div>
          <div class="progress-text" id="flash-progress-text-full">Preparing...</div>
          <div class="terminal-log" id="flash-terminal-full"></div>
        </div>
        
        <div class="modal-actions">
          <button class="btn" id="btn-close-flash-full" onclick="document.getElementById('flash-full-modal').classList.remove('active')">Cancel</button>
          <button class="btn btn-primary" id="btn-start-flash-full" onclick="window.startFullCarFlash()">Start Flash Sequence</button>
        </div>
      </div>
    </div>
  `;
}

window.toggleAdmin = function() {
  if (isAdmin) {
    isAdmin = false;
    document.body.classList.remove('admin-mode-active');
    document.getElementById('admin-btn-text').innerText = 'Admin Login';
  } else {
    document.getElementById('login-modal').classList.add('active');
    document.getElementById('admin-password').value = '';
    document.getElementById('admin-password').focus();
  }
};

window.submitLogin = async function() {
  const pwd = document.getElementById('admin-password').value;
  if (window.pywebview) {
    const res = await pywebview.api.login(pwd);
    if (res.status === 'success') {
      isAdmin = true;
      document.body.classList.add('admin-mode-active');
      document.getElementById('admin-btn-text').innerText = 'Logout Admin';
      document.getElementById('login-modal').classList.remove('active');
    } else {
      alert("Invalid password");
    }
  } else {
    // Mock login
    if (pwd === 'sufst') {
      isAdmin = true;
      document.body.classList.add('admin-mode-active');
      document.getElementById('admin-btn-text').innerText = 'Logout Admin';
      document.getElementById('login-modal').classList.remove('active');
    } else {
      alert("Invalid mock password");
    }
  }
};

window.openAddPcbModal = function() {
  document.getElementById('pcb-form-title').innerText = 'Add PCB';
  document.getElementById('pcb-form-id').value = '';
  document.getElementById('pcb-name').value = '';
  document.getElementById('pcb-desc').value = '';
  document.getElementById('pcb-github').value = '';
  document.getElementById('pcb-image').value = '';
  document.getElementById('pcb-form-modal').classList.add('active');
};

window.openEditPcbModal = function(pcbId) {
  const pcb = mockPCBs.find(p => p.id === pcbId);
  if (!pcb) return;
  document.getElementById('pcb-form-title').innerText = 'Edit PCB';
  document.getElementById('pcb-form-id').value = pcbId;
  document.getElementById('pcb-name').value = pcb.name;
  document.getElementById('pcb-desc').value = pcb.description || '';
  document.getElementById('pcb-github').value = pcb.github || '';
  document.getElementById('pcb-image').value = pcb.image || '';
  document.getElementById('pcb-form-modal').classList.add('active');
};

window.selectImage = async function() {
  if (window.pywebview) {
    const res = await pywebview.api.select_image();
    if (res.status === 'success') {
      document.getElementById('pcb-image').value = res.file;
    } else if (res.status === 'error') {
      alert("Error: " + res.message);
    }
  } else {
    document.getElementById('pcb-image').value = "mock_image.png";
  }
};

window.submitPcbForm = async function() {
  let id = document.getElementById('pcb-form-id').value;
  const data = {
    name: document.getElementById('pcb-name').value,
    description: document.getElementById('pcb-desc').value,
    github: document.getElementById('pcb-github').value,
    image: document.getElementById('pcb-image').value
  };
  
  if (!id) {
    id = 'pcb_' + Math.random().toString(36).substring(2,10);
    data.status = 'ok';
    data.version = 'Unknown';
  }
  
  await setDoc(doc(db, "pcbs", id), data, { merge: true });
  document.getElementById('pcb-form-modal').classList.remove('active');
};

window.openSuitePcbSelector = async function(pcbId) {
  const pcb = mockPCBs.find(p => p.id === pcbId);
  document.getElementById('suite-selector-title').innerText = `Select firmware for ${pcb.name}`;
  document.getElementById('suite-selector-pcb-id').value = pcbId;
  const container = document.getElementById('suite-selector-list');
  container.innerHTML = '<p style="color:var(--text-secondary);">Loading firmwares...</p>';
  
  document.getElementById('suite-selector-modal').classList.add('active');

  let fws = [];
  if (window.pywebview) fws = await pywebview.api.get_firmwares(pcb.id, pcb.github);
  
  const currentVal = suiteDraft.pcb_versions[pcbId] || 'ignore';
  
  const opts = fws.map(f => `
    <label class="fw-radio-item">
      <input type="radio" name="suite-fw-select" value="${f.version}" ${currentVal === f.version ? 'checked' : ''}>
      <div>
        <strong>${f.version}</strong>
        <div style="color:var(--text-secondary);font-size:0.8rem">${f.date} (${f.type})</div>
      </div>
    </label>
  `).join('');
  
  container.innerHTML = `
    <div class="fw-radio-list">
      <label class="fw-radio-item">
        <input type="radio" name="suite-fw-select" value="ignore" ${currentVal === 'ignore' ? 'checked' : ''}>
        <span style="color:var(--text-secondary)">-- Don't flash this PCB --</span>
      </label>
      ${opts}
    </div>
  `;
};

window.confirmSuitePcbSelection = function() {
  const pcbId = document.getElementById('suite-selector-pcb-id').value;
  const radios = document.getElementsByName('suite-fw-select');
  let val = 'ignore';
  for (const r of radios) {
    if (r.checked) val = r.value;
  }
  
  suiteDraft.pcb_versions[pcbId] = val;
  document.getElementById('suite-selector-modal').classList.remove('active');
  window.showSuites(); // re-render builder grid
};

function initApp() {
  document.querySelector('#app').innerHTML = `
    ${renderSidebar()}
    ${renderDashboard()}
    ${renderModal()}
  `;

  // Start status polling
  setInterval(() => {
    if (window.pywebview && currentFlashPcb) {
      window.pollFlashStatus();
    }
  }, 500);

  // Check if pywebview is available (running inside python)
  window.addEventListener('pywebviewready', async function() {
    console.log("Pywebview is ready!");
    try {
      const configDoc = await getDoc(doc(db, "config", "global"));
      if (!configDoc.exists()) {
         console.log("Migrating local database.json to Firebase...");
         const localPcbs = await pywebview.api.get_pcbs();
         const localSuitesData = await pywebview.api.get_suites();
         
         const batch = writeBatch(db);
         for (const p of localPcbs) {
            delete p.image_data; // Fix Firebase 1MB limit error
            batch.set(doc(db, "pcbs", p.id), p);
         }
         for (const s of localSuitesData.suites) {
            batch.set(doc(db, "suites", s.id), s);
         }
         batch.set(doc(db, "config", "global"), { active_suite_id: localSuitesData.active_suite_id || "" });
         
         await batch.commit();
         console.log("Migration complete!");
      }
      
      // Resolve initial images if onSnapshot fired before pywebviewready
      if (mockPCBs.length > 0) {
        for (let p of mockPCBs) {
          if (p.image && !p.image_data) p.image_data = await pywebview.api.read_local_image(p.image);
        }
        if (document.getElementById('dashboard-view')) window.showDashboard();
      }
    } catch (e) {
      console.error(e);
    }
  });
}

// Full Car Flash Logic
window.openFlashFullCarModal = function() {
  document.getElementById('flash-full-modal').classList.add('active');
  document.getElementById('flash-settings-full').style.display = 'block';
  document.getElementById('flash-progress-section-full').classList.remove('active');
  document.getElementById('btn-start-flash-full').style.display = 'block';
  document.getElementById('btn-close-flash-full').style.display = 'block';
  document.getElementById('btn-close-flash-full').innerText = 'Cancel';
  document.getElementById('flash-terminal-full').innerHTML = '';
};

window.startFullCarFlash = async function() {
  const method = document.getElementById('flash-interface-full').value;
  const activeSuite = mockSuites.suites.find(s => s.id === mockSuites.active_suite_id);
  if (!activeSuite) return alert("No active suite set!");

  document.getElementById('flash-settings-full').style.display = 'none';
  document.getElementById('flash-progress-section-full').classList.add('active');
  document.getElementById('btn-start-flash-full').style.display = 'none';
  document.getElementById('btn-close-flash-full').style.display = 'none';
  
  const terminal = document.getElementById('flash-terminal-full');
  terminal.innerHTML = '';
  const log = (msg) => terminal.innerHTML += `<div class="terminal-line">[${new Date().toLocaleTimeString()}] ${msg}</div>`;

  const pcbsToFlash = Object.keys(activeSuite.pcb_versions).filter(id => activeSuite.pcb_versions[id] !== 'ignore');
  
  for (let i = 0; i < pcbsToFlash.length; i++) {
     const pcbId = pcbsToFlash[i];
     const pcb = mockPCBs.find(p => p.id === pcbId);
     const fwVersion = activeSuite.pcb_versions[pcbId];
     
     document.getElementById('flash-progress-fill-full').style.width = Math.floor((i / pcbsToFlash.length) * 100) + '%';
     document.getElementById('flash-progress-text-full').innerText = `Flashing ${pcb?.name || pcbId} (${i+1}/${pcbsToFlash.length})...`;
     log(`Starting sequence for ${pcb?.name || pcbId}...`);
     
     if (window.pywebview) {
        // Find the actual fw.id matching this version
        const fws = await pywebview.api.get_firmwares(pcbId);
        const fw = fws.find(f => f.version === fwVersion);
        if (fw) {
           await pywebview.api.flash_firmware(pcbId, fw.id, method);
           
           // Mock poll until done since get_flash_status is mocked
           await new Promise(r => setTimeout(r, 2000));
           log(`<span style="color:var(--success-color)">Successfully flashed ${pcb?.name || pcbId}!</span>`);
           
           // Save version
           pcb.version = fwVersion;
           await updateDoc(doc(db, "pcbs", pcbId), { version: fwVersion, status: 'ok' });
        } else {
           log(`<span style="color:red">Error: Could not find firmware for version ${fwVersion}</span>`);
        }
     } else {
        // Mock
        await new Promise(r => setTimeout(r, 2000));
        log(`Mock flashed ${pcb?.name || pcbId} successfully.`);
     }
  }
  
  document.getElementById('flash-progress-fill-full').style.width = '100%';
  document.getElementById('flash-progress-text-full').innerText = `Full Car Flash Complete!`;
  document.getElementById('btn-close-flash-full').style.display = 'block';
  document.getElementById('btn-close-flash-full').innerText = 'Close';
  log("<b>All Sequence Steps Finished.</b>");
};

initApp();
