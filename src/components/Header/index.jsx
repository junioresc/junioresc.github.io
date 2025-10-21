import React from 'react'
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

function Header({
	contactSelected,
	setContactSelected,
	workSelected,
	setWorkSelected,
}) {
	const handleNavClick = (section) => {
		switch (section) {
			case 'about':
				setContactSelected(false)
				setWorkSelected(false)
				break
			case 'work':
				setWorkSelected(true)
				setContactSelected(false)
				break
			case 'contact':
				setContactSelected(true)
				setWorkSelected(false)
				break
			default:
				break
		}
	}

	return (
		<HideOnScroll>
			<StyledAppBar>
				<Container maxWidth='xl'>
					<StyledToolbar>
						<LogoTypography variant='h5' component='a' href='/'>
							Junior Escobar
						</LogoTypography>

						<NavContainer>
							<NavButton
								color='inherit'
								onClick={() => handleNavClick('about')}
								isActive={!contactSelected && !workSelected}
							>
								About Me
							</NavButton>
							<NavButton
								color='inherit'
								onClick={() => handleNavClick('work')}
								isActive={workSelected}
							>
								Work
							</NavButton>
							<NavButton
								color='inherit'
								onClick={() => handleNavClick('contact')}
								isActive={contactSelected}
							>
								Contact Me
							</NavButton>
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
