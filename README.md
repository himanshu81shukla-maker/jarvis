# JARVIS — install on your Android phone

A complete installable app (PWA). Once hosted, Android installs it with its own
reactor icon and runs it full-screen like a native app — voice control, tasks,
briefings and on-device memory included.

## Works with two kinds of API key
- **NVIDIA NIM** key (`nvapi-…`) — free at https://build.nvidia.com → any model → "Get API Key".
  JARVIS auto-detects it and runs on Llama 3.3 70B. Briefings use live weather
  (Open-Meteo). No live news search on this link.
- **Anthropic** key (`sk-ant-…`) — from https://console.anthropic.com.
  Adds live web search in chat + briefings.

⚠ SECURITY: never paste your key into any file in this folder. You enter the key
INSIDE the app (gear icon), and it is stored only on your phone. If a key has
ever been shared in a chat or online, regenerate it.

## Step 1 — Host it free on GitHub Pages (~5 min, no coding)
1. On https://github.com, click **+ → New repository**, name it `jarvis`, keep it **Public**, Create.
2. Click **uploading an existing file**, drag in ALL files from this folder
   (index.html, manifest.webmanifest, sw.js, the 3 icon PNGs). Commit.
3. **Settings → Pages** → Branch: **main**, folder **/ (root)** → Save.
4. After ~1 minute your app is live at `https://YOUR-USERNAME.github.io/jarvis/`

## Step 2 — Install on your phone
1. Open that link in **Chrome** on Android.
2. Tap the **"Add JARVIS to Home screen / Install"** prompt (or ⋮ → Add to Home screen).
3. Launch JARVIS from your home screen.

## Step 3 — Connect the brain
1. Gear icon → **API key** → paste your `nvapi-…` (or `sk-ant-…`) key → **Apply**.
2. Gear icon → set **your city** so briefings know where you are.
3. Allow microphone access. Tap the reactor core and talk.

## Good to know
- All data (key, chats, tasks, notes) lives only on your phone. Visitors to your
  link get an empty JARVIS and would need their own key.
- Say things like "remind me to call mom at 6pm" or "note that…" — JARVIS files
  them into Protocols / Memory Bank itself.
- The shell opens offline; answering questions needs internet.
- If NVIDIA requests are ever blocked by a network/browser (CORS), JARVIS shows a
  clear message — an Anthropic key connects reliably from browsers.
- iPhone: installs via Safari → Share → Add to Home Screen; voice *input* is
  unreliable on iOS, typing + spoken replies work.

## Why not an .apk?
A PWA gives the same home-screen, full-screen experience with zero build tools and
self-updates when you update the repo. For a Play Store APK later, wrap this exact
folder with Google's free Bubblewrap tool — no app changes needed.
