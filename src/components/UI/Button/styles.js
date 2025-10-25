import { styled } from '@mui/material/styles'
import { Button } from '@mui/material'

export const StyledButton = styled(Button, {
	shouldForwardProp: (prop) => prop !== 'kind',
})(({ theme, kind }) => ({
	borderRadius: 8,
	paddingLeft: '1rem',
	paddingRight: '1rem',
	...(kind === 'ghost' && {
		borderColor: 'rgba(255,255,255,0.16)',
	}),
}))
