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
