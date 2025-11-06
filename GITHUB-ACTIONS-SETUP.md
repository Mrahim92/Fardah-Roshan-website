# GitHub Actions Automated Deployment Setup

## Overview

Your site now has **automated dual deployment**:
- **Push to `main`** → Automatically deploys to **both** staging AND production
- **GitHub Pages** (Staging) → `https://mrahim92.github.io/Fardah-Roshan-website/`
- **Namecheap** (Production) → `https://www.yourdomain.com`

---

## 🎯 How It Works

```
You push code to GitHub (main branch)
        ↓
GitHub Actions runs automatically
        ↓
    ┌───────┴────────┐
    ↓                ↓
Staging Build    Production Build
(npm run build)  (npm run build:production)
    ↓                ↓
GitHub Pages     Namecheap (FTP)
    ↓                ↓
Live in ~1 min   Live in ~2-3 min
```

---

## 🔧 Initial Setup (One-Time)

### Step 1: Get Your Namecheap FTP Credentials

#### Option A: Use Existing FTP Account
1. Log into Namecheap
2. Go to cPanel
3. Find **"FTP Accounts"**
4. Use the main account credentials, or note existing FTP account details

#### Option B: Create New FTP Account (Recommended)
1. In cPanel → **"FTP Accounts"**
2. Click **"Create FTP Account"**
3. Fill in:
   - **Username**: `deploy` (or any name)
   - **Password**: Generate strong password (use the generator)
   - **Directory**: Leave as `/public_html` or select `public_html`
   - **Quota**: Unlimited
4. Click **"Create FTP Account"**
5. Note down:
   - **FTP Server**: Usually `ftp.yourdomain.com` or shown in cPanel
   - **FTP Username**: Usually `deploy@yourdomain.com` or `username_deploy`
   - **FTP Password**: The password you just set
   - **Port**: `21` (default)

### Step 2: Add Secrets to GitHub

**Important**: Never commit FTP credentials to your code. Use GitHub Secrets!

1. **Go to your GitHub repository**:
   - https://github.com/Mrahim92/Fardah-Roshan-website

2. **Click "Settings" tab** (top right)

3. **In left sidebar, click "Secrets and variables" → "Actions"**

4. **Click "New repository secret"** and add these **4 secrets**:

   **Secret 1: FTP_SERVER**
   - Name: `FTP_SERVER`
   - Value: `ftp.yourdomain.com` (replace with YOUR FTP server)
   - Click "Add secret"

   **Secret 2: FTP_USERNAME**
   - Name: `FTP_USERNAME`
   - Value: `deploy@yourdomain.com` (replace with YOUR FTP username)
   - Click "Add secret"

   **Secret 3: FTP_PASSWORD**
   - Name: `FTP_PASSWORD`
   - Value: Your FTP password
   - Click "Add secret"

   **Secret 4: FTP_PORT** (Optional, only if not 21)
   - Name: `FTP_PORT`
   - Value: `21`
   - Click "Add secret"

### Step 3: Update GitHub Pages Settings

1. In your repo, go to **Settings** → **Pages**
2. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
3. Save

---

## 🚀 Usage

### Automatic Deployment (Recommended)

Just push your code normally:

```bash
# Make changes locally
code src/pages/Home.jsx

# Test locally
npm run dev

# Commit and push
git add .
git commit -m "Update home page"
git push origin main

# ✨ Both staging and production deploy automatically!
```

**Check deployment status:**
1. Go to your repo on GitHub
2. Click **"Actions"** tab
3. See both workflows running:
   - ✅ Deploy to GitHub Pages (Staging)
   - ✅ Deploy to Namecheap (Production)

### Manual Deployment (If Needed)

If you want to manually trigger a deployment:

1. Go to **Actions** tab on GitHub
2. Click workflow name:
   - "Deploy to Namecheap (Production)" OR
   - "Deploy to GitHub Pages (Staging)"
3. Click **"Run workflow"** dropdown
4. Click **"Run workflow"** button

---

## ✅ Verify Deployment

### After Pushing to GitHub:

1. **Check GitHub Actions** (~1-3 minutes):
   - Go to **Actions** tab
   - Should see green checkmarks ✅ for both workflows
   - If red ❌, click to see error logs

2. **Check Staging** (~1 minute after build):
   - Visit: https://mrahim92.github.io/Fardah-Roshan-website/
   - Should see your changes

3. **Check Production** (~2-3 minutes after build):
   - Visit: https://www.yourdomain.com
   - Should see your changes
   - May need to hard refresh (Ctrl+Shift+R) to clear cache

---

## 🔍 Troubleshooting

### Deployment Failing?

#### Check 1: Are Secrets Set Correctly?
1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Should see:
   - `FTP_SERVER`
   - `FTP_USERNAME`
   - `FTP_PASSWORD`
3. Click "Update" to verify values (can't see them, but can update)

#### Check 2: FTP Credentials Valid?
Test FTP connection locally:
1. Open FileZilla
2. Use the same credentials you added to GitHub
3. Try to connect
4. If fails, credentials are wrong → Update in cPanel and GitHub Secrets

#### Check 3: Server Directory Correct?
In `.github/workflows/deploy-production.yml`, check:
```yaml
server-dir: /public_html/
```

Some hosts use:
- `/public_html/` (most common)
- `/public_html/www/`
- `/htdocs/`
- `/www/`

Check in cPanel File Manager what your root web directory is.

#### Check 4: Build Errors?
Click on failed workflow → View logs

Common issues:
- `npm ci` fails → Delete `package-lock.json` locally, run `npm install`, commit
- Build fails → Run `npm run build:production` locally to see error

### Still Having Issues?

1. **Check Actions tab** for error messages
2. **View workflow logs**:
   - Click failed workflow
   - Click failed job
   - Read error output
3. **Common error messages**:

   **"Authentication failed"**
   → FTP credentials wrong, update secrets

   **"Cannot upload to directory"**
   → Wrong `server-dir` path, check cPanel

   **"npm ci failed"**
   → Delete and regenerate package-lock.json

   **"Build failed"**
   → Run build locally to debug: `npm run build:production`

---

## 🎨 Workflow Customization

### Change Production Server Directory

Edit `.github/workflows/deploy-production.yml`:

```yaml
server-dir: /public_html/www/  # Change to your path
```

### Deploy to Subdirectory

If your site is in a subdirectory like `www.example.com/mysite/`:

```yaml
server-dir: /public_html/mysite/
```

And update `vite.config.production.js`:
```javascript
base: '/mysite/'
```

### Add Environment Variables

Edit `.github/workflows/deploy-production.yml`:

```yaml
- name: Build production site
  run: npm run build:production
  env:
    VITE_PAYPAL_CLIENT_ID: ${{ secrets.PAYPAL_CLIENT_ID }}
    VITE_GA4_MEASUREMENT_ID: ${{ secrets.GA4_MEASUREMENT_ID }}
```

Then add those secrets in GitHub Settings → Secrets.

### Deploy Only on Specific Branch

Change:
```yaml
on:
  push:
    branches:
      - production  # Only deploy when pushing to 'production' branch
```

### Schedule Automatic Rebuild

Add to trigger section:
```yaml
on:
  push:
    branches: [main]
  schedule:
    - cron: '0 0 * * 0'  # Rebuild every Sunday at midnight
```

---

## 📊 Deployment Status

### View Deployment History

1. Go to **Actions** tab
2. See list of all deployments
3. Click any to view logs
4. Green ✅ = Success, Red ❌ = Failed

### Rollback to Previous Version

If something breaks:

1. **Option A: Revert commit**
   ```bash
   git revert HEAD
   git push origin main
   # Automatically deploys previous version
   ```

2. **Option B: Re-run old workflow**
   - Go to **Actions** tab
   - Find successful previous deployment
   - Click "Re-run jobs"

3. **Option C: Manual upload**
   - Find old code version
   - Build: `npm run build:production`
   - Upload via FTP manually

---

## 🔐 Security Best Practices

### ✅ Do:
- ✅ Use GitHub Secrets for ALL credentials
- ✅ Use dedicated FTP account (not main cPanel account)
- ✅ Limit FTP account to just `/public_html/`
- ✅ Use strong, unique password for FTP
- ✅ Enable 2FA on GitHub account
- ✅ Keep secrets in GitHub, never commit to code

### ❌ Don't:
- ❌ Never commit credentials to `.env` files
- ❌ Never share FTP passwords
- ❌ Never use same password for multiple services
- ❌ Never commit `.env.production` file

---

## 📈 Monitoring

### Check Deployment Time

**Typical times:**
- GitHub Pages (Staging): ~1-2 minutes
- Namecheap (Production): ~2-4 minutes (depends on file size)

**Slow deployment?**
- Check Actions logs for bottlenecks
- Large images slow down FTP uploads
- Consider image optimization

### Set Up Notifications

**Get email on deployment failure:**

1. Go to your GitHub profile → **Settings**
2. Click **Notifications**
3. Under "Actions":
   - ✅ Enable "Send notifications for failed workflows"

---

## 🎯 Your Workflow

```bash
# Daily development workflow:

# 1. Make changes
code src/pages/Home.jsx

# 2. Test locally
npm run dev

# 3. When satisfied, commit
git add .
git commit -m "feat: update home page content"

# 4. Push to GitHub
git push origin main

# 5. ✨ Automatic deployments:
# - Staging live in ~1 minute
# - Production live in ~2-3 minutes

# 6. Verify on both:
# - Staging: https://mrahim92.github.io/Fardah-Roshan-website/
# - Production: https://www.yourdomain.com
```

---

## 🆘 Support

### GitHub Actions Documentation
- https://docs.github.com/en/actions

### FTP Deploy Action
- https://github.com/SamKirkland/FTP-Deploy-Action

### Need Help?
1. Check **Actions** tab for error logs
2. Read error message carefully
3. Google the specific error
4. Ask me for help with the error message

---

## ✨ Benefits of This Setup

- ✅ **Fully automated** - Just push to GitHub
- ✅ **Dual deployment** - Staging + Production
- ✅ **Version controlled** - Every deployment tracked
- ✅ **Easy rollback** - Revert to any version
- ✅ **Secure** - Credentials encrypted in GitHub
- ✅ **Fast** - 2-3 minute deployments
- ✅ **Free** - 2,000 GitHub Actions minutes/month
- ✅ **Scalable** - Handles frequent updates

**You're now set up like a professional development team!** 🎉

