import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '@mui/material'
import { SectionRoot } from './styles'

function Section({ children, maxWidth = 'lg', ...props }) {
	return (
		<SectionRoot {...props}>
			<Container maxWidth={maxWidth}>{children}</Container>
		</SectionRoot>
	)
}

Section.propTypes = {
	maxWidth: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', false]),
}

export default Section
