import React from 'react'
import { Container, Stack } from '@mui/material'
import Button from '../UI/Button'
import { motion } from 'framer-motion'
import juniorPhoto from '../../assets/images/junior.jpg'
import {
	HeroContainer,
	ContentBox,
	ProfileAvatar,
	TextBox,
	Subtitle,
	Title,
	Description,
} from './styles'

function Hero() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: [0.6, -0.05, 0.01, 0.99],
			},
		},
	}

	return (
		<HeroContainer>
			<Container maxWidth='lg' sx={{ position: 'relative', zIndex: 2, py: 6 }}>
				<motion.div
					variants={containerVariants}
					initial='hidden'
					animate='visible'
				>
					<ContentBox>
						<motion.div variants={itemVariants}>
							<ProfileAvatar
								src={juniorPhoto}
								alt='Junior Escobar'
								imgProps={{ loading: 'lazy' }}
							/>
						</motion.div>

						<TextBox>
							<motion.div variants={itemVariants}>
								<Subtitle variant='h6'>Full-Stack Web Developer</Subtitle>
							</motion.div>

							<motion.div variants={itemVariants}>
								<Title variant='h2'>
									Building the Future,
									<br />
									One Line at a Time
								</Title>
							</motion.div>

							<motion.div variants={itemVariants}>
								<Description variant='body1'>
									I build end-to-end solutions from robust backends to intuitive
									frontends, creating scalable applications that deliver
									exceptional user experiences across the full technology stack.
								</Description>
							</motion.div>

							<motion.div variants={itemVariants}>
								<Stack
									direction={{ xs: 'column', sm: 'row' }}
									spacing={2}
									sx={{ mt: 3 }}
								>
									<Button href='/projects' kind='primary'>
										View Projects
									</Button>
									<Button href='/contact' kind='ghost'>
										Get in Touch
									</Button>
								</Stack>
							</motion.div>
						</TextBox>
					</ContentBox>
				</motion.div>
			</Container>
		</HeroContainer>
	)
}

export default Hero
