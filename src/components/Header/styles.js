import { styled } from '@mui/material/styles'
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
	position: 'sticky',
	elevation: 0,
	backdropFilter: 'blur(12px)',
	backgroundColor: 'rgba(11, 11, 12, 0.7)',
	borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
}))

export const StyledToolbar = styled(Toolbar)({
	justifyContent: 'space-between',
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
})

export const LogoTypography = styled(Typography)(({ theme }) => ({
	fontWeight: 700,
	color: theme.palette.text.primary,
	textDecoration: 'none',
	transition: 'opacity 0.2s ease',
	'&:hover': {
		opacity: 0.8,
	},
}))

export const NavContainer = styled(Box)({
	display: 'flex',
	gap: '0.25rem',
})

export const NavButton = styled(Button, {
	shouldForwardProp: (prop) => prop !== 'isActive',
})(({ theme, isActive }) => ({
	borderRadius: 8,
	paddingLeft: '0.75rem',
	paddingRight: '0.75rem',
	fontWeight: isActive ? 700 : 500,
	color: isActive ? theme.palette.primary.light : theme.palette.text.secondary,
	transition: 'color 0.2s ease',
	textTransform: 'none',
	'&:hover': {
		backgroundColor: 'transparent',
		color: theme.palette.text.primary,
	},
	borderBottom: isActive
		? `2px solid ${theme.palette.primary.main}`
		: '2px solid transparent',
}))

export const ResumeButton = styled(Button)(({ theme }) => ({
	borderRadius: 8,
	paddingLeft: '1rem',
	paddingRight: '1rem',
	marginLeft: '0.25rem',
}))
