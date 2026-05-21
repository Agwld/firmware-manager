# SUFST Firmware Manager

A desktop application designed for the Southampton University Formula Student Team (SUFST) to manage, distribute, and track firmware deployments across the vehicle's PCBs.

## Overview

The SUFST Firmware Manager provides a centralized platform for managing vehicle electronics. It allows team members to deploy firmware to specific boards (e.g., BMS, VCU), pull the latest releases from GitHub, manage local binary imports, and synchronize fleet data in real-time across the team using Firebase.

Built for the rigors of track-side testing and endurance racing, the manager supports offline persistence to ensure reliable operation even without an internet connection.

## Features

- **Fleet & PCB Management**: Track all vehicle PCBs and their current firmware versions.
- **GitHub Integration**: Automatically fetch and sync firmware releases directly from SUFST GitHub repositories.
- **Custom Firmware Imports**: Load `.bin`, `.hex`, or `.srec` files locally for testing experimental builds.
- **Real-Time Synchronization**: Firebase (Firestore) integration for syncing firmware state and PCB metadata across the engineering team.
- **Offline Mode**: Local caching mechanism ensures the application remains fully functional at the track without internet access.
- **Flashing Interface**: Unified interface for flashing firmwares over required interfaces (CAN, SPI, etc.).

## Tech Stack

- **Backend**: Python 3 with `pywebview` for the desktop application window and native file system interactions.
- **Frontend**: Vite-powered web application for a lightweight, highly responsive UI.
- **Database**: Firebase Firestore (real-time cloud sync) + Local JSON Database (offline persistence).

## Directory Structure

- `SUFST-Desktop/app.py`: Main Python entry point containing the desktop window configuration and local API bindings.
- `SUFST-Desktop/frontend/`: The Vite web application serving as the UI.
- `SUFST-Desktop/firmwares/`: Local directory for caching downloaded and custom-imported firmware binaries.
- `SUFST-Desktop/images/`: Local storage for PCB reference images.

## Setup & Installation

### Prerequisites

- Python 3.10+
- Node.js & npm (for frontend dependencies)

### Instructions

1. **Install Python Dependencies**
   Navigate to the `SUFST-Desktop` directory and install the required Python packages (consider using a virtual environment):
   ```bash
   cd SUFST-Desktop
   pip install -r requirements.txt
   ```

2. **Install Frontend Dependencies**
   Navigate to the frontend directory and install NPM packages:
   ```bash
   cd SUFST-Desktop/frontend
   npm install
   ```

3. **Development Mode**
   To run the application in development mode (with hot-reloading for the frontend):
   
   First, start the Vite development server:
   ```bash
   cd SUFST-Desktop/frontend
   npm run dev
   ```
   
   Then, in a separate terminal, launch the Python backend:
   ```bash
   cd SUFST-Desktop
   python app.py
   ```

4. **Production Build**
   To build the application for production deployment:
   ```bash
   cd SUFST-Desktop/frontend
   npm run build
   ```
   Once built, running `python app.py` will automatically serve the production assets from the `dist` folder.

## Usage

When the application launches, it will attempt to sync with the cloud database. If offline, it will use the local cached state. Use the interface to add PCBs, paste GitHub repository links for automatic firmware fetching, or manually import local binary files to deploy to the vehicle.
