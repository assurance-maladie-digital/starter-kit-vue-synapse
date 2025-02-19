module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
	},
	extends: ['plugin:vue/base', 'plugin:vuetify/base'],
	plugins: [],
	ignorePatterns: ['**/*.json'],
	rules: {
		// Disable style rules
		semi: 0,
		indent: 0,
		'no-tabs': 0,
		quotes: 0,
		'quote-props': 0,
		'comma-dangle': 0,
		'vue/html-indent': 0,
	},
}
