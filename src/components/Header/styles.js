import { styled } from '@mui/material/styles'
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
	position: 'sticky',
	elevation: 0,
	backdropFilter: 'blur(20px)',
	backgroundColor: 'rgba(10, 10, 10, 0.8)',
	borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
}))

export const StyledToolbar = styled(Toolbar)({
	justifyContent: 'space-between',
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
})

export const LogoTypography = styled(Typography)(({ theme }) => ({
	fontWeight: 700,
	color: 'inherit',
	textDecoration: 'none',
	background: 'linear-gradient(135deg, #7973DD 0%, #AD8350 100%)',
	WebkitBackgroundClip: 'text',
	WebkitTextFillColor: 'transparent',
	backgroundClip: 'text',
	transition: 'all 0.3s ease',
	'&:hover': {
		opacity: 0.8,
	},
}))

export const NavContainer = styled(Box)({
	display: 'flex',
	gap: '0.5rem',
})

export const NavButton = styled(Button, {
	shouldForwardProp: (prop) => prop !== 'isActive',
})(({ theme, isActive }) => ({
	borderRadius: '8px',
	paddingLeft: '1rem',
	paddingRight: '1rem',
	fontWeight: isActive ? 700 : 500,
	color: isActive ? theme.palette.primary.light : 'inherit',
	transition: 'all 0.3s ease',
	textTransform: 'none',
	'&:hover': {
		backgroundColor: 'rgba(121, 115, 221, 0.1)',
		transform: 'none',
		boxShadow: 'none',
	},
}))

export const ResumeButton = styled(Button)(({ theme }) => ({
	borderRadius: '8px',
	paddingLeft: '1.5rem',
	paddingRight: '1.5rem',
	marginLeft: '0.5rem',
}))
