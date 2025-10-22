import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

function RootLayout() {
	return (
		<Box
			sx={{
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<Header />
			<Hero />
			<Box component='main' sx={{ flex: 1 }}>
				<Outlet />
			</Box>
			<Footer />
		</Box>
	)
}

export default RootLayout
