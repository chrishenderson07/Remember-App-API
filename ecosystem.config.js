module.exports = {
	apps: [
		{
			name: 'app',
			script: './src/server.js', // Por exemplo, 'app.js'
			watch: true,
			ignore_watch: ['node_modules', 'logs'],
			instances: 'max',
			exec_mode: 'cluster',
			env: {
				NODE_ENV: 'production',
			},
		},
	],
}
