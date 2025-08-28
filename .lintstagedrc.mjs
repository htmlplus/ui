export default {
	'*.{js,jsx,ts,tsx,json,css,html}': () => [
		'biome format --write',
		'biome check --error-on-warnings'
	],
	'*.{ts,tsx}': () => 'npm run type-check'
};
