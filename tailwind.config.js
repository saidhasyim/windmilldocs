module.exports = {
	content: ['./src/**/*.{html,js,jsx,tsx}'],
	extend: {
		height: {
			'80v': '80vh',
			'1/2': '50vh'
		},
		width: {
			'9/10': '90%'
		},
		maxWidth: {
			'80v': '80vw',
			'1/3': '33%'
		},
		fontFamily: {
			// add double quotes if there is space in font name
			main: ['Inter', 'Arial'],
			mono: [
				'ui-monospace',
				'SFMono-Regular',
				'Menlo',
				'Monaco',
				'Consolas',
				'"Liberation Mono"',
				'"Courier New"',
				'monospace'
			]
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
