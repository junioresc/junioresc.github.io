import { styled } from '@mui/material/styles'
import { Box, Typography, Card, CardContent, Chip } from '@mui/material'

export const SectionTitle = styled(Typography)({
	marginBottom: '0.5rem',
	fontWeight: 800,
})

export const AboutDescription = styled(Typography)(({ theme }) => ({
	marginBottom: '4rem',
	maxWidth: 900,
	margin: '0 auto 4rem',
	fontSize: '1.125rem',
	lineHeight: 1.8,
	color: theme.palette.text.secondary,
}))

export const SkillCard = styled(Card, {
	shouldForwardProp: (prop) => prop !== 'variant',
})(({ theme, variant }) => ({
	height: '100%',
	background: theme.palette.background.paper,
	border: '1px solid rgba(255,255,255,0.08)',
}))

export const SkillCardContent = styled(CardContent)({
	padding: '2rem',
})

export const SkillHeader = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	marginBottom: '1.5rem',
})

export const SkillTitle = styled(Typography)({
	fontWeight: 700,
})

export const SkillChipsContainer = styled(Box)({
	display: 'flex',
	flexWrap: 'wrap',
	gap: '0.75rem',
})

export const SkillChip = styled(Chip, {
	shouldForwardProp: (prop) => prop !== 'variant',
})(({ variant }) => ({
	fontSize: '0.95rem',
	paddingTop: '0.625rem',
	paddingBottom: '0.625rem',
	paddingLeft: '0.5rem',
	paddingRight: '0.5rem',
	backgroundColor: 'transparent',
	border: '1px solid rgba(255,255,255,0.16)',
	color: 'inherit',
	'&:hover': {
		backgroundColor: 'transparent',
		borderColor: 'rgba(255,255,255,0.28)',
		transition: 'border-color 0.2s ease',
	},
}))
