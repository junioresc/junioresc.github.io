import React from 'react'
import { IconButton, useTheme, useMediaQuery } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import {
	StyledDialog,
	StyledDialogTitle,
	ModalTitle,
	StyledDialogContent,
	ProjectImage,
	TechChip,
	ModalDescription,
	StyledDialogActions,
} from './styles'

import runBuddyImg from '../../assets/images/screenshots/run-buddy.jpg'
import nomadicaImg from '../../assets/images/screenshots/nomadica.jpg'
import shopShopImg from '../../assets/images/screenshots/shop-shop.png'
import passwordGenImg from '../../assets/images/screenshots/password-gen-site.png'
import pizzaHuntImg from '../../assets/images/screenshots/pizza-hunt.png'
import dcAdoptImg from '../../assets/images/screenshots/dc-adopt.png'
import otakuhqImg from '../../assets/images/screenshots/otakuhq.png'
import wallappImg from '../../assets/images/screenshots/wallapp.png'
import Button from '../UI/Button'

function Modal({ onClose, currentProject }) {
	const theme = useTheme()
	const fullScreen = useMediaQuery(theme.breakpoints.down('md'))
	const { name, tools, deployed, github, description, photo } = currentProject

	const imageMap = {
		'run-buddy.jpg': runBuddyImg,
		'nomadica.jpg': nomadicaImg,
		'shop-shop.png': shopShopImg,
		'password-gen-site.png': passwordGenImg,
		'pizza-hunt.png': pizzaHuntImg,
		'dc-adopt.png': dcAdoptImg,
		'otakuhq.png': otakuhqImg,
		'wallapp.png': wallappImg,
	}

	return (
		<StyledDialog
			open={true}
			onClose={onClose}
			maxWidth='md'
			fullWidth
			fullScreen={fullScreen}
		>
			<StyledDialogTitle>
				<ModalTitle variant='h5' component='span'>
					{name}
				</ModalTitle>
				<IconButton
					edge='end'
					color='inherit'
					onClick={onClose}
					aria-label='close'
				>
					<CloseIcon />
				</IconButton>
			</StyledDialogTitle>

			<StyledDialogContent dividers>
				<ProjectImage component='img' src={imageMap[photo]} alt={name} />
				<TechChip label={tools} />
				<ModalDescription variant='body1'>{description}</ModalDescription>
			</StyledDialogContent>

			<StyledDialogActions>
				<Button
					variant='outlined'
					startIcon={<GitHubIcon />}
					href={github}
					target='_blank'
					rel='noopener noreferrer'
				>
					View Code
				</Button>
				<Button
					variant='contained'
					startIcon={<LaunchIcon />}
					href={deployed}
					target='_blank'
					rel='noopener noreferrer'
				>
					View Demo
				</Button>
			</StyledDialogActions>
		</StyledDialog>
	)
}

export default Modal
