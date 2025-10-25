import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

export const SectionRoot = styled(Box)(({ theme }) => ({
	paddingTop: '4rem',
	paddingBottom: '4rem',
	background: theme.palette.background.default,
}))
