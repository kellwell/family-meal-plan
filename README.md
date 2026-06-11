# Family Meal Plan

A 6-week nutritionally optimised, oven-first, baby-friendly family meal plan, built as a single-page React app.

## Run it locally

You need [Node.js](https://nodejs.org/) version 18 or newer installed.

```bash
npm install      # install dependencies (first time only)
npm run dev      # start a local dev server, then open the URL it prints
```

To make a production build and preview it:

```bash
npm run build    # output goes to the dist/ folder
npm run preview  # serve the built dist/ folder locally
```

## Deploy to GitHub Pages

There are two ways to publish this. **Option A is the recommended one** — once it's set up, every time you push a change it redeploys itself automatically.

### Option A — Automatic, via GitHub Actions (recommended)

1. Create a new repository on GitHub (any name, e.g. `baby-meal-plan`).
2. Push this whole folder to it:
   ```bash
   git init
   git add .
   git commit -m "Initial meal plan app"
   git branch -M main
   git remote add origin https://github.com/kellwell/family-meal-plan.git
   git push -u origin main
   ```
3. In the repo on GitHub, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **GitHub Actions**.
5. That's it. The included workflow (`.github/workflows/deploy.yml`) runs on every push to `main`, builds the site, and publishes it. Watch progress under the **Actions** tab; when it finishes, the site is live at **https://kellwell.github.io/family-meal-plan/**.

### Option B — Manual, via the `gh-pages` command

Use this if you'd rather publish on demand from your own machine instead of on every push.

1. Push the repo to GitHub (steps 1–2 above).
2. Run:
   ```bash
   npm install
   npm run deploy
   ```
   This builds the site and pushes the `dist/` folder to a branch called `gh-pages`.
3. In **Settings → Pages**, set **Source** to **Deploy from a branch**, pick the **`gh-pages`** branch and the **`/ (root)`** folder, and save.

Re-run `npm run deploy` any time you want to publish updates.

## A note on the base path

`vite.config.js` pins `base: '/family-meal-plan/'` so the build's asset URLs match the live address **https://kellwell.github.io/family-meal-plan/** exactly. This is the canonical setup for a GitHub Pages project site. The one thing to keep in mind: this string must match the repository name — if you ever rename the repo, update `base` to `/new-repo-name/` to match, or the page will load blank (assets pointing at the old path).

## Project structure

```
baby-meal-plan/
├─ .github/workflows/deploy.yml   GitHub Actions deploy workflow (Option A)
├─ index.html                     HTML entry point
├─ package.json                   dependencies + scripts
├─ vite.config.js                 build config (relative base path)
└─ src/
   ├─ App.jsx                     the meal plan app (all content lives here)
   ├─ main.jsx                    mounts App into the page
   └─ index.css                   minimal global reset
```

All the recipes, weeks, allergen data and prep checklists live in `src/App.jsx`.
