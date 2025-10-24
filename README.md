# Junior Escobar - Portfolio Website

A modern, professional portfolio website showcasing my work as a Full-Stack Web Developer, built with React 18, Vite, Material UI, and React Router.

## 🎨 Features

- **Modern Design**: Beautiful, professional UI built with Material UI v5
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Fully Responsive**: Optimized for all screen sizes from mobile to desktop
- **Dark Theme**: Sleek dark theme with purple and gold accents
- **Project Showcase**: Interactive project cards with detailed modals
- **Contact Form**: Validated contact form with Material UI components
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Client-Side Routing**: React Router v6 with modern navigation

## 🚀 Technologies

### Frontend Stack

- **React 18.3.1** - Latest React with concurrent features
- **Vite 5.2** - Lightning-fast build tool and dev server
- **Material UI 5.15** - Modern component library with styled-components
- **Framer Motion 11** - Smooth animations and transitions
- **React Router 7.9** - Client-side routing with modern API
- **Emotion Styled** - CSS-in-JS with styled components pattern

### Build & Deployment

- **Vite** - 10-100x faster than Create React App
- **Rollup** - Optimized production builds
- **GitHub Pages** - Automated deployment
- **ES Modules** - Modern JavaScript standards

## 📦 Quick Start

```bash
# Install dependencies
npm install

# Start development server (Vite - much faster than CRA!)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

**Development Server**: http://localhost:3000  
**Live Site**: https://junioresc.github.io/

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── About/           # Skills and bio section
│   │   ├── index.jsx    # Component logic
│   │   └── styles.js    # Styled components
│   ├── Contact/         # Contact form
│   ├── Footer/          # Site footer
│   ├── Header/          # Navigation header
│   ├── Hero/            # Landing section
│   ├── Modal/           # Project detail modals
│   ├── Project/         # Project showcase
│   └── UI/              # Reusable UI components
│       ├── Badge/       # Skill tags
│       ├── Button/      # Custom buttons
│       ├── Card/        # Content cards
│       └── Section/     # Page sections
├── layouts/
│   └── RootLayout.jsx   # Shared layout (Header + Footer)
├── pages/               # Route components
│   ├── HomePage.jsx     # / route (Hero + About)
│   ├── ProjectsPage.jsx # /projects route
│   └── ContactPage.jsx  # /contact route
├── assets/
│   ├── images/          # Project screenshots and photos
│   └── resources/       # Resume PDF
├── utils/
│   └── helpers.js       # Utility functions
├── theme.js             # Material UI theme configuration
├── router.jsx           # React Router configuration
├── App.jsx              # Router provider wrapper
└── index.jsx            # Application entry point
```

## 🛣️ Routes

| Route       | Component    | Description             |
| ----------- | ------------ | ----------------------- |
| `/`         | HomePage     | Hero section + About me |
| `/projects` | ProjectsPage | Project showcase grid   |
| `/contact`  | ContactPage  | Contact form            |

## 🎨 Design System

### Color Palette

- **Primary**: Purple (#7973DD) - Professional yet creative
- **Secondary**: Gold (#AD8350) - Warm accent color
- **Background**: Dark (#0A0A0A, #1A1A1A) - Modern dark theme
- **Text**: White with transparency for hierarchy

### Typography

- **Font**: Inter - Clean, modern sans-serif via Google Fonts
- **Weights**: 300-900 for hierarchy and emphasis
- **Responsive sizes**: Fluid typography that scales with viewport

### Components

- **Cards**: Elevated cards with hover animations
- **Buttons**: Smooth hover effects with elevation changes
- **Forms**: Validated inputs with Material UI TextField
- **Modals**: Full-screen responsive dialogs for project details

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**:
  - xs: 0px (mobile)
  - sm: 600px (tablet)
  - md: 960px (laptop)
  - lg: 1280px (desktop)
  - xl: 1920px (large desktop)

## 🎯 Key Sections

### About Me

- Professional bio highlighting full-stack capabilities
- **Frontend Skills**: JavaScript ES6+, React, TypeScript, Material UI, Tailwind, Vite, Next.js, Redux, Zustand, and more
- **Backend Skills**: Python, Node.js, Express, Django, SQL/NoSQL, REST APIs, GraphQL, CI/CD, Docker, and more
- Skills displayed as interactive chips with icons

### Projects

- 8 featured projects with high-quality screenshots
- Technology tags for each project
- Links to live demos and source code
- Detailed descriptions in modal view
- Responsive grid layout (4 → 2 → 1 columns)

### Contact

- Validated contact form with real-time feedback
- Name, email, and message fields
- Professional Material UI design
- Form validation with error messages

## 🚀 Performance

- **Vite Build**: Lightning-fast builds with Rollup
- **Code Splitting**: Automatic code splitting for optimal loading
- **Image Optimization**: Optimized images for faster loading
- **Tree Shaking**: Unused code eliminated in production
- **ES Modules**: Native ESM for faster dev experience
- **Bundle Size**: 508.44 kB (160.95 kB gzipped)

## 🌐 Deployment

### GitHub Pages

The site is configured for automated deployment:

```bash
# Build and deploy in one command
npm run deploy
```

This will:

1. Build the production version with Vite
2. Push to the `gh-pages` branch
3. Update the live site at https://junioresc.github.io/

### Environment Setup

The `package.json` is configured with the correct homepage:

```json
"homepage": "http://junioresc.github.io/"
```

## 🔧 Development

### Why Vite?

- ⚡ **10-100x faster** than Create React App
- 🔥 **Instant** hot module replacement
- 📦 **Smaller** bundle sizes
- 🚀 **Modern** ES modules
- 🛠️ **Better** developer experience

### Styled Components Architecture

Each component has two files for better organization:

```javascript
// components/Header/styles.js
export const NavContainer = styled(Box)({
	display: 'flex',
	gap: '0.5rem',
})

export const NavButton = styled(Button)({
	borderRadius: '8px',
	paddingLeft: '1rem',
})
```

```jsx
// components/Header/index.jsx
import { NavContainer, NavButton } from './styles'
;<NavContainer>
	<NavButton>About</NavButton>
</NavContainer>
```

**Benefits:**

- 🎨 Cleaner JSX (no more cluttered `sx` props)
- 📁 Better organization (styles in separate files)
- 🔧 Easier maintenance (find styles quickly)
- ♻️ Reusable styled components

## 📊 Recent Updates

### Latest Changes

- ✅ **Updated Skills**: Added comprehensive full-stack skills including Vite, Material UI, Framer Motion, TypeScript, Next.js, Redux, Zustand, Django, Docker, and more
- ✅ **Enhanced Hero**: Updated description to emphasize full-stack capabilities
- ✅ **Improved Modal**: Fixed modal background opacity for better visibility
- ✅ **Modern Stack**: React 18 + Vite + Material UI + React Router v6

### Technology Stack Evolution

**From**: React 16 + Create React App + Custom CSS  
**To**: React 18 + Vite + Material UI + Styled Components + React Router

## 🔗 Links

- **Portfolio**: [https://junioresc.github.io/](https://junioresc.github.io/)
- **GitHub**: [https://github.com/junioresc](https://github.com/junioresc)
- **LinkedIn**: [https://www.linkedin.com/in/junior-escobar-87a8541a7/](https://www.linkedin.com/in/junior-escobar-87a8541a7/)
- **Email**: [junioresc1092@gmail.com](mailto:junioresc1092@gmail.com)

## 📄 License

© 2025 Junior Escobar. All rights reserved.

## 🙏 Acknowledgments

- Vite for the blazing-fast build tool
- Material UI for the excellent component library
- Framer Motion for smooth animations
- React Router for modern client-side routing
- University of Central Florida for the Full-Stack Web Development Certificate
- All contributors to the open-source libraries used in this project

---

**Built with ❤️ using React 18, Vite, Material UI, Framer Motion, and React Router**
