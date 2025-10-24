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
	marginBottom: '0.5rem',
	fontWeight: 800,
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
	transition: 'transform 0.2s ease',
	'&:hover': {
		transform: 'translateY(-2px)',
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
	backgroundColor: 'transparent',
	border: '1px solid rgba(255,255,255,0.16)',
	color: theme.palette.text.secondary,
}))

export const ProjectCardActions = styled(CardActions)({
	padding: '1rem',
	paddingTop: 0,
})

export const ActionButton = styled(Button)({
	textTransform: 'none',
})
