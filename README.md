# ShopEase — E-Commerce Product Catalog

A complete, working React + Vite + React Router project for the Full-Stack
Deployment & Project Architecture capstone assignment.

## What was fixed vs. the original ChatGPT version

1. **`ProductDetails.jsx` crash** — if someone visited a bad product ID
   (e.g. `/product/99`), `product` was `undefined` and `product.name`
   threw an error, crashing the whole app. Added a "Product Not Found"
   fallback.
2. **Broken images** — `via.placeholder.com` is unreliable / often
   timing out. Swapped to `picsum.photos`, which is stable.
3. **Missing `alt` text** on product images (accessibility + lint issue).
4. **No 404 fix for Vercel** — the original wrote about a 404 routing
   error but never gave the fix. Added `vercel.json` with a rewrite rule
   so client-side routes (`/products`, `/product/2`, etc.) work after
   deployment instead of 404ing on refresh.
5. **No `.gitignore`** — without it, `node_modules` and `dist` get
   pushed to GitHub, bloating the repo. Added one.
6. **Missing `package.json` / `vite.config.js`** — the tutorial assumed
   `npm create vite` would generate these, but didn't show their final
   contents, so you'd have nothing to compare against. Included both.
7. Added a 4th product, descriptions, and a real responsive grid
   (1 column on phones, 2 on tablets, 3 on desktop) instead of a single
   unstyled list.

## Step-by-step: running this in VS Code

### 1. Unzip and open the folder
Unzip `shopease.zip`, then in VS Code: **File → Open Folder** → select
the `shopease` folder.

### 2. Open the terminal
**Terminal → New Terminal** (or `` Ctrl+` ``).

### 3. Install dependencies
```bash
npm install
```
This reads `package.json` and downloads React, React Router, and Vite
into a `node_modules` folder.

### 4. Run the dev server
```bash
npm run dev
```
Click the `http://localhost:5173` link it prints, or `Ctrl+Click` it in
the VS Code terminal.

### 5. Confirm everything works
- Home page loads with the "Browse Products" button
- `/products` shows 4 product cards in a grid
- Clicking "View Details" goes to `/product/1` etc.
- Visiting `/product/999` directly shows "Product Not Found" instead of
  crashing
- `/about` loads
- Resize the browser narrow — the grid should drop to 1–2 columns

### 6. Build the production version
```bash
npm run build
```
This creates an optimized `dist/` folder (minified JS/CSS).

Optional — preview that exact build locally:
```bash
npm run preview
```

### 7. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/shopease.git
git push -u origin main
```
(Create the empty repo on github.com first, then copy its URL into the
`remote add` command above.)

### 8. Deploy on Vercel
1. Go to vercel.com and sign in with GitHub.
2. **Add New Project** → import the `shopease` repo.
3. Leave the framework preset on **Vite** (Vercel auto-detects it).
4. Click **Deploy**.
5. You'll get a live URL like `https://shopease.vercel.app`.

Because `vercel.json` is included, navigating directly to
`/products` or refreshing on `/about` on the live site will **not** 404
— that bug from the original write-up is already fixed.

### 9. What to submit
- GitHub repo link
- Live Vercel URL
- Screenshots: Home, Products, Product Details, mobile view (narrow
  browser or DevTools device toolbar), and the Vercel deployment page

## If something goes wrong

| Symptom | Fix |
|---|---|
| `npm: command not found` | Install Node.js from nodejs.org, restart VS Code |
| Blank white page in browser | Open DevTools (F12) → Console tab, read the error, check the file it points to |
| `Cannot find module 'react-router-dom'` | Run `npm install` again — you likely skipped step 3 |
| 404 on Vercel when refreshing `/products` | Make sure `vercel.json` is in the project root (not inside `src`) and redeploy |
| Images not loading | Check your internet connection — `picsum.photos` needs network access at load time |
| Port 5173 already in use | Stop other running `npm run dev` terminals, or Vite will auto-pick the next free port |
