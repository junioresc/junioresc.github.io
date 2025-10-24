import { styled } from '@mui/material/styles'
import { Box, Typography, TextField, Button, Alert, Paper } from '@mui/material'

export const ContactSection = styled(Box)(({ theme }) => ({
	paddingTop: '4rem',
	paddingBottom: '4rem',
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

export const FormPaper = styled(Paper)(({ theme }) => ({
	padding: '2rem',
	background: theme.palette.background.paper,
	border: '1px solid rgba(255,255,255,0.08)',
	borderRadius: '12px',
	'@media (max-width: 960px)': {
		padding: '1.5rem',
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
		backgroundColor: 'transparent',
	},
})

export const SubmitButton = styled(Button)({
	paddingTop: '0.6rem',
	paddingBottom: '0.6rem',
	fontSize: '1rem',
	borderRadius: 8,
	alignSelf: 'center',
	minWidth: 200,
})
