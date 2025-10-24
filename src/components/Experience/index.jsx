import React from 'react'
import { Container, Grid } from '@mui/material'
import { motion } from 'framer-motion'
import WorkIcon from '@mui/icons-material/Work'
import {
	ExperienceSection,
	SectionTitle,
	ExperienceCard,
	CompanyName,
	JobTitle,
	DateRange,
	Description,
	TechStack,
	TechChip,
	IconWrapper,
} from './styles'

function Experience() {
	const experiences = [
		{
			company: 'Freelance',
			title: 'Full-Stack Software Engineer',
			date: 'November 2024 - Present',
			description:
				'Design and develop custom web and mobile applications tailored to client needs. Collaborate with clients to define requirements, implement solutions, and ensure seamless deployment.',
			technologies: [
				'React',
				'React Native',
				'Node.js',
				'TypeScript',
				'MongoDB',
			],
		},
		{
			company: 'NomadICA',
			title: 'Full-Stack Developer',
			date: 'April 2024 - November 2024',
			description:
				'Developed and maintained cross-platform applications using React Native. Implemented robust state management with Zustand and collaborated on comprehensive testing strategies with Jest.',
			technologies: [
				'React Native',
				'TypeScript',
				'Zustand',
				'Jest',
				'GraphQL',
				'MongoDB',
			],
		},
		{
			company: 'Wallapp',
			title: 'Software Engineer Intern',
			date: 'November 2023 - April 2024',
			description:
				'Contributed to building a location-based social networking application. Developed features for content sharing and user interactions using modern React Native patterns.',
			technologies: ['React Native', 'JavaScript', 'Firebase', 'RESTful APIs'],
		},
	]

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
			},
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, x: -20 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.5,
			},
		},
	}

	return (
		<ExperienceSection id='experience'>
			<Container maxWidth='lg'>
				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, margin: '-100px' }}
				>
					<motion.div variants={itemVariants}>
						<SectionTitle variant='h2' align='center'>
							Experience
						</SectionTitle>
					</motion.div>

					<Grid container spacing={3} sx={{ mt: 2 }}>
						{experiences.map((exp, index) => (
							<Grid item xs={12} key={index}>
								<motion.div variants={itemVariants}>
									<ExperienceCard>
										<IconWrapper>
											<WorkIcon />
										</IconWrapper>
										<div style={{ flex: 1 }}>
											<CompanyName variant='h5'>{exp.company}</CompanyName>
											<JobTitle variant='h6'>{exp.title}</JobTitle>
											<DateRange variant='body2'>{exp.date}</DateRange>
											<Description variant='body1'>
												{exp.description}
											</Description>
											<TechStack>
												{exp.technologies.map((tech) => (
													<TechChip key={tech} label={tech} size='small' />
												))}
											</TechStack>
										</div>
									</ExperienceCard>
								</motion.div>
							</Grid>
						))}
					</Grid>
				</motion.div>
			</Container>
		</ExperienceSection>
	)
}

export default Experience
