module.exports = {
	globals: {
		NodeJS: true,
		NodeListOf: true,
	},
	env: {
		es2022: true,
		node: true,
		browser: true,
	},
	extends: [
		"plugin:@typescript-eslint/recommended",
		"eslint-config-prettier",
		"plugin:@typescript-eslint/stylistic",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["@stylistic", "unused-imports"],
	rules: {
		"@stylistic/member-delimiter-style": [
			"error",
			{
				overrides: {
					interface: {
						multiline: {
							delimiter: "none",
							requireLast: true,
						},
					},
				},
			},
		],
		"@stylistic/brace-style": "off",
		"@stylistic/indent": "off",
		"@stylistic/no-tabs": "off",
		"@stylistic/operator-linebreak": ["error", "after"],
		"@stylistic/multiline-ternary": "off",
		"@stylistic/no-mixed-spaces-and-tabs": "off",
		"@typescript-eslint/no-unused-vars": "off",
		"@typescript-eslint/no-duplicate-enum-values": "error",
		"@typescript-eslint/no-inferrable-types": "warn",
		"eol-last": "off",
		"jsx-quotes": ["warn", "prefer-double"],
		"quotes": ["warn", "double"],
		"no-constant-binary-expression": "warn",
		"no-debugger": "warn",
		"no-extend-native": "off",
		"no-trailing-spaces": "warn",
		"no-implicit-coercion": "error",
		"eqeqeq": ["error", "always"],
		"space-before-function-paren": "off",
		"no-unused-vars": "off",
		"unused-imports/no-unused-imports": "warn",
		"object-curly-newline": [
			"warn",
			{
				consistent: true,
				multiline: true,
			},
		],
		"object-curly-spacing": ["warn", "always"],
		"array-element-newline": ["warn", "consistent"],
		"array-bracket-newline": ["warn", "consistent"],
	},
	overrides: [
		{
			files: ["*.astro"],
			parser: "astro-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser",
				extraFileExtensions: [".astro"],
			},
			extends: ["plugin:astro/recommended", "plugin:astro/jsx-a11y-recommended"],
			rules: {
				"astro/no-conflict-set-directives": "warn",
				"astro/no-unused-define-vars-in-style": "warn",
				"astro/no-unused-css-selector": "off",
				"astro/prefer-class-list-directive": "warn",
				"astro/semi": ["warn", "never"],
				"astro/jsx-a11y/anchor-is-valid": "warn",
				"@stylistic/indent": "off",
			},
		},
		{
			// Define the configuration for `<script>` tag.
			// Script in `<script>` is assigned a virtual file name with the `.js` extension.
			files: ["**/*.astro/*.js", "*.astro/*.js"],
			parser: "@typescript-eslint/parser",
		},
	],
}
