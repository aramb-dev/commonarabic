# CLAUDE.md - AI Assistant Guide for Common Arabic Repository

## Project Overview

**Repository:** commonarabic
**Purpose:** A static website hosting commonly used Arabic phrase stickers
**Author:** Abdur-Rahman Bilal
**Live Site:** https://commonarabic.aramservices.com
**Deployment:** GitHub Pages (static export) + Netlify
**Tech Stack:** Next.js 14, React, TypeScript

This repository provides downloadable Arabic phrase stickers in multiple formats (PNG, PSD, WEBP, XCF) for use on messaging platforms like Telegram and WhatsApp.

---

## Repository Structure

```
commonarabic/
├── app/                                # Next.js app directory
│   ├── layout.tsx                      # Root layout with metadata
│   ├── page.tsx                        # Home page component
│   ├── globals.css                     # Global styles
│   └── sticker/
│       └── [id]/
│           └── page.tsx                # Dynamic sticker detail page
│
├── lib/
│   └── stickers.ts                     # Sticker data configuration
│
├── public/                             # Static assets
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css               # Original stylesheet (legacy)
│   │   └── coverimage.png              # Social media preview image
│   └── stickers/                       # Sticker files
│       └── [phrase directories]/       # One directory per Arabic phrase
│           └── [Arabic - English]/     # Nested directory with assets
│               ├── *.png               # PNG sticker file
│               ├── *.psd               # Photoshop source file
│               ├── *.webp              # WebP format
│               └── *.xcf               # GIMP format
│
├── package.json                        # Dependencies and scripts
├── next.config.js                      # Next.js configuration
├── tsconfig.json                       # TypeScript configuration
├── CNAME                               # Custom domain configuration
├── README.md                           # Project documentation
├── .gitignore                          # Git ignore rules
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
└── [Legacy HTML files]                 # Original static files (for reference)
```

---

## Tech Stack

### Next.js Configuration
- **Framework:** Next.js 14 (App Router)
- **React:** 18.3.0
- **TypeScript:** 5.0+
- **Output Mode:** Static export (`output: 'export'`)
- **Image Optimization:** Disabled (unoptimized for static export)

### Key Features
- Server-side rendering with static export
- Dynamic routes for sticker pages
- TypeScript type safety
- Centralized sticker configuration
- SEO-optimized with Open Graph meta tags

---

## Existing Sticker Phrases

Current stickers in the repository:

1. **as-salaamu-alaykum-wa-rahmatullahi-wa-barakaatuhu** - "السَّلَامُ عَلَيْكُم ورحمة الله وبركاته" (May peace, mercy, and blessings of Allah be with you)
2. **wa-alaykum-as-salaam-wa-rahmatullahi-wa-barakaatuhu** - "وعليكم السلام ورحمة الله وبركاته" (And may peace, mercy, and blessings of Allah be with you too)
3. **jayyid** - "جيد" (Good)
4. **tayyib** - "طيب" (Okay)
5. **inshaaAllah** - "إن شاء الله" (If Allah wills)
6. **jazakallahu-khairan** - "جزاك الله خيرا" (May Allah reward you with good)
7. **waiyyaaka** - "وإيَّّاكَ" (And you too)

---

## File Naming Conventions

### Directory Naming Pattern
- **Sticker ID:** URL-safe kebab-case (e.g., `as-salaamu-alaykum-wa-rahmatullahi-wa-barakaatuhu`)
- **Public directory:** English transliteration with spaces (e.g., `as salaamu alaykum wa rahmatullahi wa barakaatuhu`)
- **Nested directory:** Arabic script followed by dash, space, and English

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

## Development Workflow

### Local Development

**Setup:**
```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Development server runs on `http://localhost:3000`

**Available Scripts:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Build and export static site

### Project Structure

**Pages:**
- `/` - Home page (list of all stickers)
- `/sticker/[id]/` - Individual sticker download page

**Components:**
- `app/layout.tsx` - Root layout with global metadata
- `app/page.tsx` - Home page with sticker gallery
- `app/sticker/[id]/page.tsx` - Dynamic sticker detail page

**Data:**
- `lib/stickers.ts` - Central sticker configuration
  - Contains all sticker metadata
  - Type-safe interface
  - Helper functions for data access

### Styling

**Approach:** CSS Modules / Global CSS
- Global styles in `app/globals.css`
- Maintains original design system
- Font imports from Google Fonts

**Design System:**
- Background: `#0a4210` (dark green)
- Text: `#ffffff` (white)
- Hover accent: `#347d2d` (lighter green)
- Secondary hover: `#d5e0d5` (very light green)
- Fonts: Noto Sans, IBM Plex Sans Arabic, Abril Fatface

### Git Workflow

**Branch Strategy:**
- `main` - Production branch (deployed to GitHub Pages)
- Feature branches - `claude/[session-id]` for AI assistant work

**Commit Message Style:**
- Use imperative mood
- Keep messages concise
- Examples: "Convert to Next.js", "Add new sticker", "Update configuration"

### Deployment

**Static Export:**
1. `npm run build` - Creates optimized production build
2. Next.js exports to `/out` directory
3. Deploy `/out` to GitHub Pages or Netlify

**GitHub Actions:**
- Workflow: `.github/workflows/static.yml`
- May need updating for Next.js build process
- Should run `npm install && npm run build` before deployment

---

## Adding New Stickers - Step-by-Step Guide

### 1. Add Sticker Files to Public Directory

```bash
# Create directory structure in public/stickers/
mkdir -p "public/stickers/maa shaa Allah/ما شاء الله - maa shaa Allah"

# Add files to nested directory
# - maa shaa Allah - ما شاء الله.png (required)
# - maa shaa Allah - ما شاء الله.psd (required)
# - maa shaa Allah - ما شاء الله.webp (optional)
# - maa shaa Allah - ما شاء الله.xcf (optional)
```

### 2. Update Sticker Configuration

Edit `lib/stickers.ts` and add new entry:

```typescript
{
  id: 'maa-shaa-Allah',
  arabic: 'ما شاء الله',
  english: 'maa shaa Allah',
  dirName: 'maa shaa Allah',
  nestedDirName: 'ما شاء الله - maa shaa Allah',
  baseFileName: 'maa shaa Allah - ما شاء الله',
  formats: ['png', 'webp', 'psd', 'xcf'],
  alt: 'maa shaa Allah - What Allah has willed',
  title: 'maa shaa Allah in Arabic'
}
```

### 3. Build and Test

```bash
# Test in development
npm run dev

# Build for production
npm run build
```

### 4. Verify
- Check home page displays new sticker
- Visit `/sticker/maa-shaa-Allah/` to test download page
- Verify all file formats are accessible
- Check Open Graph metadata

---

## Important Considerations for AI Assistants

### Cultural and Religious Sensitivity
- This is an Islamic/Arabic cultural project
- Phrases have religious significance - handle with respect
- Verify transliterations and meanings with user if uncertain
- Arabic text should always be included alongside English

### Technical Guidelines

**Do:**
- Use TypeScript for type safety
- Add new stickers to `lib/stickers.ts` configuration
- Follow Next.js App Router conventions
- Maintain static export compatibility
- Test builds before committing

**Don't:**
- Use client-side only features (no `window`, `localStorage` in server components)
- Add dynamic server features (API routes won't work with static export)
- Use `next/image` Image component (causes issues with static export)
- Break the existing directory structure in `public/stickers/`

### Common Tasks

**When asked to add a new sticker:**
1. Confirm Arabic phrase, transliteration, and meaning
2. Add files to `public/stickers/[phrase]/[nested-dir]/`
3. Update `lib/stickers.ts` with new entry
4. Test locally with `npm run dev`
5. Build and verify with `npm run build`

**When asked to modify styling:**
1. Edit `app/globals.css` for global styles
2. Maintain existing color scheme unless explicitly requested
3. Preserve accessibility (contrast ratios, font sizes)
4. Test on both development and production builds

**When asked to add features:**
1. Ensure compatibility with static export
2. Use server components by default
3. Add client components only when necessary (`'use client'`)
4. Test that feature works after `npm run build`

### Testing Checklist
- [ ] `npm run dev` works without errors
- [ ] `npm run build` completes successfully
- [ ] All download links work in `/out` directory
- [ ] Images display correctly
- [ ] Open Graph tags include correct image paths
- [ ] Arabic text displays properly (RTL support)
- [ ] File naming follows conventions
- [ ] TypeScript types are correct

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

## Troubleshooting

### Build Errors

**"Module not found"**
- Run `npm install` to ensure all dependencies are installed
- Check import paths use `@/` alias correctly

**"Image optimization" errors**
- Verify `next.config.js` has `images: { unoptimized: true }`
- Use standard `<img>` tags instead of Next.js `<Image>`

**Static export fails**
- Ensure no dynamic server features (API routes, server actions)
- Check all data is available at build time
- Verify `output: 'export'` in `next.config.js`

### Development Issues

**Styles not updating**
- Clear `.next` directory: `rm -rf .next`
- Restart dev server

**Sticker not showing**
- Check file paths match exactly (spaces, capitalization)
- Verify file exists in `public/stickers/`
- Check sticker configuration in `lib/stickers.ts`

---

## Version History

**v2.0.0** - 2025-11-17: Converted to Next.js with TypeScript
**v1.0.0** - 2025-11-17: Initial CLAUDE.md created for static HTML site

**Last Updated:** 2025-11-17
**Repository State:** 7 active stickers, Next.js static export
**Copyright:** © 2022-2025 Abdur-Rahman Bilal

---

## Quick Reference Commands

```bash
# Development
npm install              # Install dependencies
npm run dev             # Start dev server (localhost:3000)
npm run build           # Build for production
npm run start           # Start production server

# Deployment
npm run export          # Build and export to /out

# Git operations
git status
git add .
git commit -m "Description of changes"
git push -u origin [branch-name]

# File structure check
ls -la app/
ls -la public/stickers/
```

---

*For questions about this repository, please refer to the README.md or open an issue using the appropriate template.*
