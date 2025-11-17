# CLAUDE.md - AI Assistant Guide for Common Arabic Repository

## Project Overview

**Repository:** commonarabic
**Purpose:** A static website hosting commonly used Arabic phrase stickers
**Author:** Abdur-Rahman Bilal
**Live Site:** https://commonarabic.aramservices.com
**Deployment:** GitHub Pages (automated via GitHub Actions) + Netlify
**Tech Stack:** Pure HTML/CSS (no build tools, no JavaScript, no package.json)

This repository provides downloadable Arabic phrase stickers in multiple formats (PNG, PSD, WEBP, XCF) for use on messaging platforms like Telegram and WhatsApp.

---

## Repository Structure

```
commonarabic/
├── index.html                          # Main landing page
├── CNAME                               # Custom domain configuration
├── README.md                           # Project documentation
├── .gitignore                          # Git ignore rules (.DS_Store)
│
├── assets/
│   ├── css/
│   │   └── style.css                   # Global stylesheet
│   └── coverimage.png                  # Social media preview image
│
├── [phrase directories]/               # One directory per Arabic phrase
│   ├── index.html                      # Download page for this phrase
│   └── [Arabic - English]/             # Nested directory with assets
│       ├── *.png                       # PNG sticker file
│       ├── *.psd                       # Photoshop source file
│       ├── *.webp                      # WebP format
│       └── *.xcf                       # GIMP format
│
├── .github/
│   ├── workflows/
│   │   └── static.yml                  # GitHub Pages deployment
│   ├── ISSUE_TEMPLATE/
│   │   ├── sticker-request-suggest.md
│   │   ├── error-arabic-sticker.yml
│   │   └── request-a-different-sticker-file-format-not-listed-on-website.yml
│   └── FUNDING.yml                     # GitHub Sponsors configuration
│
├── .vscode/
│   └── settings.json                   # Live Server on port 5501
│
└── [Cover image files]                 # Various GitHub cover images
```

---

## Existing Sticker Phrases

Current stickers in the repository (as of last update):

1. **as salaamu alaykum wa rahmatullahi wa barakaatuhu** - "السَّلَامُ عَلَيْكُم ورحمة الله وبركاته" (May peace, mercy, and blessings of Allah be with you)
2. **wa alaykum as salaam wa rahmatullahi wa barakaatuhu** - "وعليكم السلام ورحمة الله وبركاته" (And may peace, mercy, and blessings of Allah be with you too)
3. **jayyid** - "جيد" (Good)
4. **tayyib** - "طيب" (Okay)
5. **inshaaAllah** - "إن شاء الله" (If Allah wills)
6. **jazakallahu khairan** - "جزاك الله خيرا" (May Allah reward you with good)
7. **waiyyaaka** - "وإيَّّاكَ" (And you too)

---

## File Naming Conventions

### Directory Naming Pattern
- **Top-level directory:** English transliteration with spaces (e.g., `as salaamu alaykum wa rahmatullahi wa barakaatuhu`)
- **Nested directory:** Arabic script followed by dash, space, and English (e.g., `السلام عليكم و رحمة الله و بركاته - As salaamu alaykum wa rahmatullahi wa barakaatuhu`)

### File Naming Pattern
Files inside nested directories follow: `[English] - [Arabic].[extension]` or `[Arabic] - [English].[extension]`

Examples:
- `As salaamu alaykum wa rahmatullahi wa barakaatuhu - السلام عليكم و رحمة الله و بركاته.png`
- `jazakallahu khairan - جزاك الله خيرا.psd`

### Supported File Formats
- `.png` - Primary format for stickers
- `.psd` - Adobe Photoshop source files
- `.webp` - Modern web-optimized format
- `.xcf` - GIMP source files

---

## HTML Structure and Conventions

### Main Landing Page (`index.html`)

**Key Features:**
- Uses semantic HTML5 structure
- Includes Open Graph meta tags for social sharing
- Links to global stylesheet: `/assets/css/style.css`
- No JavaScript - pure static HTML
- Uses `<ul>` and `<li>` for sticker listings
- Each sticker links to its subdirectory download page

**Structure:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta tags -->
    <title>Commonly Used Arabic Phrases | Abdur-Rahman Bilal</title>
    <link rel="stylesheet" href="./assets/css/style.css">
    <!-- Open Graph tags -->
</head>
<body>
    <header>
        <h1>Commonly Used Arabic Phrases by <a href="...">Abdur-Rahman Bilal</a></h1>
    </header>
    <main>
        <div class="whereuse">
            <!-- Usage information -->
        </div>
        <div id="downloads">
            <h3>Downloads</h3>
            <ul>
                <!-- Sticker links -->
            </ul>
        </div>
    </main>
</body>
</html>
```

### Sticker Download Pages

Each phrase directory contains an `index.html` following this pattern:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Commonly Used Arabic Phrases | Abdur-Rahman Bilal</title>
    <link rel="stylesheet" href="/assets/css/style.css">
    <meta property="og:description" content="[Arabic - English] Sticker">
    <meta property="og:image" content="./[nested-dir]/[filename].png">
</head>
<body>
    <ul>
        <a href="./[nested-dir]/[filename].png"><li>Download .png</li></a>
        <a href="./[nested-dir]/[filename].webp"><li>Download .webp</li></a>
        <a href="./[nested-dir]/[filename].psd"><li>Download .psd</li></a>
        <a href="./[nested-dir]/[filename].xcf"><li>Download .xcf</li></a>
        <hr>
        <a href="https://bit.ly/commonarabic-rdff">
            <li>Request different file format</li>
        </a>
    </ul>
</body>
</html>
```

---

## CSS Styling Conventions

**File:** `/assets/css/style.css`

### Design System

**Colors:**
- Background: `#0a4210` (dark green)
- Text: `#ffffff` (white)
- Hover accent: `#347d2d` (lighter green)
- Secondary hover: `#d5e0d5` (very light green)

**Typography:**
- Primary font: 'Noto Sans', sans-serif
- Arabic font: 'IBM Plex Sans Arabic', sans-serif
- Accent font: 'Abril Fatface', sans-serif
- Base font size: 16px

**Key Styling Rules:**
- Links are white with no underline by default
- Hover effects increase font size and change color
- Images are set to `width: 10%` and `display: block`
- Copyright notice added via `html::after` pseudo-element

### Important CSS Patterns
```css
/* Different hover effects for different sections */
header a:hover { font-size: 1.5em; }
.whereuse a:hover { font-size: 2rem; }
ul a:hover { font-size: 2rem; }
```

---

## Development Workflow

### Local Development

1. **No build process required** - This is a pure static site
2. **Local testing:** Use VS Code Live Server on port 5501 (configured in `.vscode/settings.json`)
3. **File editing:** Direct HTML/CSS editing - no transpilation needed

### Git Workflow

**Current Branch:** `claude/claude-md-mi3gaijghh7rjkpr-01NwpUs3aQJ3gvMpLCsMGfVw`
**Main Branch:** `main` (for production deployments)

**Commit Message Style:**
Based on repository history:
- Use imperative mood
- Keep messages concise
- Examples: "Update README.md", "Add new sticker", "Update copyright"

### Deployment

**Automated via GitHub Actions:**
- Workflow: `.github/workflows/static.yml`
- Triggers: Push to `main` branch or manual dispatch
- Platform: GitHub Pages
- Process: Uploads entire repository as static site

**Also deployed to Netlify:**
- Status badge in README
- URL: https://commonarabic.netlify.app (likely)

---

## Adding New Stickers - Step-by-Step Guide

When adding a new Arabic phrase sticker to the repository:

### 1. Create Directory Structure
```bash
# Create top-level directory (English transliteration with spaces)
mkdir "maa shaa Allah"

# Create nested directory (Arabic - English)
mkdir "maa shaa Allah/ما شاء الله - maa shaa Allah"
```

### 2. Add Asset Files
Place the following files in the nested directory:
- `maa shaa Allah - ما شاء الله.png` (required)
- `maa shaa Allah - ما شاء الله.psd` (required)
- `maa shaa Allah - ما شاء الله.webp` (optional)
- `maa shaa Allah - ما شاء الله.xcf` (optional)

### 3. Create Download Page
Create `[phrase-dir]/index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Commonly Used Arabic Phrases | Abdur-Rahman Bilal</title>
    <link rel="stylesheet" href="/assets/css/style.css">
    <meta property="og:title" content="Commonly Used Arabic Phrases | Abdur-Rahman Bilal">
    <meta property="og:description" content="ما شاء الله - maa shaa Allah Sticker">
    <meta property="og:image" content="./ما شاء الله - maa shaa Allah/maa shaa Allah - ما شاء الله.png">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://commonarabic.aramservices.com/maa%20shaa%20Allah/">
</head>
<body>
    <ul>
        <a href="./ما شاء الله - maa shaa Allah/maa shaa Allah - ما شاء الله.png">
            <li>Download .png</li>
        </a>
        <br><br>
        <a href="./ما شاء الله - maa shaa Allah/maa shaa Allah - ما شاء الله.webp">
            <li>Download .webp</li>
        </a>
        <br><br>
        <a href="./ما شاء الله - maa shaa Allah/maa shaa Allah - ما شاء الله.psd">
            <li>Download .psd</li>
        </a>
        <br><br>
        <a href="./ما شاء الله - maa shaa Allah/maa shaa Allah - ما شاء الله.xcf">
            <li>Download .xcf</li>
        </a>
        <br><br>
        <hr>
        <a href="https://bit.ly/commonarabic-rdff">
            <li>If you want a different file format not listed here, click this link to open an <br> issue on GitHub, and I will supply you
                <br> with the file format as soon as possible, inshaaAllah.
            </li>
        </a>
    </ul>
</body>
</html>
```

### 4. Update Main Index Page
Add entry to `/index.html` in the `#downloads` div:

```html
<a href="./maa shaa Allah/">
    <li><br><br>
        ما شاء الله - maa shaa Allah<br>
        <img src="./maa shaa Allah/ما شاء الله - maa shaa Allah/maa shaa Allah - ما شاء الله.png"
            alt="maa shaa Allah - What Allah has willed"
            title="maa shaa Allah in Arabic"><br>
        Downloads
    </li>
</a>
```

### 5. Verify File Paths
- Ensure all paths use proper URL encoding for spaces (%20)
- Verify image paths are relative and correct
- Test all download links work locally

---

## Important Considerations for AI Assistants

### Cultural and Religious Sensitivity
- This is an Islamic/Arabic cultural project
- Phrases have religious significance - handle with respect
- Verify transliterations and meanings with user if uncertain
- Arabic text should always be included alongside English

### Technical Constraints
- **No build tools** - Don't suggest npm, webpack, or bundlers
- **No JavaScript** - Site is intentionally pure HTML/CSS
- **No frameworks** - Don't recommend React, Vue, etc.
- **Static only** - No server-side processing needed

### File Handling Best Practices
- Always create the nested directory structure
- Maintain bilingual naming (Arabic - English or English - Arabic)
- Preserve file format diversity (PNG, PSD, WEBP, XCF)
- Use URL-safe characters in paths

### Common Tasks

**When asked to add a new sticker:**
1. Confirm the Arabic phrase, transliteration, and meaning
2. Follow the 5-step process outlined above
3. Update both the main index and create the download page
4. Verify file naming matches existing conventions

**When asked to modify styling:**
1. All changes go in `/assets/css/style.css`
2. Maintain the existing color scheme unless explicitly requested
3. Preserve accessibility (contrast ratios, font sizes)
4. Test hover effects don't break layout

**When asked to fix links:**
1. Check both relative and absolute paths
2. Account for spaces in directory names (use proper escaping)
3. Verify paths work on GitHub Pages (case-sensitive)
4. Test Open Graph meta tags for social sharing

### Git Operations
- Develop on branch: `claude/claude-md-mi3gaijghh7rjkpr-01NwpUs3aQJ3gvMpLCsMGfVw`
- Push with: `git push -u origin [branch-name]`
- Use retry logic with exponential backoff for network failures
- Never push directly to `main` without explicit permission

### Testing Checklist
- [ ] All download links work
- [ ] Images display correctly
- [ ] HTML validates (no syntax errors)
- [ ] CSS doesn't break existing styles
- [ ] Open Graph tags include correct image paths
- [ ] Arabic text displays properly (RTL support)
- [ ] File naming follows conventions
- [ ] Local testing with Live Server (port 5501)

---

## External Links and Resources

**Official Sticker Platforms:**
- Telegram: https://bit.ly/commonarabictelegram
- Sticker Maker Studio: https://bit.ly/commonarabicstkmakerstudio
- Sticker Maker: Code NV4XK1

**Author Links:**
- Personal site: https://aramb.aramservices.com
- GitHub: @aramb-dev
- Ko-fi: arambdev

**Issue Templates:**
- Request different file format: https://bit.ly/commonarabic-rdff
- Suggest new sticker: Use GitHub issue template
- Report errors: Use GitHub issue template

---

## Version History

This CLAUDE.md was created on 2025-11-17 based on repository analysis.

**Last Updated:** 2025-11-17
**Repository State:** 7 active stickers, GitHub Pages deployment active
**Copyright:** © 2022-2025 Abdur-Rahman Bilal

---

## Quick Reference Commands

```bash
# Local development
# Use VS Code Live Server or any static server on port 5501

# Git operations
git status
git add .
git commit -m "Add new sticker: [phrase name]"
git push -u origin claude/claude-md-mi3gaijghh7rjkpr-01NwpUs3aQJ3gvMpLCsMGfVw

# File structure check
ls -la
find . -name "*.png" -o -name "*.psd"
```

---

*For questions about this repository, please refer to the README.md or open an issue using the appropriate template.*
