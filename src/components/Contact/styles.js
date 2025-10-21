import { styled } from '@mui/material/styles'
import { Box, Typography, TextField, Button, Alert, Paper } from '@mui/material'

export const ContactSection = styled(Box)(({ theme }) => ({
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

export const SectionSubtitle = styled(Typography)(({ theme }) => ({
	marginBottom: '3rem',
	color: theme.palette.text.secondary,
	fontSize: '1.125rem',
}))

export const FormPaper = styled(Paper)(({ theme }) => ({
	padding: '3rem',
	background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, rgba(121, 115, 221, 0.05) 100%)`,
	border: `1px solid ${theme.palette.primary.main}40`,
	borderRadius: '12px',
	'@media (max-width: 960px)': {
		padding: '2rem',
	},
}))

export const FormBox = styled(Box)({
	display: 'flex',
	flexDirection: 'column',
	gap: '1.5rem',
})

export const StyledAlert = styled(Alert)({
	borderRadius: '8px',
})

export const StyledTextField = styled(TextField)({
	'& .MuiOutlinedInput-root': {
		backgroundColor: 'rgba(0, 0, 0, 0.2)',
	},
})

export const SubmitButton = styled(Button)({
	paddingTop: '0.75rem',
	paddingBottom: '0.75rem',
	fontSize: '1.1rem',
	borderRadius: '8px',
	alignSelf: 'center',
	minWidth: 200,
})
