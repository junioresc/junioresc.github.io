import { createTheme } from '@mui/material/styles'

// Custom theme with professional yet creative design
const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#8B8AF7',
			light: '#A2A1FA',
			dark: '#6E6DE0',
			contrastText: '#FFFFFF',
		},
		secondary: {
			main: '#C3A675',
			light: '#D3BA92',
			dark: '#9D845C',
			contrastText: '#FFFFFF',
		},
		background: {
			default: '#0B0B0C',
			paper: '#111113',
		},
		text: {
			primary: '#FAFAFA',
			secondary: '#9CA3AF',
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
		borderRadius: 10,
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
					padding: '8px 16px',
					transition: 'background-color 0.2s ease, border-color 0.2s ease',
					'&:hover': {
						backgroundColor: 'rgba(255,255,255,0.04)',
						boxShadow: 'none',
						transform: 'none',
					},
				},
				contained: {
					boxShadow: 'none',
				},
				outlined: {
					borderWidth: 1,
					borderColor: 'rgba(255,255,255,0.16)',
					'&:hover': {
						borderColor: 'rgba(255,255,255,0.28)',
					},
				},
			},
		},
		MuiCard: {
			defaultProps: {
				variant: 'outlined',
			},
			styleOverrides: {
				root: {
					borderRadius: 12,
					border: '1px solid rgba(255,255,255,0.08)',
					backgroundColor: 'rgba(255,255,255,0.02)',
					boxShadow: 'none',
					transition: 'border-color 0.2s ease, transform 0.2s ease',
					'&:hover': {
						borderColor: 'rgba(255,255,255,0.16)',
						transform: 'translateY(-2px)',
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
						transition: 'border-color 0.2s ease',
						'&:hover .MuiOutlinedInput-notchedOutline': {
							borderColor: 'rgba(255,255,255,0.28)',
						},
						'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
							borderWidth: 2,
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
					backdropFilter: 'blur(12px)',
					backgroundColor: 'rgba(11,11,12,0.7)',
					borderBottom: '1px solid rgba(255,255,255,0.08)',
				},
			},
		},
	},
})

export default theme
