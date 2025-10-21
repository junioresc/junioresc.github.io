import { styled } from '@mui/material/styles'
import {
	Box,
	Typography,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Button,
	Chip,
} from '@mui/material'

export const ProjectSection = styled(Box)(({ theme }) => ({
	paddingTop: '5rem',
	paddingBottom: '5rem',
	background: theme.palette.background.default,
}))

export const SectionTitle = styled(Typography)({
	marginBottom: '1rem',
	fontWeight: 800,
	background: 'linear-gradient(135deg, #7973DD 0%, #AD8350 100%)',
	WebkitBackgroundClip: 'text',
	WebkitTextFillColor: 'transparent',
	backgroundClip: 'text',
})

export const SectionSubtitle = styled(Typography)(({ theme }) => ({
	marginBottom: '3rem',
	color: theme.palette.text.secondary,
	fontSize: '1.125rem',
}))

export const ProjectCard = styled(Card)({
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	cursor: 'pointer',
	transition: 'all 0.3s ease',
	'&:hover': {
		transform: 'translateY(-8px)',
	},
})

export const ProjectCardMedia = styled(CardMedia)({
	objectFit: 'cover',
})

export const ProjectCardContent = styled(CardContent)({
	flexGrow: 1,
})

export const ProjectTitle = styled(Typography)({
	fontWeight: 700,
})

export const ProjectChip = styled(Chip)(({ theme }) => ({
	backgroundColor: 'rgba(121, 115, 221, 0.1)',
	border: '1px solid rgba(121, 115, 221, 0.3)',
	color: theme.palette.text.primary,
}))

export const ProjectCardActions = styled(CardActions)({
	padding: '1rem',
	paddingTop: 0,
})

export const ActionButton = styled(Button)({
	textTransform: 'none',
})
