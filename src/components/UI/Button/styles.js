import { styled } from '@mui/material/styles'
import { Button } from '@mui/material'

export const StyledButton = styled(Button, {
	shouldForwardProp: (prop) => prop !== 'kind',
})(({ theme, kind }) => ({
	borderRadius: 8,
	paddingLeft: '1rem',
	paddingRight: '1rem',
	...(kind === 'ghost' && {
		color: theme.palette.text.primary,
		backgroundColor: 'transparent',
		borderColor: 'rgba(255,255,255,0.16)',
		textDecoration: 'none',
		'&:hover': {
			backgroundColor: 'rgba(255,255,255,0.06)',
			borderColor: 'rgba(255,255,255,0.28)',
		},
		'&:active': {
			backgroundColor: 'rgba(255,255,255,0.1)',
			borderColor: 'rgba(255,255,255,0.32)',
		},
		'&:focus-visible': {
			outline: '2px solid rgba(139,138,247,0.6)',
			outlineOffset: 2,
		},
	}),
}))
