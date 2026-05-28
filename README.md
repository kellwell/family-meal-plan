# Family 6-Week Meal Plan

Nutritionally optimised family meal plan — oven-first, baby-friendly, prep on Monday.

Built with React + Vite. Deploys to GitHub Pages automatically on every push to `main`.

---

## 🚀 Deploy to GitHub Pages (one-time setup)

### Step 1 — Create a GitHub repository

1. Go to [github.com/new](https://github.com/new)
2. Name it `family-meal-plan` (or anything you like)
3. Set it to **Private** if you want it just for your family
4. **Do not** initialise with a README — you'll push your own files

### Step 2 — Update the base path in vite.config.js

Open `vite.config.js` and change `family-meal-plan` to match your repository name exactly:

```js
base: '/your-repo-name/',
```

If your repo is named `meal-plan-app`, use `/meal-plan-app/`.

### Step 3 — Push the project to GitHub

Run these commands in your terminal from inside this folder:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repo name.

### Step 4 — Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select **GitHub Actions**
4. Click Save

### Step 5 — Wait for deployment

Go to the **Actions** tab in your repository. You'll see a workflow running called "Deploy to GitHub Pages". It takes about 1–2 minutes.

Once it shows a green ✅, your site is live at:

```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

---

## 💻 Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173)

---

## 🔄 Making updates

Every time you push a change to `main`, GitHub Actions will automatically rebuild and redeploy the site. No manual steps needed after the initial setup.

To update the meal plan data, edit `src/App.jsx` and push.

---

## 📁 Project structure

```
meal-plan-app/
├── src/
│   ├── App.jsx        ← All meal plan data and UI
│   └── main.jsx       ← React entry point
├── index.html
├── vite.config.js     ← Update base path to match your repo name
├── package.json
└── .github/
    └── workflows/
        └── deploy.yml ← Automatic GitHub Pages deployment
```
