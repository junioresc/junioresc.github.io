import React from 'react'
import { Container, Grid } from '@mui/material'
import { motion } from 'framer-motion'
import CodeIcon from '@mui/icons-material/Code'
import StorageIcon from '@mui/icons-material/Storage'
import HtmlIcon from '@mui/icons-material/Html'
import CssIcon from '@mui/icons-material/Css'
import JavascriptIcon from '@mui/icons-material/Javascript'
import DevicesIcon from '@mui/icons-material/Devices'
import {
	AboutSection,
	SectionTitle,
	AboutDescription,
	SkillCard,
	SkillCardContent,
	SkillHeader,
	SkillTitle,
	SkillChipsContainer,
	SkillChip,
} from './styles'

function AboutMe() {
	const frontendSkills = [
		{ name: 'Semantic HTML', icon: <HtmlIcon /> },
		{ name: 'Modern CSS', icon: <CssIcon /> },
		{ name: 'SASS', icon: <CssIcon /> },
		{ name: 'JavaScript', icon: <JavascriptIcon /> },
		{ name: 'jQuery', icon: <CodeIcon /> },
		{ name: 'Mobile-First Design', icon: <DevicesIcon /> },
		{ name: 'React', icon: <CodeIcon /> },
		{ name: 'Bootstrap', icon: <CodeIcon /> },
	]

	const backendSkills = [
		{ name: 'Node', icon: <StorageIcon /> },
		{ name: 'Express', icon: <StorageIcon /> },
		{ name: 'MySQL', icon: <StorageIcon /> },
		{ name: 'Sequelize', icon: <StorageIcon /> },
		{ name: 'MongoDB', icon: <StorageIcon /> },
		{ name: 'Mongoose', icon: <StorageIcon /> },
	]

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
		<AboutSection id='about'>
			<Container maxWidth='lg'>
				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, margin: '-100px' }}
				>
					<motion.div variants={itemVariants}>
						<SectionTitle variant='h2' align='center'>
							About Me
						</SectionTitle>
					</motion.div>

					<motion.div variants={itemVariants}>
						<AboutDescription variant='body1' align='center'>
							I’m a passionate Full-Stack Software Engineer with hands-on
							experience building and modernizing web and mobile applications
							across diverse industries. I love the challenge of transforming
							complex ideas into clean, efficient code — and collaborating with
							cross-functional teams to bring products to life. I earned my
							Full-Stack Web Development Certificate from the University of
							Central Florida, where I built a strong foundation in the MERN
							stack (MongoDB, Express.js, React.js, Node.js) along with
							JavaScript, HTML, and CSS. I’m continuously learning new
							technologies, recently expanding into React Native, Zustand, and
							TypeScript-based architectures. Whether I’m coding, testing, or
							reviewing, my goal is the same: build software that’s efficient,
							maintainable, and genuinely enjoyable to use.
						</AboutDescription>
					</motion.div>

					<Grid container spacing={4}>
						<Grid item xs={12} md={6}>
							<motion.div variants={itemVariants}>
								<SkillCard variant='frontend'>
									<SkillCardContent>
										<SkillHeader>
											<CodeIcon
												sx={{
													fontSize: 40,
													color: 'primary.main',
													mr: 2,
												}}
											/>
											<SkillTitle variant='h4'>
												Front-End Proficiencies
											</SkillTitle>
										</SkillHeader>
										<SkillChipsContainer>
											{frontendSkills.map((skill) => (
												<SkillChip
													key={skill.name}
													icon={skill.icon}
													label={skill.name}
													variant='frontend'
												/>
											))}
										</SkillChipsContainer>
									</SkillCardContent>
								</SkillCard>
							</motion.div>
						</Grid>

						<Grid item xs={12} md={6}>
							<motion.div variants={itemVariants}>
								<SkillCard variant='backend'>
									<SkillCardContent>
										<SkillHeader>
											<StorageIcon
												sx={{
													fontSize: 40,
													color: 'secondary.main',
													mr: 2,
												}}
											/>
											<SkillTitle variant='h4'>
												Back-End Proficiencies
											</SkillTitle>
										</SkillHeader>
										<SkillChipsContainer>
											{backendSkills.map((skill) => (
												<SkillChip
													key={skill.name}
													icon={skill.icon}
													label={skill.name}
													variant='backend'
												/>
											))}
										</SkillChipsContainer>
									</SkillCardContent>
								</SkillCard>
							</motion.div>
						</Grid>
					</Grid>
				</motion.div>
			</Container>
		</AboutSection>
	)
}

export default AboutMe
