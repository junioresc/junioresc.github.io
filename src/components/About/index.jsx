import React from 'react'
import { Grid } from '@mui/material'
import { motion } from 'framer-motion'
import CodeIcon from '@mui/icons-material/Code'
import StorageIcon from '@mui/icons-material/Storage'
import HtmlIcon from '@mui/icons-material/Html'
import CssIcon from '@mui/icons-material/Css'
import JavascriptIcon from '@mui/icons-material/Javascript'
import DevicesIcon from '@mui/icons-material/Devices'
import ApiIcon from '@mui/icons-material/Api'
import CloudIcon from '@mui/icons-material/Cloud'
import BuildIcon from '@mui/icons-material/Build'
import DataObjectIcon from '@mui/icons-material/DataObject'
import Section from '../UI/Section'
import Badge from '../UI/Badge'
import {
	SectionTitle,
	AboutDescription,
	SkillCard,
	SkillCardContent,
	SkillHeader,
	SkillTitle,
	SkillChipsContainer,
} from './styles'

function AboutMe() {
	const frontendSkills = [
		{ name: 'JavaScript ES6+', icon: <JavascriptIcon /> },
		{ name: 'CSS3', icon: <CssIcon /> },
		{ name: 'HTML5', icon: <HtmlIcon /> },
		{ name: 'React', icon: <CodeIcon /> },
		{ name: 'Vite', icon: <CodeIcon /> },
		{ name: 'Bootstrap', icon: <CodeIcon /> },
		{ name: 'Tailwind', icon: <CssIcon /> },
		{ name: 'Material UI', icon: <CodeIcon /> },
		{ name: 'Framer Motion', icon: <CodeIcon /> },
		{ name: 'Styled Components', icon: <CodeIcon /> },
		{ name: 'Storybook', icon: <CodeIcon /> },
		{ name: 'Jest', icon: <CodeIcon /> },
		{ name: 'Cypress', icon: <CodeIcon /> },
		{ name: 'React Native', icon: <DevicesIcon /> },
		{ name: 'React Router', icon: <CodeIcon /> },
		{ name: 'React Hook Form', icon: <CodeIcon /> },
		{ name: 'React Query', icon: <CodeIcon /> },
		{ name: 'React Router', icon: <CodeIcon /> },
		{ name: 'Yarn', icon: <BuildIcon /> },
		{ name: 'TypeScript', icon: <CodeIcon /> },
		{ name: 'Next.js', icon: <CodeIcon /> },
		{ name: 'Redux', icon: <CodeIcon /> },
		{ name: 'Zustand', icon: <CodeIcon /> },
		{ name: 'Apollo Client', icon: <ApiIcon /> },
		{ name: 'Handlebars', icon: <CodeIcon /> },
		{ name: 'GraphQL', icon: <ApiIcon /> },
		{ name: 'Adobe XD', icon: <DevicesIcon /> },
		{ name: 'Figma', icon: <DevicesIcon /> },
	]

	const backendSkills = [
		{ name: 'Python', icon: <CodeIcon /> },
		{ name: 'SQL', icon: <DataObjectIcon /> },
		{ name: 'NoSQL', icon: <DataObjectIcon /> },
		{ name: 'Node', icon: <StorageIcon /> },
		{ name: 'Express', icon: <StorageIcon /> },
		{ name: 'Sequelize', icon: <StorageIcon /> },
		{ name: 'Mongoose', icon: <StorageIcon /> },
		{ name: 'PostgreSQL', icon: <StorageIcon /> },
		{ name: 'Prisma', icon: <StorageIcon /> },
		{ name: 'MySQL', icon: <StorageIcon /> },
		{ name: 'MongoDB', icon: <StorageIcon /> },
		{ name: 'Django', icon: <CodeIcon /> },
		{ name: 'REST Framework', icon: <ApiIcon /> },
		{ name: 'GraphQL', icon: <ApiIcon /> },
		{ name: 'Jenkins', icon: <BuildIcon /> },
		{ name: 'CI/CD', icon: <BuildIcon /> },
		{ name: 'Docker', icon: <CloudIcon /> },
		{ name: 'PyPI', icon: <CloudIcon /> },
		{ name: 'GitHub', icon: <CloudIcon /> },
		{ name: 'Bitbucket', icon: <CloudIcon /> },
		{ name: 'Jira', icon: <BuildIcon /> },
		{ name: 'Heroku', icon: <CloudIcon /> },
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
		<Section id='about' maxWidth='lg'>
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
						Central Florida, where I built a strong foundation in the MERN stack
						(MongoDB, Express.js, React.js, Node.js) along with JavaScript,
						HTML, and CSS. I’m continuously learning new technologies, recently
						expanding into React Native, Zustand, and TypeScript-based
						architectures. Whether I’m coding, testing, or reviewing, my goal is
						the same: build software that’s efficient, maintainable, and
						genuinely enjoyable to use.
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
											<Badge key={skill.name} icon={skill.icon}>
												{skill.name}
											</Badge>
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
										<SkillTitle variant='h4'>Back-End Proficiencies</SkillTitle>
									</SkillHeader>
									<SkillChipsContainer>
										{backendSkills.map((skill) => (
											<Badge key={skill.name} icon={skill.icon}>
												{skill.name}
											</Badge>
										))}
									</SkillChipsContainer>
								</SkillCardContent>
							</SkillCard>
						</motion.div>
					</Grid>
				</Grid>
			</motion.div>
		</Section>
	)
}

export default AboutMe
