import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, useScrollTrigger, Slide } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download'
import resume from '../../assets/resources/resume.pdf'
import {
	StyledAppBar,
	StyledToolbar,
	LogoTypography,
	NavContainer,
	NavButton,
	ResumeButton,
} from './styles'

function HideOnScroll({ children }) {
	const trigger = useScrollTrigger()

	return (
		<Slide appear={false} direction='down' in={!trigger}>
			{children}
		</Slide>
	)
}

function Header() {
	return (
		<HideOnScroll>
			<StyledAppBar>
				<Container maxWidth='xl'>
					<StyledToolbar>
						<LogoTypography variant='h5' component={NavLink} to='/'>
							Junior Escobar
						</LogoTypography>

						<NavContainer>
							<NavLink to='/' end>
								{({ isActive }) => (
									<NavButton
										isActive={isActive}
										aria-current={isActive ? 'page' : undefined}
									>
										About Me
									</NavButton>
								)}
							</NavLink>
							<NavLink to='/projects'>
								{({ isActive }) => (
									<NavButton
										isActive={isActive}
										aria-current={isActive ? 'page' : undefined}
									>
										Projects
									</NavButton>
								)}
							</NavLink>
							<NavLink to='/contact'>
								{({ isActive }) => (
									<NavButton
										isActive={isActive}
										aria-current={isActive ? 'page' : undefined}
									>
										Contact Me
									</NavButton>
								)}
							</NavLink>
							<ResumeButton
								variant='contained'
								href={resume}
								download
								startIcon={<DownloadIcon />}
							>
								Resume
							</ResumeButton>
						</NavContainer>
					</StyledToolbar>
				</Container>
			</StyledAppBar>
		</HideOnScroll>
	)
}

export default Header
