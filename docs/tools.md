# Tools

The Tools section in ONENNABE provides utilities to manage your games, fix Steam issues, and maintain your setup. Access it by clicking **Tools** in the top navigation bar.

---

## 🔄 Game Auto Update

Manages the auto-update setting per game in Steam.

- **Enable (Auto Update)** — Steam will automatically update the game when a new version is available
- **Lock** — pins the game to its current version and prevents Steam from updating it

### Smart Apply

Click **Smart Apply** inside Game Auto Update to automatically apply the recommended setting to all your games at once:

| Game Type | Recommended Setting |
|---|---|
| Denuvo Protected | Auto Update |
| No special tags | Auto Update |
| Hypervisor Bypass | Lock |
| Bypass Available | Lock |

!!! tip
    Always run Smart Apply before downloading a Bypass, Online Patch, or Hypervisor game to make sure the version is locked correctly.

---

## 🧹 Clear Steam Download Cache

Clears Steam's download cache and temporary files, then restarts Steam automatically.

**Use this when:**
- Downloads are corrupted or failing
- Steam is stuck in an update loop
- Patching is unusually slow

!!! note
    Steam will restart after the cache is cleared. You will need to log back in.

---

## 💉 Inject HV Launch Options

Scans your Steam library folders for `HV-PlugNPlay.bat` and automatically injects it into the game's Steam Launch Options.

**Use this when:**
- You want to launch a Hypervisor game directly from Steam
- The HV launch option is missing from the game in Steam

!!! warning "Windows 11 Only"
    `HV-PlugNPlay.bat` only works on Windows 11. Steam will close and restart to apply the changes.

An **Injector Terminal** will appear showing the injection progress and results.

---

## 🔄 Reinstall Steam

Downloads a fresh Steam installer and performs a **clean reinstall** of Steam.

**What is kept:**
- Your unlocked games (`stplug-in`)
- Your installed games (`steamapps`)

**What is deleted:**
- Steam login session
- `userdata/` folder
- All other Steam configuration files

The unlock hook is re-deployed automatically after the reinstall.

!!! danger "You will need to sign in to Steam again"
    Have your Steam username and password ready before running this. Everything except your games and unlocks will be wiped.

---

## 🩹 Fix Unlock Game Issue

Clears Steam's `config` folder to fix games that won't unlock or throw config errors.

**What is kept:**
- `avatarcache`
- `depotcache`
- `stplug-in` (your unlocked games)

Steam closes and restarts automatically after the fix.

!!! warning "You will need to sign in to Steam again"
    Your unlocked games are safe, but your Steam login session will be cleared.

---

## 🛡️ Clear Denuvo Token (Error 88500012)

Fixes the Denuvo activation error **88500012** for a specific game.

**What it does:**
1. Closes Steam
2. Deletes the AppID's `userdata` token and OpenSteamTool owner key
3. Restarts Steam and re-applies the fix

**How to use:**
1. Enter the game's **AppID** in the input box (e.g. `1245620`)
2. Click **Clear Token**

!!! tip "Finding a game's AppID"
    The AppID is in the game's Steam store URL: `store.steampowered.com/app/**1245620**/Game_Name/`

---

## ☁️ CloudRedirect Launcher

A third-party tool (not made by ONENNABE) that provides extra features for managing games and saves.

**Features:**
- **One Click Run Patch** — auto-sets up all necessary patches
- **Cloud saves** — uses your Google account as the cloud save location
- **CAPCOM game save fixes**
- **Offline play** — the Play button stays active even without internet. Do **not** use Steam's built-in Go Offline mode, or you will need to use Fix Steam Stuck at Loading
- **Lock game version** via Manifest Pinning
- **Backup achievements, playtime and unlocked games** to Google — sign in to the same Google account on another PC to sync everything back

!!! note "Third-party tool"
    CloudRedirect is not affiliated with ONENNABE. Download and launch it from within the Tools section.

---

## 🗑️ Delete Standalone Cache

Removes the entire `Steam\depot_key\` folder, which contains all stored depot keys and bypass files.

!!! warning
    After deleting, games will need to be re-processed before they can be downloaded again. Only use this if instructed to by support or if you are doing a clean reset.

---

## 🖼️ Fix Blank Steam Icons

Scans every installed game that has a Desktop shortcut and repairs its icon.

**What it does:**
1. Downloads the correct icon from Steam CDN (with SteamGridDB as fallback)
2. Saves it to `Steam\steam\games\`
3. Repoints the Desktop shortcut to the correct icon

!!! note
    Games without a Desktop shortcut are skipped. Based on [SteamIconFix](https://github.com/ez4y2f/SteamIconFix) — not affiliated with ONENNABE.

---

## 🧹 Clear SUO Cache

Wipes ONENNABE's cached app data — thumbnails, store cache, and temporary files.

**Your licence is kept.** The app reloads automatically after clearing.

**Use this when:**
- Game covers or thumbnails are not loading correctly
- The store is showing outdated or incorrect data

---

## 🗑️ Remove All Games

!!! danger "Destructive — Cannot Be Undone"
    Deletes every unlocked game from your Steam library. You will need to re-add games afterward. Your Steam installation is not affected.

Use this only if you want to completely reset your unlocked game list. Your ONENNABE licence and installed game files are not affected.
