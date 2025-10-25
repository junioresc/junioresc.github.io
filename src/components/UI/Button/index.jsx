import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton } from './styles'

function Button({ kind = 'primary', children, ...props }) {
	const variantProps =
		kind === 'primary'
			? { variant: 'contained', color: 'primary' }
			: kind === 'ghost'
			? { variant: 'outlined', color: 'inherit' }
			: { variant: 'text', color: 'inherit' }

	return (
		<StyledButton kind={kind} {...variantProps} {...props}>
			{children}
		</StyledButton>
	)
}

Button.propTypes = {
	kind: PropTypes.oneOf(['primary', 'ghost', 'text']),
}

export default Button
