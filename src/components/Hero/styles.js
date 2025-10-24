import { styled } from '@mui/material/styles'
import { Box, Typography, Avatar } from '@mui/material'
import heroBackground from '../../assets/images/hero-bg.jpeg'

export const HeroContainer = styled(Box)(({ theme }) => ({
	position: 'relative',
	minHeight: '60vh',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	paddingTop: '2rem',
	paddingBottom: '2rem',
}))

export const ContentBox = styled(Box)({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	gap: '3rem',
	'@media (max-width: 960px)': {
		flexDirection: 'column',
	},
})

export const ProfileAvatar = styled(Avatar)(({ theme }) => ({
	width: 160,
	height: 160,
	border: '1px solid rgba(255,255,255,0.12)',
	boxShadow: 'none',
	transition: 'transform 0.2s ease',
	'&:hover': {
		transform: 'scale(1.02)',
	},
	'@media (max-width: 960px)': {
		width: 140,
		height: 140,
	},
	'@media (max-width: 600px)': {
		width: 120,
		height: 120,
	},
}))

export const TextBox = styled(Box)({
	flex: 1,
	textAlign: 'left',
	'@media (max-width: 960px)': {
		textAlign: 'center',
	},
})

export const Subtitle = styled(Typography)(({ theme }) => ({
	color: theme.palette.primary.light,
	fontWeight: 600,
	marginBottom: '0.5rem',
	letterSpacing: '0.1em',
	textTransform: 'uppercase',
}))

export const Title = styled(Typography)(({ theme }) => ({
	fontWeight: 800,
	marginBottom: '0.75rem',
	color: theme.palette.text.primary,
}))

export const Description = styled(Typography)(({ theme }) => ({
	color: theme.palette.text.secondary,
	maxWidth: 600,
	fontSize: '1.125rem',
	lineHeight: 1.8,
	margin: '0 auto 0 0',
	'@media (max-width: 960px)': {
		margin: '0 auto',
	},
}))
