# Deployment Guide - Fardah Roshan Academy Website

## Quick Start

Your new website is ready to deploy! Follow these simple steps.

## Step 1: Build the Project ✅ (Already Done!)

The production build has been created in the `dist/` folder.

## Step 2: Upload to cPanel

### What to Upload

From the `dist/` folder, upload:
1. ✅ `index.html` file
2. ✅ `assets/` folder (contains all CSS and JavaScript)

**Important:** The `public/` folder with your media files is already on the server! Do NOT replace it.

### Upload Process

1. **Log into cPanel**
   - Go to: https://premium87.web-hosting.com:2083
   - Use your cPanel credentials

2. **Open File Manager**
   - Click "File Manager" in the Files section
   - Navigate to your website directory (e.g., `public_html/fardah-roshan-server/public/`)

3. **Backup Old Files** (Recommended)
   - Select the old `index.html` and `assets/` folder
   - Click "Compress" → Download the ZIP
   - This is your backup in case you need to restore

4. **Delete Old Files**
   - Delete the old `index.html`
   - Delete the old `assets/` folder
   - **DO NOT delete the public folder!**

5. **Upload New Files**
   - Click "Upload" button
   - Upload `dist/index.html` from your computer
   - Upload the entire `dist/assets/` folder

6. **Verify**
   - Visit https://fardah-roshan.website
   - Test all pages
   - Test language switcher (English, Farsi, Pashto)

## Step 3: Test Everything

### Test Checklist

- [ ] Home page loads with slideshow
- [ ] All menu items work (Home, About, Programs, Blog, Gallery, Team, Contact)
- [ ] Language switcher works (EN, FA, PS)
- [ ] Images display correctly
- [ ] Videos play properly
- [ ] Contact form works
- [ ] Mobile responsive (test on phone)

## Troubleshooting

### Issue: Images don't show
**Solution:** Make sure the `public/` folder is in the same directory as `index.html` on the server.

### Issue: Page shows blank
**Solution:** 
- Check browser console for errors (F12)
- Ensure `assets/` folder uploaded completely
- Verify file permissions (644 for files, 755 for folders)

### Issue: Routes don't work (404 error)
**Solution:** Add this `.htaccess` file to your website directory:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## File Structure on Server

After deployment, your server should look like this:

```
your-website-directory/
├── index.html           ← NEW (from dist/)
├── assets/              ← NEW (from dist/)
│   ├── index-CrPH43mY.css
│   └── index-DbUghm48.js
├── public/              ← EXISTING (don't touch!)
│   ├── About Us/
│   ├── Blogs/
│   ├── Photo Gallery/
│   ├── Team Members/
│   └── Video Gallery/
└── .htaccess           ← Add if routing issues
```

## Future Updates

### To Make Changes:

1. **Edit source files** in `src/` folder on your computer
2. **Test locally**: Run `npm run dev`
3. **Build**: Run `npm run build`
4. **Upload**: Upload new files from `dist/` to cPanel
5. **Test**: Verify changes on live site

### Common Updates:

#### Update Translations
- Edit `src/i18n.js`
- Rebuild and upload

#### Add Blog Post
- Edit `src/pages/Blog.jsx`
- Rebuild and upload

#### Add Team Member
- Add photo to `public/Team Members/`
- Edit `src/pages/Team.jsx`
- Rebuild and upload

#### Change Colors/Design
- Edit CSS files in `src/`
- Rebuild and upload

## Need Help?

1. **Read** the main README.md file
2. **Check** the code comments
3. **Contact** the developer if issues persist

## Maintenance

### Regular Tasks:

- **Backup**: Monthly backup of all website files
- **Updates**: Check for security updates every 3 months
- **Content**: Update blog and photos regularly

### Update Dependencies (Every 6 months):

```bash
npm update
npm audit fix
npm run build
```

Then upload new build to server.

---

## ✅ Deployment Checklist

- [ ] Built project successfully (`npm run build`)
- [ ] Backed up old website files
- [ ] Uploaded `index.html` to server
- [ ] Uploaded `assets/` folder to server
- [ ] Verified all pages load correctly
- [ ] Tested language switcher
- [ ] Tested on mobile device
- [ ] Tested all navigation links
- [ ] Verified images and videos load
- [ ] Tested contact form

---

**Congratulations! Your new multi-language website is live!** 🎉

Visit https://fardah-roshan.website to see it in action.


