# 🚀 Quick Start with Vite

## TL;DR

Your portfolio now uses **Vite** instead of Create React App and **styled-components** for better code organization!

---

## 🎯 New Commands

```bash
# Development (NEW!)
npm run dev          # Start Vite dev server (port 3000)

# Production
npm run build        # Build with Vite (output: dist/)
npm run preview      # Preview production build locally

# Deployment
npm run deploy       # Deploy to GitHub Pages
```

**Note**: `npm start` no longer works - use `npm run dev` instead!

---

## 📁 New File Structure

Each component now has TWO files:

```
components/Header/
├── index.jsx    ← Component logic (JSX)
└── styles.js    ← Styled components (CSS)
```

### Example:

**Before** (All in one file):

```jsx
<Box sx={{ display: 'flex', gap: 1, borderRadius: 2 }}>
	<Button sx={{ px: 2, color: 'primary.light' }}>About</Button>
</Box>
```

**After** (Separated):

```javascript
// styles.js
export const NavContainer = styled(Box)({
	display: 'flex',
	gap: '0.5rem',
	borderRadius: '8px',
})

export const NavButton = styled(Button)({
	paddingLeft: '1rem',
	color: 'primary.light',
})
```

```jsx
// index.jsx
import { NavContainer, NavButton } from './styles'
;<NavContainer>
	<NavButton>About</NavButton>
</NavContainer>
```

---

## ✨ Key Benefits

### Vite:

- ⚡ **10-100x faster** than Create React App
- 🔥 **Instant** hot module replacement
- 📦 **Smaller** bundle sizes
- 🚀 **Modern** ES modules

### Styled Components:

- 🎨 **Cleaner** JSX (no more messy `sx` props)
- 📁 **Better organization** (styles in separate files)
- 🔧 **Easier maintenance** (find styles quickly)
- ♻️ **Reusable** styled components

---

## 🎨 Editing Styles

Want to change how something looks?

1. **Find the component** (e.g., `components/Header/`)
2. **Open `styles.js`**
3. **Edit the styled component**
4. **Save** - changes appear instantly!

Example - Change button color:

```javascript
// components/Header/styles.js
export const NavButton = styled(Button)({
	color: '#FF6B6B', // Change this!
})
```

---

## 🛠️ Development Workflow

```bash
# 1. Start dev server
npm run dev

# 2. Make changes to components or styles
#    ↓ Changes appear instantly in browser

# 3. Build for production
npm run build

# 4. Deploy
npm run deploy
```

---

## 📦 What Changed

### Removed:

- ❌ `react-scripts` (replaced with Vite)
- ❌ `public/index.html` (moved to root)
- ❌ All `.js` component files (replaced with `.jsx`)

### Added:

- ✅ `vite.config.js` - Vite configuration
- ✅ `index.html` - Root HTML file
- ✅ 7 x `styles.js` files - Styled components
- ✅ All `.jsx` component files

### Updated:

- 📝 `package.json` - New scripts and dependencies
- 📝 All components - Using styled-components

---

## 🐛 Common Issues

### "npm start doesn't work"

Use `npm run dev` instead!

### "Build output is in wrong folder"

Vite uses `dist` folder, not `build`. GitHub Pages deploy script updated.

### "Imports not working"

Make sure you're importing from `.jsx` files and paths are correct.

---

## 📖 More Info

- **Full Migration Guide**: [VITE_MIGRATION.md](./VITE_MIGRATION.md)
- **Deployment Guide**: [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Changelog**: [CHANGELOG.md](./CHANGELOG.md)

---

## 🎉 You're All Set!

```bash
npm run dev
```

Visit http://localhost:3000 and enjoy the blazing-fast development experience!

**Questions?** Check the full documentation in VITE_MIGRATION.md
