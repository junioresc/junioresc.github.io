import React, { useState } from 'react'
import { Box } from '@mui/material'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutMe from './components/About'
import Project from './components/Project'
import ContactForm from './components/Contact'
import Footer from './components/Footer'

function App() {
	const [contactSelected, setContactSelected] = useState(false)
	const [workSelected, setWorkSelected] = useState(false)

	return (
		<Box
			sx={{
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<Header
				contactSelected={contactSelected}
				setContactSelected={setContactSelected}
				workSelected={workSelected}
				setWorkSelected={setWorkSelected}
			/>
			<Box component='main' sx={{ flex: 1 }}>
				<Hero />
				{workSelected ? (
					<Project />
				) : contactSelected ? (
					<ContactForm />
				) : (
					<AboutMe />
				)}
			</Box>
			<Footer />
		</Box>
	)
}

export default App
