module.exports = {
	apps: [
		{
			name: 'Remember App',
			script: './src/server.js',
			instance: 'max',
			env: {
				NODE_ENV: 'development',
			},
			env_production: {
				NODE_ENV: 'production',
			},
		},
	],
}
