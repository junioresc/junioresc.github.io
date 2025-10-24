import { styled } from '@mui/material/styles'
import { Box, Typography, Card, Chip } from '@mui/material'

export const ExperienceSection = styled(Box)(({ theme }) => ({
	paddingTop: '6rem',
	paddingBottom: '6rem',
	backgroundColor: theme.palette.background.paper,
}))

export const SectionTitle = styled(Typography)(({ theme }) => ({
	marginBottom: '3rem',
	fontWeight: 700,
	color: theme.palette.text.primary,
	position: 'relative',
	'&::after': {
		content: '""',
		position: 'absolute',
		bottom: '-0.5rem',
		left: '50%',
		transform: 'translateX(-50%)',
		width: '60px',
		height: '3px',
		background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
		borderRadius: '2px',
	},
}))

export const ExperienceCard = styled(Card)(({ theme }) => ({
	padding: '2rem',
	display: 'flex',
	gap: '1.5rem',
	alignItems: 'flex-start',
	backgroundColor: theme.palette.background.default,
	border: `1px solid ${theme.palette.divider}`,
	borderLeft: `4px solid ${theme.palette.primary.main}`,
	boxShadow: '0 2px 12px rgba(199, 113, 82, 0.08)',
	transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
	'&:hover': {
		transform: 'translateX(8px)',
		boxShadow: '0 8px 24px rgba(199, 113, 82, 0.15)',
	},
	'@media (max-width: 600px)': {
		flexDirection: 'column',
		padding: '1.5rem',
	},
}))

export const IconWrapper = styled(Box)(({ theme }) => ({
	width: '48px',
	height: '48px',
	borderRadius: '8px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: `${theme.palette.primary.main}15`,
	color: theme.palette.primary.main,
	flexShrink: 0,
	'& svg': {
		fontSize: '24px',
	},
}))

export const CompanyName = styled(Typography)(({ theme }) => ({
	fontWeight: 700,
	color: theme.palette.text.primary,
	marginBottom: '0.25rem',
}))

export const JobTitle = styled(Typography)(({ theme }) => ({
	fontWeight: 600,
	color: theme.palette.primary.main,
	marginBottom: '0.5rem',
}))

export const DateRange = styled(Typography)(({ theme }) => ({
	color: theme.palette.text.secondary,
	fontStyle: 'italic',
	marginBottom: '1rem',
	fontSize: '0.875rem',
}))

export const Description = styled(Typography)(({ theme }) => ({
	color: theme.palette.text.primary,
	lineHeight: 1.8,
	marginBottom: '1rem',
}))

export const TechStack = styled(Box)({
	display: 'flex',
	flexWrap: 'wrap',
	gap: '0.5rem',
	marginTop: '1rem',
})

export const TechChip = styled(Chip)(({ theme }) => ({
	backgroundColor: `${theme.palette.secondary.main}15`,
	color: theme.palette.text.primary,
	border: `1px solid ${theme.palette.secondary.main}40`,
	fontSize: '0.8125rem',
	fontWeight: 500,
	'&:hover': {
		backgroundColor: `${theme.palette.secondary.main}25`,
	},
}))
