import { styled } from '@mui/material/styles'
import { Box, Typography, IconButton, Stack, Divider } from '@mui/material'

export const FooterBox = styled(Box)(({ theme }) => ({
	paddingTop: '2rem',
	paddingBottom: '2rem',
	background: theme.palette.background.default,
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
	color: theme.palette.text.secondary,
	border: `1px solid rgba(255,255,255,0.16)`,
	transition: 'border-color 0.2s ease, color 0.2s ease',
	'&:hover': {
		backgroundColor: 'transparent',
		borderColor: 'rgba(255,255,255,0.28)',
		color: theme.palette.text.primary,
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
