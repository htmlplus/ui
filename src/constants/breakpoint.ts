export const BREAKPOINTS = {
	xs: {
		type: 'media',
		min: 0
	},
	sm: {
		type: 'media',
		min: 600
	},
	md: {
		type: 'media',
		min: 900
	},
	lg: {
		type: 'media',
		min: 1200
	},
	xl: {
		type: 'media',
		min: 1536
	},
	'@xs': {
		type: 'container',
		min: 0
	},
	'@sm': {
		type: 'container',
		min: 384
	},
	'@md': {
		type: 'container',
		min: 640
	},
	'@lg': {
		type: 'container',
		min: 768
	},
	'@xl': {
		type: 'container',
		min: 1024
	}
} as const;
