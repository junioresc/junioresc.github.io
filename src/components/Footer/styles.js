import { styled } from '@mui/material/styles'
import { Box, Typography, IconButton, Stack, Divider } from '@mui/material'

export const FooterBox = styled(Box)(({ theme }) => ({
	paddingTop: '3rem',
	paddingBottom: '3rem',
	background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
	borderTop: `1px solid ${theme.palette.divider}`,
}))

export const SocialStack = styled(Stack)({
	marginBottom: '1.5rem',
})

export const SocialLinkBox = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	gap: '0.5rem',
})

export const SocialIconButton = styled(IconButton)(({ theme }) => ({
	color: theme.palette.primary.main,
	border: `2px solid ${theme.palette.primary.main}40`,
	transition: 'all 0.3s ease',
	'&:hover': {
		backgroundColor: 'rgba(121, 115, 221, 0.1)',
		borderColor: theme.palette.primary.main,
		transform: 'translateY(-3px)',
	},
}))

export const SocialLabel = styled(Typography)(({ theme }) => ({
	color: theme.palette.text.secondary,
	display: 'block',
	'@media (min-width: 600px)': {
		display: 'none',
	},
}))

export const StyledDivider = styled(Divider)({
	marginTop: '1.5rem',
	marginBottom: '1.5rem',
})

export const Copyright = styled(Typography)(({ theme }) => ({
	color: theme.palette.text.secondary,
	fontSize: '0.9rem',
}))

export const Credits = styled(Typography)(({ theme }) => ({
	color: theme.palette.text.secondary,
	fontSize: '0.85rem',
	marginTop: '0.5rem',
	opacity: 0.7,
}))
