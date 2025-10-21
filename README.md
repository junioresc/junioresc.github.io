# Junior Escobar - Portfolio Website

A modern, professional portfolio website showcasing my work as a Full-Stack Web Developer, built with React 18 and Material UI.

## 🎨 Features

- **Modern Design**: Beautiful, professional UI built with Material UI v5
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Fully Responsive**: Optimized for all screen sizes from mobile to desktop
- **Dark Theme**: Sleek dark theme with purple and gold accents
- **Project Showcase**: Interactive project cards with detailed modals
- **Contact Form**: Validated contact form with Material UI components
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🚀 Technologies

### Frontend

- **React 18.3.1** - Latest React with concurrent features
- **Material UI 5.15** - Modern component library with styled-components
- **Framer Motion 11** - Smooth animations and transitions
- **Emotion Styled** - CSS-in-JS with styled components pattern

### Build Tools

- **Vite 5.2** - Lightning-fast build tool and dev server
- **Rollup** - Optimized production builds

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server (Vite)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── About/
│   │   ├── index.jsx       # Component logic
│   │   └── styles.js       # Styled components
│   ├── Contact/
│   │   ├── index.jsx
│   │   └── styles.js
│   ├── Footer/
│   │   ├── index.jsx
│   │   └── styles.js
│   ├── Header/
│   │   ├── index.jsx
│   │   └── styles.js
│   ├── Hero/
│   │   ├── index.jsx
│   │   └── styles.js
│   ├── Modal/
│   │   ├── index.jsx
│   │   └── styles.js
│   └── Project/
│       ├── index.jsx
│       └── styles.js
├── assets/
│   ├── images/        # Project screenshots and photos
│   └── resources/     # Resume PDF
├── utils/
│   └── helpers.js     # Utility functions
├── theme.js           # Material UI theme configuration
├── App.jsx            # Main application component
└── index.jsx          # Application entry point
```

## 🎨 Design Features

### Color Palette

- **Primary**: Purple (#7973DD) - Professional yet creative
- **Secondary**: Gold (#AD8350) - Warm accent color
- **Background**: Dark (#0A0A0A, #1A1A1A) - Modern dark theme
- **Text**: White with transparency for hierarchy

### Typography

- **Font**: Inter - Clean, modern sans-serif
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

## 🌐 Deployment

### GitHub Pages

The site is configured for deployment to GitHub Pages:

```bash
# Build and deploy in one command
npm run deploy
```

This will:

1. Build the production version
2. Push to the `gh-pages` branch
3. Update the live site at https://junioresc.github.io/

### Environment Setup

Make sure your `package.json` has the correct homepage:

```json
"homepage": "http://junioresc.github.io/"
```

## 🔧 Development

### Running Locally

```bash
# Install dependencies
npm install

# Start Vite dev server at http://localhost:3000
npm run dev
```

Vite provides:

- ⚡ Lightning-fast cold starts
- 🔥 Instant hot module replacement
- 🎯 Better error messages

### Building

```bash
# Create production build
npm run build

# The build folder will contain optimized static files
```

## 📊 Performance

- **Vite Build**: Lightning-fast builds with Rollup
- **Code Splitting**: Automatic code splitting for optimal loading
- **Image Optimization**: Optimized images for faster loading
- **Tree Shaking**: Unused code eliminated in production
- **ES Modules**: Native ESM for faster dev experience
- **Bundle Size**: 508.44 kB (160.95 kB gzipped)

## 🎯 Key Sections

### About Me

- Professional bio
- Frontend proficiencies (HTML, CSS, JavaScript, React, etc.)
- Backend proficiencies (Node, Express, MongoDB, etc.)
- Skills displayed as interactive chips

### Projects

- 8 featured projects with screenshots
- Technology tags for each project
- Links to live demos and source code
- Detailed descriptions in modal view

### Contact

- Validated contact form
- Name, email, and message fields
- Real-time validation feedback
- Professional form design

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
- University of Central Florida for the Full-Stack Web Development Certificate
- All contributors to the open-source libraries used in this project

## 📖 Additional Documentation

- [VITE_MIGRATION.md](./VITE_MIGRATION.md) - Migration guide from CRA to Vite
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment instructions
- [CHANGELOG.md](./CHANGELOG.md) - Version history
