import { createTheme } from '@mui/material/styles'

// Custom theme with professional yet creative design
const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#7973DD',
			light: '#A199E8',
			dark: '#5349B8',
			contrastText: '#FFFFFF',
		},
		secondary: {
			main: '#AD8350',
			light: '#C5A06D',
			dark: '#8B6840',
			contrastText: '#FFFFFF',
		},
		background: {
			default: '#0A0A0A',
			paper: '#1A1A1A',
		},
		text: {
			primary: '#FFFFFF',
			secondary: '#B8B8B8',
		},
		error: {
			main: '#FF5252',
		},
		success: {
			main: '#4CAF50',
		},
		divider: 'rgba(255, 255, 255, 0.12)',
	},
	typography: {
		fontFamily: [
			'Inter',
			'Roboto',
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Arial',
			'sans-serif',
		].join(','),
		h1: {
			fontSize: '3.5rem',
			fontWeight: 700,
			letterSpacing: '-0.02em',
			lineHeight: 1.2,
		},
		h2: {
			fontSize: '2.5rem',
			fontWeight: 600,
			letterSpacing: '-0.01em',
			lineHeight: 1.3,
		},
		h3: {
			fontSize: '2rem',
			fontWeight: 600,
			lineHeight: 1.4,
		},
		h4: {
			fontSize: '1.5rem',
			fontWeight: 600,
			lineHeight: 1.4,
		},
		h5: {
			fontSize: '1.25rem',
			fontWeight: 600,
			lineHeight: 1.5,
		},
		h6: {
			fontSize: '1rem',
			fontWeight: 600,
			lineHeight: 1.6,
		},
		body1: {
			fontSize: '1rem',
			lineHeight: 1.7,
			letterSpacing: '0.00938em',
		},
		body2: {
			fontSize: '0.875rem',
			lineHeight: 1.6,
		},
		button: {
			textTransform: 'none',
			fontWeight: 600,
			fontSize: '0.9375rem',
			letterSpacing: '0.02em',
		},
	},
	shape: {
		borderRadius: 12,
	},
	shadows: [
		'none',
		'0px 2px 4px rgba(0,0,0,0.1)',
		'0px 4px 8px rgba(0,0,0,0.12)',
		'0px 6px 12px rgba(0,0,0,0.15)',
		'0px 8px 16px rgba(0,0,0,0.18)',
		'0px 10px 20px rgba(0,0,0,0.2)',
		'0px 12px 24px rgba(0,0,0,0.22)',
		'0px 14px 28px rgba(0,0,0,0.25)',
		'0px 16px 32px rgba(0,0,0,0.27)',
		'0px 18px 36px rgba(0,0,0,0.3)',
		'0px 20px 40px rgba(0,0,0,0.32)',
		'0px 22px 44px rgba(0,0,0,0.35)',
		'0px 24px 48px rgba(0,0,0,0.37)',
		'0px 26px 52px rgba(0,0,0,0.4)',
		'0px 28px 56px rgba(0,0,0,0.42)',
		'0px 30px 60px rgba(0,0,0,0.45)',
		'0px 32px 64px rgba(0,0,0,0.47)',
		'0px 34px 68px rgba(0,0,0,0.5)',
		'0px 36px 72px rgba(0,0,0,0.52)',
		'0px 38px 76px rgba(0,0,0,0.55)',
		'0px 40px 80px rgba(0,0,0,0.57)',
		'0px 42px 84px rgba(0,0,0,0.6)',
		'0px 44px 88px rgba(0,0,0,0.62)',
		'0px 46px 92px rgba(0,0,0,0.65)',
		'0px 48px 96px rgba(0,0,0,0.67)',
	],
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 8,
					padding: '10px 24px',
					transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
					'&:hover': {
						transform: 'translateY(-2px)',
						boxShadow: '0px 6px 20px rgba(121, 115, 221, 0.4)',
					},
				},
				contained: {
					boxShadow: '0px 4px 12px rgba(121, 115, 221, 0.3)',
				},
				outlined: {
					borderWidth: 2,
					'&:hover': {
						borderWidth: 2,
					},
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					borderRadius: 16,
					transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
					border: '1px solid rgba(255, 255, 255, 0.08)',
					'&:hover': {
						transform: 'translateY(-8px)',
						boxShadow: '0px 12px 40px rgba(121, 115, 221, 0.25)',
					},
				},
			},
		},
		MuiChip: {
			styleOverrides: {
				root: {
					borderRadius: 8,
					fontWeight: 600,
				},
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					'& .MuiOutlinedInput-root': {
						borderRadius: 8,
						transition: 'all 0.3s ease',
						'&:hover': {
							'& .MuiOutlinedInput-notchedOutline': {
								borderColor: 'rgba(121, 115, 221, 0.5)',
							},
						},
						'&.Mui-focused': {
							'& .MuiOutlinedInput-notchedOutline': {
								borderWidth: 2,
							},
						},
					},
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					backgroundImage: 'none',
				},
			},
		},
		MuiAppBar: {
			styleOverrides: {
				root: {
					backdropFilter: 'blur(20px)',
					backgroundColor: 'rgba(10, 10, 10, 0.8)',
					borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
				},
			},
		},
	},
})

export default theme
