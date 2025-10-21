import { styled } from '@mui/material/styles'
import { Box, Typography, Avatar } from '@mui/material'
import heroBackground from '../../assets/images/hero-bg.jpeg'

export const HeroContainer = styled(Box)(({ theme }) => ({
	position: 'relative',
	minHeight: '70vh',
	display: 'flex',
	alignItems: 'center',
	overflow: 'hidden',
	'&::before': {
		content: '""',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundImage: `url(${heroBackground})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundAttachment: 'fixed',
		opacity: 0.15,
		zIndex: 0,
	},
	'&::after': {
		content: '""',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		background: `linear-gradient(135deg, ${theme.palette.primary.main}20 0%, ${theme.palette.secondary.main}20 100%)`,
		zIndex: 1,
	},
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
	width: 300,
	height: 300,
	border: `4px solid ${theme.palette.primary.main}`,
	boxShadow: `0 0 40px ${theme.palette.primary.main}60`,
	transition: 'all 0.3s ease',
	'&:hover': {
		transform: 'scale(1.05)',
		boxShadow: `0 0 60px ${theme.palette.primary.main}80`,
	},
	'@media (max-width: 960px)': {
		width: 250,
		height: 250,
	},
	'@media (max-width: 600px)': {
		width: 200,
		height: 200,
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

export const Title = styled(Typography)({
	fontWeight: 800,
	marginBottom: '1rem',
	background: 'linear-gradient(135deg, #FFFFFF 0%, #B8B8B8 100%)',
	WebkitBackgroundClip: 'text',
	WebkitTextFillColor: 'transparent',
	backgroundClip: 'text',
})

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
