# Fardah Roshan Academy Website

A modern, multi-language website for Fardah Roshan Academy - an Afghanistan-based education non-profit.

## Features

- ✅ **Multi-language Support**: English, Farsi (فارسی), and Pashto (پښتو)
- ✅ **RTL Support**: Proper right-to-left text direction for Farsi and Pashto
- ✅ **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- ✅ **Modern UI**: Clean, professional design with smooth animations
- ✅ **Full Source Code**: Easy to maintain and update

## Pages

1. **Home** - Hero slideshow, programs overview, mission & vision
2. **About Us** - Organization story, values, and founder message
3. **Programs** - Computer labs, libraries, CBE classes, online learning, student support
4. **Blog** - News and updates
5. **Photo Gallery** - Images from programs and activities
6. **Video Gallery** - Videos showcasing our work
7. **Team** - Meet our dedicated team members
8. **Contact** - Get in touch with us

## Tech Stack

- **React 19** - Modern UI framework
- **Vite** - Fast build tool
- **React Router** - Navigation
- **i18next** - Internationalization
- **Lucide React** - Beautiful icons
- **CSS3** - Styling with modern features

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or extract the project
2. Open terminal in project directory
3. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

### Building for Production

Build the optimized production version:

```bash
npm run build
```

The built files will be in the `dist/` folder.

### Preview Production Build

Test the production build locally:

```bash
npm run preview
```

## Deployment to cPanel

### Step 1: Build the Project

```bash
npm run build
```

### Step 2: Prepare Files

After building, you'll have a `dist/` folder with:
- `index.html`
- `assets/` (CSS and JavaScript files)
- `public/` (images, videos, etc.)

### Step 3: Upload to cPanel

1. **Log in to cPanel** File Manager
2. Navigate to your website directory (usually `public_html/`)
3. **Delete old files** (backup first if needed):
   - Old `index.html`
   - Old `assets/` folder
   
4. **Upload new files** from `dist/` folder:
   - Upload `index.html`
   - Upload entire `assets/` folder
   - The `public/` folder is already there (contains your images/videos)

5. **Set permissions**: Ensure files are readable (644 for files, 755 for folders)

### Step 4: Test

Visit your website: https://fardah-roshan.website

## Folder Structure

```
fardah-roshan-rebuilt/
├── public/                  # Static assets (images, videos)
│   ├── About Us/
│   ├── Blogs/
│   ├── Founder Message/
│   ├── Photo Gallery/
│   ├── Slideshow Images/
│   ├── Team Members/
│   └── Video Gallery/
├── src/
│   ├── components/          # Reusable components
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Header.css
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   ├── LanguageSwitcher.jsx
│   │   └── LanguageSwitcher.css
│   ├── pages/              # Page components
│   │   ├── Home.jsx / .css
│   │   ├── About.jsx / .css
│   │   ├── Programs.jsx / .css
│   │   ├── Blog.jsx / .css
│   │   ├── PhotoGallery.jsx / .css
│   │   ├── VideoGallery.jsx / .css
│   │   ├── Team.jsx / .css
│   │   └── Contact.jsx / .css
│   ├── App.jsx             # Main app component
│   ├── App.css             # Global app styles
│   ├── main.jsx            # App entry point
│   ├── index.css           # Global styles
│   └── i18n.js             # Internationalization config
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
├── package.json            # Dependencies
└── README.md              # This file
```

## Adding/Editing Content

### Change Text Translations

Edit `src/i18n.js` to update translations for:
- English (en)
- Farsi (fa)
- Pashto (ps)

### Add New Images

1. Add images to the appropriate folder in `public/`
2. Reference them in components like: `/Photo Gallery/image-name.webp`

### Add New Blog Posts

Edit `src/pages/Blog.jsx` and add to the `blogs` array.

### Update Team Members

Edit `src/pages/Team.jsx` and update the `teamMembers` array.

## Customization

### Colors

Main colors are defined in CSS files:
- Primary: `#0066cc` (blue)
- Secondary: `#f5f5f5` (light gray)
- Dark: `#1a1a1a` (almost black)

Search for these colors in CSS files to change the theme.

### Fonts

Fonts are defined in `src/index.css`. Update the `font-family` property to change fonts.

## Support

For questions or issues:
- Email: info@fardahroshan.org
- Check the code comments for guidance

## License

© 2025 Fardah Roshan Academy. All rights reserved.

---

Built with ❤️ for education in Afghanistan

