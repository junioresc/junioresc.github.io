import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SendIcon from '@mui/icons-material/Send'
import { validateEmail } from '../../utils/helpers'
import Section from '../UI/Section'
import {
	SectionTitle,
	SectionSubtitle,
	FormPaper,
	FormBox,
	StyledAlert,
	StyledTextField,
	SubmitButton,
} from './styles'

function ContactForm() {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		message: '',
	})
	const [errorMessage, setErrorMessage] = useState('')
	const [touched, setTouched] = useState({
		name: false,
		email: false,
		message: false,
	})

	const { name, email, message } = formState

	function handleChange(e) {
		const { name, value } = e.target
		setFormState({ ...formState, [name]: value })

		// Validate on change
		if (name === 'email') {
			const isValid = validateEmail(value)
			if (!isValid && value.length > 0) {
				setErrorMessage('Your email is invalid.')
			} else {
				setErrorMessage('')
			}
		} else {
			if (!value.length && touched[name]) {
				setErrorMessage(
					`${name.charAt(0).toUpperCase() + name.slice(1)} is required.`
				)
			} else {
				setErrorMessage('')
			}
		}
	}

	function handleBlur(e) {
		const { name, value } = e.target
		setTouched({ ...touched, [name]: true })

		if (name === 'email') {
			const isValid = validateEmail(value)
			if (!isValid && value.length > 0) {
				setErrorMessage('Your email is invalid.')
			} else if (!value.length) {
				setErrorMessage('Email is required.')
			} else {
				setErrorMessage('')
			}
		} else {
			if (!value.length) {
				setErrorMessage(
					`${name.charAt(0).toUpperCase() + name.slice(1)} is required.`
				)
			} else {
				setErrorMessage('')
			}
		}
	}

	function handleSubmit(e) {
		e.preventDefault()

		// Validate all fields
		if (!name || !email || !message) {
			setErrorMessage('All fields are required.')
			return
		}

		if (!validateEmail(email)) {
			setErrorMessage('Your email is invalid.')
			return
		}

		console.log('Form submitted:', formState)
		setErrorMessage('')
		// In a real application, you would send this data to a backend service
	}

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
			},
		},
	}

	return (
		<Section id='contact' maxWidth='md'>
			<motion.div
				variants={containerVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, margin: '-100px' }}
			>
				<motion.div variants={itemVariants}>
					<SectionTitle variant='h2' align='center'>
						Contact Me
					</SectionTitle>
				</motion.div>

				<motion.div variants={itemVariants}>
					<SectionSubtitle variant='body1' align='center'>
						Have a question or want to work together? Feel free to reach out!
					</SectionSubtitle>
				</motion.div>

				<motion.div variants={itemVariants}>
					<FormPaper elevation={0}>
						<FormBox component='form' onSubmit={handleSubmit}>
							{errorMessage && (
								<StyledAlert severity='error'>{errorMessage}</StyledAlert>
							)}

							<StyledTextField
								fullWidth
								label='Name'
								name='name'
								value={name}
								onChange={handleChange}
								onBlur={handleBlur}
								variant='outlined'
								error={touched.name && !name}
							/>

							<StyledTextField
								fullWidth
								label='Email Address'
								name='email'
								type='email'
								value={email}
								onChange={handleChange}
								onBlur={handleBlur}
								variant='outlined'
								error={touched.email && (!email || !validateEmail(email))}
							/>

							<StyledTextField
								fullWidth
								label='Message'
								name='message'
								value={message}
								onChange={handleChange}
								onBlur={handleBlur}
								variant='outlined'
								multiline
								rows={6}
								error={touched.message && !message}
							/>

							<SubmitButton
								type='submit'
								variant='contained'
								size='large'
								endIcon={<SendIcon />}
							>
								Submit
							</SubmitButton>
						</FormBox>
					</FormPaper>
				</motion.div>
			</motion.div>
		</Section>
	)
}

export default ContactForm
