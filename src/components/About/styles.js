import { styled } from '@mui/material/styles'
import { Box, Typography, Card, CardContent, Chip } from '@mui/material'

export const AboutSection = styled(Box)(({ theme }) => ({
	paddingTop: '5rem',
	paddingBottom: '5rem',
	background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
}))

export const SectionTitle = styled(Typography)({
	marginBottom: '1rem',
	fontWeight: 800,
	background: 'linear-gradient(135deg, #7973DD 0%, #AD8350 100%)',
	WebkitBackgroundClip: 'text',
	WebkitTextFillColor: 'transparent',
	backgroundClip: 'text',
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
	background:
		variant === 'frontend'
			? `linear-gradient(135deg, ${theme.palette.background.paper} 0%, rgba(121, 115, 221, 0.05) 100%)`
			: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, rgba(173, 131, 80, 0.05) 100%)`,
	border:
		variant === 'frontend'
			? `1px solid ${theme.palette.primary.main}40`
			: `1px solid ${theme.palette.secondary.main}40`,
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
	backgroundColor:
		variant === 'frontend'
			? 'rgba(121, 115, 221, 0.1)'
			: 'rgba(173, 131, 80, 0.1)',
	border:
		variant === 'frontend'
			? '1px solid rgba(121, 115, 221, 0.3)'
			: '1px solid rgba(173, 131, 80, 0.3)',
	color: 'inherit',
	'&:hover': {
		backgroundColor:
			variant === 'frontend'
				? 'rgba(121, 115, 221, 0.2)'
				: 'rgba(173, 131, 80, 0.2)',
		transform: 'translateY(-2px)',
		transition: 'all 0.3s ease',
	},
}))
