
# Classroom Compass — Starter (GitHub Pages + Codespaces)

This is a ready-to-deploy React starter for your classroom assistant web app.

## 🚀 What you get
- React single-page app (SPA) with:
  - Search bar
  - Dashboard of issues
  - Response builder
- GitHub Pages deploy scripts pre-configured
- Simple data file (`src/data/issues.json`) you can edit like a document

---

## 🧭 One-time Setup (GitHub Codespaces)
1) **Create a new repo** on GitHub called `classroom-compass` (Public or Private).
2) Click the green **Code** button → **Codespaces** tab → **Create codespace on main**.

---

## 📦 Upload this starter into Codespaces
Inside the Codespaces editor:
1. Click the **hamburger menu (≡)** → **File** → **Upload...** (or drag & drop)  
2. Upload the contents of this zip **into the root of the repo** (you should see `package.json` at the top level).  
   - If a folder with the same name exists, replace/merge files.
3. Open `package.json` and change this line:
   ```json
   "homepage": "https://YOUR-GITHUB-USERNAME.github.io/classroom-compass"
   ```
   Replace `YOUR-GITHUB-USERNAME` with your actual GitHub username.

---

## ▶️ Run locally in Codespaces (optional preview)
In the **Codespaces terminal**:
```bash
npm install
npm start
```
The preview will open in the browser tab (Codespaces will auto-forward the port).

---

## 🌐 Deploy to GitHub Pages
Still in the **Codespaces terminal**:
```bash
npm run deploy
```
Then go to your GitHub repo: **Settings → Pages** and set Source to the `gh-pages` branch (if not already).  
After a minute or two, your site will be live at:
```
https://YOUR-GITHUB-USERNAME.github.io/classroom-compass
```

> Tip: Every time you push changes, run `npm run deploy` again to update the live site.

---

## ✏️ How to add/edit classroom issues
Open `src/data/issues.json` and add another object to the list:
```json
{
  "id": 3,
  "title": "Off-task Behavior",
  "description": "Student is distracted or not following activity instructions.",
  "strategies": [
    "Use proximity and a non-verbal cue",
    "Restate the specific expectation",
    "Acknowledge partial compliance and prompt next step"
  ]
}
```
No code changes needed—just edit this file and redeploy.

---

## 🧩 Project structure
```
classroom-compass/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   ├── Dashboard.jsx
│   │   ├── IssueTile.jsx
│   │   └── ResponseBuilder.jsx
│   ├── data/
│   │   └── issues.json
│   ├── App.jsx
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

---

## 🛠️ Common tasks (for later)
- **Change styles/layout**: edit component JSX/CSS inline styles or add a CSS file.
- **Add new features**: create a new component in `src/components` and import it in `App.jsx`.
- **Use branches/PRs**: create a branch like `feature/daily-tip`, then open a Pull Request.

If you get stuck, open an Issue in your repo and describe what you need—future you (or Copilot) can help!
