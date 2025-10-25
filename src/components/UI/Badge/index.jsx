import React from 'react'
import PropTypes from 'prop-types'
import { Chip } from '@mui/material'

function Badge({ children, ...props }) {
	return (
		<Chip
			variant='outlined'
			sx={{ borderColor: 'rgba(255,255,255,0.16)', color: 'text.secondary' }}
			label={children}
			{...props}
		/>
	)
}

Badge.propTypes = {
	children: PropTypes.node,
}

export default Badge
