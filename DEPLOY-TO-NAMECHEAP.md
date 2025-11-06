# Deploy to Namecheap Hosting Guide

## Overview

This guide walks you through deploying your React/Vite website to Namecheap shared hosting (cPanel).

**Setup:**
- **GitHub Pages** → Staging/preview site at `mrahim92.github.io/Fardah-Roshan-website`
- **Namecheap** → Production site at your custom domain (e.g., `www.fardahroshan.org`)

---

## Prerequisites

1. ✅ Namecheap hosting account with cPanel access
2. ✅ Domain name (purchased through Namecheap or pointed to Namecheap)
3. ✅ FTP/cPanel credentials from Namecheap

---

## Step 1: Build Your Site for Production

### 1.1 Build the Production Version

Open PowerShell/Terminal and run:

```powershell
cd C:\Users\mrahi\Fardah_Roshan\fardah-roshan-rebuilt
npm run build:production
```

This creates a `dist` folder with your production-ready files.

**What's in the dist folder:**
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [other assets]
├── Computer_Labs/
├── Libraries/
├── Microschools/
├── [all your images and public files]
```

### 1.2 Verify the Build

Test it locally:
```powershell
npm run preview
```

Open: http://localhost:4173

**Check that:**
- ✅ All pages load correctly
- ✅ Images display properly
- ✅ Navigation works
- ✅ Language switching works
- ✅ Donate button works

---

## Step 2: Access Namecheap cPanel

### 2.1 Log into Namecheap

1. Go to: https://www.namecheap.com/
2. Click **"Sign In"**
3. Enter your credentials

### 2.2 Access cPanel

1. Go to **Dashboard** → **Hosting List**
2. Click **"Manage"** next to your hosting plan
3. Click **"Go to cPanel"**

Or direct link: `https://cpanel.yourdomain.com:2083/`

---

## Step 3: Upload Your Site Files

You have **3 options** for uploading:

### Option A: File Manager (Easiest for first time)

#### 1. Open File Manager
- In cPanel, find **"File Manager"** under "Files"
- Click it to open

#### 2. Navigate to public_html
- Find and open the `public_html` folder
- This is your website root directory

#### 3. Clear Existing Files (if any)
- Select all files/folders in `public_html`
- Click **"Delete"** (or right-click → Delete)

#### 4. Upload Your Site
- Click **"Upload"** button at the top
- Click **"Select File"** or drag and drop your **entire `dist` folder**
- Wait for upload to complete (may take 5-10 minutes depending on size)

#### 5. Extract and Move Files
- Go back to File Manager
- You should see a `dist` folder in `public_html`
- Open the `dist` folder
- **Select ALL files inside dist** (Ctrl+A)
- Click **"Move"** at the top
- Move to: `/public_html/`
- Delete the empty `dist` folder

**Your final structure should be:**
```
public_html/
├── index.html
├── assets/
├── Computer_Labs/
├── Libraries/
└── [all other files]
```

### Option B: FTP (Recommended for updates)

#### 1. Get FTP Credentials
In cPanel:
- Go to **"FTP Accounts"**
- Create a new FTP account or use main account
- Note: Username, Password, FTP Server (e.g., `ftp.yourdomain.com`)

#### 2. Download FileZilla (Free FTP Client)
- Download: https://filezilla-project.org/download.php?type=client
- Install it

#### 3. Connect to Your Server
In FileZilla:
- **Host**: `ftp.yourdomain.com` (or the FTP server from cPanel)
- **Username**: Your FTP username
- **Password**: Your FTP password
- **Port**: `21`
- Click **"Quickconnect"**

#### 4. Upload Files
- **Left side** = Your computer
- **Right side** = Your server
- Navigate left side to: `C:\Users\mrahi\Fardah_Roshan\fardah-roshan-rebuilt\dist`
- Navigate right side to: `/public_html/`
- **Select all files INSIDE dist folder** (not the dist folder itself)
- **Drag them to the right side** (to `/public_html/`)
- Wait for upload (progress shown at bottom)

### Option C: Git Deployment (Advanced - Optional)

If you want automatic deployments:
1. SSH into your server (requires SSH access in hosting plan)
2. Clone your repo
3. Set up a post-receive hook
4. Auto-deploy on push

*(Skip this for now - use Option A or B first)*

---

## Step 4: Configure .htaccess for React Router

React uses client-side routing. You need an `.htaccess` file to make it work.

### 4.1 Create .htaccess File

In cPanel File Manager (or via FTP):

1. Go to `public_html`
2. Click **"+ File"**
3. Name it: `.htaccess`
4. Right-click → **"Edit"**
5. Paste this content:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Redirect HTTP to HTTPS (optional but recommended)
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
  
  # Handle React Router
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>

# Compression for faster loading
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/html "access plus 0 seconds"
</IfModule>

# Security Headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

6. Click **"Save Changes"**

---

## Step 5: Update SEO URLs

Your SEO components still have GitHub Pages URLs. Update them:

### 5.1 Update SEO.jsx

In `src/components/SEO.jsx`, line 10:
```javascript
// OLD:
const siteUrl = 'https://mrahim92.github.io/Fardah-Roshan-website'

// NEW (replace with YOUR domain):
const siteUrl = 'https://www.fardahroshan.org'
```

### 5.2 Update StructuredData.jsx

In `src/components/StructuredData.jsx`, line 5:
```javascript
// OLD:
const siteUrl = 'https://mrahim92.github.io/Fardah-Roshan-website'

// NEW (replace with YOUR domain):
const siteUrl = 'https://www.fardahroshan.org'
```

### 5.3 Update sitemap.xml

In `public/sitemap.xml`, replace ALL instances of:
```xml
https://mrahim92.github.io/Fardah-Roshan-website/
```

With your domain:
```xml
https://www.fardahroshan.org/
```

### 5.4 Rebuild and Re-upload

After making these changes:
```powershell
npm run build:production
```

Then re-upload the `dist` folder contents to Namecheap.

---

## Step 6: Test Your Live Site

### 6.1 Visit Your Domain

Go to: `https://www.yourdomain.com` (or whatever your domain is)

### 6.2 Check Everything Works

✅ **Navigation**:
- Click through all pages
- Check Programs dropdown
- Test Computer Labs, Libraries, etc.

✅ **Images**:
- All images load correctly
- Carousels work
- Thumbnails display

✅ **Language Switching**:
- Switch to Farsi
- Switch to Pashto
- Switch back to English

✅ **Donate Button**:
- Click Donate in header
- Check PayPal opens correctly
- Verify amounts show

✅ **Forms**:
- Test contact form
- Check it doesn't error

### 6.3 Check Mobile

Open on your phone or use Chrome DevTools:
- Right-click → Inspect
- Click device icon (toggle device toolbar)
- Test iPhone/Android views

---

## Step 7: Set Up SSL Certificate (HTTPS)

### 7.1 Get Free SSL from Namecheap

1. In cPanel, go to **"SSL/TLS Status"**
2. Find your domain
3. Click **"Run AutoSSL"**
4. Wait 2-5 minutes for it to install

**Or manually:**
1. Go to **"SSL/TLS"**
2. Click **"Manage SSL sites"**
3. Select your domain
4. Click **"Install Certificate"** (Namecheap provides free Let's Encrypt)

### 7.2 Force HTTPS

The `.htaccess` file we created already redirects HTTP → HTTPS.

Test it:
- Visit `http://yourdomain.com` (no 's')
- Should automatically redirect to `https://yourdomain.com`

---

## Step 8: Update Environment Variables (If Needed)

If you have any environment variables (like PayPal keys), they need to be baked into the build.

### For Production Build:

Create `.env.production`:
```
VITE_PAYPAL_CLIENT_ID=your_live_paypal_client_id
VITE_GA4_MEASUREMENT_ID=your_ga4_id
```

Then rebuild:
```powershell
npm run build:production
```

**Important**: Never commit `.env.production` to git! It's already in `.gitignore`.

---

## Step 9: Update Google Search Console

Once your site is live:

1. Go to: https://search.google.com/search-console
2. Add your new domain: `www.fardahroshan.org`
3. Verify ownership (HTML file method or DNS)
4. Submit your sitemap: `https://www.fardahroshan.org/sitemap.xml`

---

## Maintenance & Updates

### To Update Your Site:

1. **Make changes locally**
2. **Test**: `npm run dev`
3. **Build**: `npm run build:production`
4. **Upload**: Use FTP (FileZilla) to upload changed files from `dist/` to `public_html/`

### Quick Update Workflow (FTP):

```powershell
# 1. Make your changes
# 2. Build
npm run build:production

# 3. Open FileZilla, connect to your server
# 4. Upload only the changed files from dist/ to public_html/
```

---

## Troubleshooting

### Issue: "404 Not Found" on any page except home

**Solution**: Check your `.htaccess` file exists and has the React Router rules.

### Issue: Images not loading

**Solution**: 
1. Make sure ALL files from `dist` folder are in `public_html` root (not in a subdirectory)
2. Check file paths in browser DevTools → Network tab

### Issue: CSS/JS not loading

**Solution**: Clear browser cache (Ctrl+Shift+R) or open in Incognito mode.

### Issue: "Mixed Content" errors (HTTP resources on HTTPS site)

**Solution**: Make sure all links/images use `https://` or relative paths.

### Issue: Site is slow

**Solution**:
1. Enable compression in `.htaccess` (already included above)
2. Check image sizes (optimize large images)
3. Enable cPanel caching features

---

## Security Checklist

After deployment:

- ✅ SSL certificate installed (HTTPS working)
- ✅ HTTP redirects to HTTPS
- ✅ No sensitive files in `public_html` (like `.env` files)
- ✅ Remove any test/debug files
- ✅ Check file permissions (644 for files, 755 for folders)
- ✅ Update cPanel password to something strong
- ✅ Enable 2FA on Namecheap account

---

## Need Help?

### Namecheap Support:
- **24/7 Live Chat**: https://www.namecheap.com/support/live-chat/
- **Knowledge Base**: https://www.namecheap.com/support/knowledgebase/

### Common Commands:

```powershell
# Build for production
npm run build:production

# Build for GitHub Pages (staging)
npm run build

# Test locally
npm run dev

# Preview production build
npm run preview
```

---

**Your Workflow:**
1. Develop locally: `npm run dev`
2. Push to GitHub: Auto-deploys to GitHub Pages (staging)
3. Build for production: `npm run build:production`
4. Upload to Namecheap: Production site
5. Test both staging and production
6. Update as needed

---

**Questions?** Let me know which step you're on and I'll help debug!

