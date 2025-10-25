import { styled } from '@mui/material/styles'
import { Card } from '@mui/material'

export const CardRoot = styled(Card)(({ theme }) => ({
	borderRadius: 12,
	border: '1px solid rgba(255,255,255,0.08)',
	backgroundColor: 'rgba(255,255,255,0.02)',
	boxShadow: 'none',
}))
