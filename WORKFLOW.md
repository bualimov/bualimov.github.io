# Website Development & Deployment Workflow

## Overview
- **Source Code Branch**: `source-code-backup` (your React source code lives here)
- **Deployment Branch**: `main` (GitHub Pages deploys from here)
- **Your Website**: https://bualimov.github.io

## Daily Workflow

### Step 1: Start Working
```bash
# Make sure you're on the source-code-backup branch
git checkout source-code-backup

# Pull latest changes (if working from multiple computers)
git pull origin source-code-backup
```

### Step 2: Make Your Changes
- Edit files in the `src/` folder
- Edit `public/` folder if needed (images, manifest, etc.)
- Make as many changes as you want!

### Step 3: Test Locally (Optional but Recommended)
```bash
npm start
```
This opens http://localhost:3000 so you can preview your changes.

Press `Ctrl+C` when done testing.

### Step 4: Save Your Changes
```bash
# Stage your changes
git add .

# Commit with a descriptive message
git commit -m "Description of what you changed"

# Push to backup your source code
git push origin source-code-backup
```

### Step 5: Deploy to Your Live Website
```bash
npm run deploy
```

That's it! The script automatically:
- ✅ Builds your React app
- ✅ Switches to main branch
- ✅ Updates deployment files
- ✅ Pushes to GitHub
- ✅ Switches back to source-code-backup

Wait 2-3 minutes, then check https://bualimov.github.io to see your changes live!

---

## Quick Reference

### Just want to test locally?
```bash
npm start
```

### Just want to save work (no deployment)?
```bash
git add .
git commit -m "Your message"
git push origin source-code-backup
```

### Ready to deploy?
```bash
npm run deploy
```

### Check deployment status
Go to: https://github.com/bualimov/bualimov.github.io/deployments

---

## Troubleshooting

### "You have uncommitted changes" error
You need to commit your changes first:
```bash
git add .
git commit -m "Your changes"
```
Then try `npm run deploy` again.

### Deployment succeeded but site didn't update
- Wait 2-3 minutes (GitHub Pages takes time to rebuild)
- Hard refresh your browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Check deployment status on GitHub

### Wrong branch?
```bash
git checkout source-code-backup
```

### Want to see all branches?
```bash
git branch -a
```
