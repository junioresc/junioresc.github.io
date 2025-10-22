# React Router Setup

## 🎯 React Router v6 with Framework Router Configuration

Your portfolio now uses **React Router v6** with the modern **`createBrowserRouter`** API for client-side routing!

---

## ✨ What Was Added

### 1. **React Router DOM**

- Added `react-router-dom` ^6.22.3
- Using the modern Framework router configuration
- Data router APIs for future enhancement

### 2. **File Structure**

```
src/
├── layouts/
│   └── RootLayout.jsx       # Shared layout (Header + Footer)
├── pages/
│   ├── HomePage.jsx          # / route (About)
│   ├── WorkPage.jsx          # /work route
│   └── ContactPage.jsx       # /contact route
├── router.jsx                # Router configuration
└── App.jsx                   # RouterProvider wrapper
```

---

## 🛣️ Routes

| Route      | Component   | Description          |
| ---------- | ----------- | -------------------- |
| `/`        | HomePage    | Hero + About section |
| `/work`    | WorkPage    | Hero + Projects grid |
| `/contact` | ContactPage | Hero + Contact form  |

---

## 📝 Implementation Details

### Router Configuration (`src/router.jsx`)

```javascript
import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import HomePage from './pages/HomePage'
import WorkPage from './pages/WorkPage'
import ContactPage from './pages/ContactPage'

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: 'work',
				element: <WorkPage />,
			},
			{
				path: 'contact',
				element: <ContactPage />,
			},
		],
	},
])

export default router
```

### Root Layout (`src/layouts/RootLayout.jsx`)

```javascript
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function RootLayout() {
	return (
		<Box>
			<Header />
			<main>
				<Outlet /> {/* Page content renders here */}
			</main>
			<Footer />
		</Box>
	)
}
```

### App Component (`src/App.jsx`)

```javascript
import { RouterProvider } from 'react-router-dom'
import router from './router'

function App() {
	return <RouterProvider router={router} />
}
```

---

## 🔗 Navigation

### Header Navigation

The Header component uses `NavLink` for automatic active state:

```javascript
<NavButton
	component={NavLink}
	to='/work'
	style={({ isActive }) => ({
		fontWeight: isActive ? 700 : 500,
		color: isActive ? '#A199E8' : 'inherit',
	})}
>
	Work
</NavButton>
```

**Features:**

- Automatic active state styling
- Accessible navigation
- Smooth client-side routing

---

## 🎨 Benefits of Framework Router

### 1. **Modern API**

- `createBrowserRouter` instead of deprecated `<BrowserRouter>`
- Built-in data loading (for future)
- Better error handling

### 2. **Performance**

- Code splitting ready
- Prefetching support
- Optimized bundle loading

### 3. **Developer Experience**

- Type-safe routing (ready for TypeScript)
- Centralized route configuration
- Nested routes with `<Outlet />`

### 4. **Future-Ready**

- Data loaders (fetch data before render)
- Actions (handle form submissions)
- Error boundaries per route
- Deferred data loading

---

## 🚀 Adding New Routes

### Step 1: Create Page Component

```javascript
// src/pages/BlogPage.jsx
import React from 'react'

function BlogPage() {
	return <div>Blog Content</div>
}

export default BlogPage
```

### Step 2: Add to Router

```javascript
// src/router.jsx
import BlogPage from './pages/BlogPage'

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			// ... existing routes
			{
				path: 'blog',
				element: <BlogPage />,
			},
		],
	},
])
```

### Step 3: Add Navigation Link

```javascript
// src/components/Header/index.jsx
<NavButton component={NavLink} to='/blog'>
	Blog
</NavButton>
```

---

## 🔄 Navigation Methods

### Using Links

```javascript
import { Link, NavLink } from 'react-router-dom'

// Regular link
<Link to='/work'>View Work</Link>

// Navigation link with active state
<NavLink to='/work' style={({ isActive }) => ({ ... })}>
	Work
</NavLink>
```

### Programmatic Navigation

```javascript
import { useNavigate } from 'react-router-dom'

function MyComponent() {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate('/work')
	}

	return <button onClick={handleClick}>Go to Work</button>
}
```

---

## 📖 Advanced Features (Future Enhancement)

### Data Loaders

```javascript
{
	path: 'projects/:id',
	element: <ProjectDetail />,
	loader: async ({ params }) => {
		const project = await fetch(`/api/projects/${params.id}`)
		return project.json()
	},
}
```

### Actions (Form Handling)

```javascript
{
	path: 'contact',
	element: <ContactPage />,
	action: async ({ request }) => {
		const data = await request.formData()
		await submitForm(data)
		return redirect('/')
	},
}
```

### Error Boundaries

```javascript
{
	path: '/',
	element: <RootLayout />,
	errorElement: <ErrorPage />,
	children: [...]
}
```

---

## 🐛 Common Issues

### Issue: 404 on Page Refresh

**Problem**: Refreshing `/work` shows 404

**Solution**: Configure Vite for SPA routing

```javascript
// vite.config.js
export default defineConfig({
	// ... other config
	build: {
		rollupOptions: {
			output: {
				manualChunks: undefined,
			},
		},
	},
	// For dev server
	server: {
		historyApiFallback: true,
	},
})
```

### Issue: GitHub Pages 404

**Solution**: Add `basename` to router for GitHub Pages:

```javascript
const router = createBrowserRouter([...], {
	basename: import.meta.env.BASE_URL,
})
```

---

## 📚 Resources

- [React Router Docs](https://reactrouter.com/)
- [createBrowserRouter API](https://reactrouter.com/en/main/routers/create-browser-router)
- [Data APIs](https://reactrouter.com/en/main/guides/data-libs)
- [Upgrading Guide](https://reactrouter.com/en/main/upgrading/v6)

---

## ✅ Testing

### Before npm install:

You need to run:

```bash
npm install
```

This will install `react-router-dom` and all dependencies.

### After install:

```bash
# Start dev server
npm run dev

# Test routes:
# - http://localhost:3000/        (Home/About)
# - http://localhost:3000/work    (Projects)
# - http://localhost:3000/contact (Contact Form)
```

### Navigation Tests:

- ✅ Click navigation links
- ✅ Check active state highlighting
- ✅ Test browser back/forward buttons
- ✅ Refresh page on different routes
- ✅ Check mobile navigation

---

## 🎉 Summary

Your portfolio now has:

- ✅ Modern React Router v6 implementation
- ✅ Framework router configuration
- ✅ Clean route structure
- ✅ Active navigation states
- ✅ Shared layout with Header/Footer
- ✅ Separate page components
- ✅ Ready for future data loading features

**Next: Run `npm install` then `npm run dev` to test!**
