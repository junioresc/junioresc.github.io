import React, { useState } from 'react'
import { Container, Grid } from '@mui/material'
import { motion } from 'framer-motion'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import Modal from '../Modal'
import Button from '../UI/Button'
import {
	ProjectSection,
	SectionTitle,
	SectionSubtitle,
	ProjectCard,
	ProjectCardMedia,
	ProjectCardContent,
	ProjectTitle,
	ProjectCardActions,
} from './styles'
import Badge from '../UI/Badge'

import runBuddyImg from '../../assets/images/screenshots/run-buddy.jpg'
import nomadicaImg from '../../assets/images/screenshots/nomadica.jpg'
import shopShopImg from '../../assets/images/screenshots/shop-shop.png'
import passwordGenImg from '../../assets/images/screenshots/password-gen-site.png'
import pizzaHuntImg from '../../assets/images/screenshots/pizza-hunt.png'
import dcAdoptImg from '../../assets/images/screenshots/dc-adopt.png'
import otakuhqImg from '../../assets/images/screenshots/otakuhq.png'
import wallappImg from '../../assets/images/screenshots/wallapp.png'

function Project() {
	const [currentProject, setCurrentProject] = useState()
	const [isModalOpen, setIsModalOpen] = useState(false)

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

	const projects = [
		{
			name: 'Run Buddy',
			class: 'run-buddy',
			tools: 'HTML/CSS',
			deployed: 'https://junioresc.github.io/run-buddy/',
			github: 'https://github.com/junioresc/run-buddy',
			description:
				"This webpage made to showcase what can be achieved with HTML5 and CSS3. Run Buddy is a fictional fitness website and it has all the features to attract and keep the attention of the visitor. A nice big Jumbotron with a call to action and form to collect the visitor's information if they are interested in the service being advertised.",
			photo: 'run-buddy.jpg',
		},
		{
			name: 'Nomadica',
			class: 'nomadica',
			tools: 'HTML/CSS-Tailwind/JS',
			deployed: 'https://nomadica-app.herokuapp.com/',
			github: 'https://github.com/Dj-Viking/Nomadica',
			description:
				"Have you ever thought about packing your bags and starting over somewhere new? It's tempting, but it can be distressing not knowing how people with your occupation fare financially in a foreign land. Nomadica's purpose is to give you the information needed to make an informed, confident decision about relocating.",
			photo: 'nomadica.jpg',
		},
		{
			name: 'Shop-Shop',
			class: 'shop-shop',
			tools: 'HTML/CSS/JS/React/Redux',
			deployed: 'https://murmuring-shelf-28748.herokuapp.com/',
			github: 'https://github.com/junioresc/shop-shop',
			description:
				'This application is an e-commerce site that showcases multiple products. If you have an account created, you can add items to your shopping cart and once you finish shopping you can checkout. We process payments securely using the Stripe API.',
			photo: 'shop-shop.png',
		},
		{
			name: 'JavaScript Password Generator',
			class: 'js-password-generator',
			tools: 'HTML/CSS/JS',
			deployed: 'https://junioresc.github.io/js-password-generator/',
			github: 'https://github.com/junioresc/js-password-generator',
			description:
				'This application was made in order to produce a random password at the request of the user. The password must be at least 8 characters long and no more than 128. It handles edge cases in case the user decides to not input a response. The generator will accept at least one of the following character types: Uppercase, Lowercase, Numbers, Special Characters.',
			photo: 'password-gen-site.png',
		},
		{
			name: 'Pizza Hunt',
			class: 'pizza-hunt',
			tools: 'MongoDB, Express, Node',
			deployed: 'https://glacial-sands-00852.herokuapp.com/',
			github: 'https://github.com/junioresc/pizza-hunt',
			description:
				'Pizza Hunt - a self-aware riff on social-media applications that already exist for other topics - lets users connect with each other based on their love of pizza. In Pizza Hunt, users can share and discuss their dream pizza-topping combinations. Pizza is ubiquitous in everyday life all over the world, and no application has ever been created with the sole purpose of facilitating discussions about it.',
			photo: 'pizza-hunt.png',
		},
		{
			name: 'DC-Adopt',
			class: 'dc-adopt',
			tools: 'HTML-Handlebars/CSS/JS',
			deployed: 'https://dc-adopt.herokuapp.com/signup',
			github: 'https://github.com/hannahbrijenkins/DC-Adopt',
			description:
				"Sometimes we find ourselves in a situation where we have to make a difficult decision. Perhaps we get sick, have to move far away, or maybe you come across a stray that you can't keep. Finding a no-kill shelter can be tough, and even with finding one, shelters can be filled with diseases, and pets too often do not get the best care. We decided to cut out the middle-man, allowing pet owners to connect with each other online and find a forever-home for their pet.",
			photo: 'dc-adopt.png',
		},
		{
			name: 'OtakuHQ',
			class: 'otakuhq',
			tools: 'React/CSS/JS',
			deployed: 'https://otakuhq.herokuapp.com/',
			github: 'https://github.com/Kos-MosV4/otakuhq',
			description:
				"Have you ever thought about all the anime you're currently watching? Can you remember every single one? Wouldn't it be cool to keep track of all the anime's you're watching all in a single place? Well OtakuHQ is the website made specifically for that. Made by Otakus for other Weebs to enjoy and congregate. OtakuHQ allows you to search for whatever anime of your choosing. There is also a section detailing the most popular anime and the current trending anime that is airing on TV.",
			photo: 'otakuhq.png',
		},
		{
			name: 'Wall App',
			class: 'wallapp',
			tools: 'React/CSS/JS',
			deployed: 'https://wall-app-social.herokuapp.com/',
			github: 'https://github.com/junioresc/wallapp',
			description:
				'Wall App is an application that allows users to register, login, and post on the wall. The front-end of the app was made using React, React-Bootstrap, Framer Motion to add some transitions to page changes, and Apollo-Client to request and cache data. The back-end server was set up with Apollo-Server-Express and uses Mongoose in order to communicate with the MongoDB database.',
			photo: 'wallapp.png',
		},
	]

	const toggleModal = (project, i) => {
		setCurrentProject({ ...project, index: i })
		setIsModalOpen(!isModalOpen)
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

	const cardVariants = {
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
		<ProjectSection id='work'>
			<Container maxWidth='lg'>
				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, margin: '-100px' }}
				>
					<SectionTitle variant='h2' align='center'>
						Work
					</SectionTitle>

					<SectionSubtitle variant='body1' align='center'>
						A collection of projects showcasing my skills and experience
					</SectionSubtitle>

					{isModalOpen && (
						<Modal currentProject={currentProject} onClose={toggleModal} />
					)}

					<Grid container spacing={3}>
						{projects.map((project, i) => (
							<Grid item xs={12} sm={6} md={4} lg={3} key={project.name}>
								<motion.div variants={cardVariants}>
									<ProjectCard onClick={() => toggleModal(project, i)}>
										<ProjectCardMedia
											component='img'
											height='200'
											image={imageMap[project.photo]}
											alt={project.name}
											loading='lazy'
										/>
										<ProjectCardContent>
											<ProjectTitle gutterBottom variant='h6' component='h3'>
												{project.name}
											</ProjectTitle>
											<Badge size='small'>{project.tools}</Badge>
										</ProjectCardContent>
										<ProjectCardActions>
											<Button
												size='small'
												startIcon={<GitHubIcon />}
												href={project.github}
												target='_blank'
												rel='noopener noreferrer'
												onClick={(e) => e.stopPropagation()}
											>
												Code
											</Button>
											<Button
												size='small'
												startIcon={<LaunchIcon />}
												href={project.deployed}
												target='_blank'
												rel='noopener noreferrer'
												onClick={(e) => e.stopPropagation()}
											>
												Demo
											</Button>
										</ProjectCardActions>
									</ProjectCard>
								</motion.div>
							</Grid>
						))}
					</Grid>
				</motion.div>
			</Container>
		</ProjectSection>
	)
}

export default Project
