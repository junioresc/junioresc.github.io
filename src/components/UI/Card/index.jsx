import React from 'react'
import PropTypes from 'prop-types'
import { CardRoot } from './styles'

function Card({ children, ...props }) {
	return <CardRoot {...props}>{children}</CardRoot>
}

Card.propTypes = {
	children: PropTypes.node,
}

export default Card
