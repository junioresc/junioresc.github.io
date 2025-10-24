import { styled } from '@mui/material/styles'
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Box,
	Typography,
	Chip,
	Button,
} from '@mui/material'

export const StyledDialog = styled(Dialog)(({ theme, fullScreen }) => ({
	'& .MuiPaper-root': {
		borderRadius: fullScreen ? 0 : '12px',
		background: theme.palette.background.paper,
		boxShadow: '0px 24px 48px rgba(0, 0, 0, 0.4)',
	},
}))

export const StyledDialogTitle = styled(DialogTitle)({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	paddingBottom: '0.5rem',
})

export const ModalTitle = styled(Typography)({
	fontWeight: 700,
})

export const StyledDialogContent = styled(DialogContent)({})

export const ProjectImage = styled(Box)({
	width: '100%',
	borderRadius: '8px',
	marginBottom: '1.5rem',
	boxShadow: '0px 8px 24px rgba(0,0,0,0.3)',
})

export const TechChip = styled(Chip)(({ theme }) => ({
	marginBottom: '1rem',
	backgroundColor: 'rgba(121, 115, 221, 0.2)',
	border: '1px solid rgba(121, 115, 221, 0.4)',
	color: theme.palette.text.primary,
	fontWeight: 600,
}))

export const ModalDescription = styled(Typography)(({ theme }) => ({
	lineHeight: 1.8,
	color: theme.palette.text.secondary,
}))

export const StyledDialogActions = styled(DialogActions)({
	padding: '1.5rem',
	gap: '0.5rem',
})

export const ActionButton = styled(Button)({
	borderRadius: '8px',
	paddingLeft: '1.5rem',
	paddingRight: '1.5rem',
})
