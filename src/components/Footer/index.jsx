import React from 'react'
import { Container } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import {
	FooterBox,
	SocialStack,
	SocialLinkBox,
	SocialIconButton,
	SocialLabel,
	StyledDivider,
	Copyright,
	Credits,
} from './styles'

function Footer() {
	const currentYear = new Date().getFullYear()

	const socialLinks = [
		{
			name: 'Phone',
			icon: <PhoneIcon />,
			href: 'tel:+5615778575',
			label: 'Phone Number',
		},
		{
			name: 'Email',
			icon: <EmailIcon />,
			href: 'mailto:junioresc1092@gmail.com',
			label: 'Email',
		},
		{
			name: 'GitHub',
			icon: <GitHubIcon />,
			href: 'https://github.com/junioresc',
			label: 'GitHub',
		},
		{
			name: 'LinkedIn',
			icon: <LinkedInIcon />,
			href: 'https://www.linkedin.com/in/junior-escobar-87a8541a7/',
			label: 'LinkedIn',
		},
	]

	return (
		<FooterBox component='footer'>
			<Container maxWidth='lg'>
				<SocialStack
					direction={{ xs: 'column', sm: 'row' }}
					spacing={3}
					justifyContent='center'
					alignItems='center'
				>
					{socialLinks.map((link) => (
						<SocialLinkBox key={link.name}>
							<SocialIconButton
								component='a'
								href={link.href}
								target={
									link.name === 'GitHub' || link.name === 'LinkedIn'
										? '_blank'
										: undefined
								}
								rel={
									link.name === 'GitHub' || link.name === 'LinkedIn'
										? 'noopener noreferrer'
										: undefined
								}
							>
								{link.icon}
							</SocialIconButton>
							<SocialLabel variant='body2'>{link.label}</SocialLabel>
						</SocialLinkBox>
					))}
				</SocialStack>

				<StyledDivider />

				<Copyright variant='body2' align='center'>
					© {currentYear} Junior Escobar. All rights reserved.
				</Copyright>

				<Credits variant='body2' align='center'>
					Built with React & Material UI
				</Credits>
			</Container>
		</FooterBox>
	)
}

export default Footer
