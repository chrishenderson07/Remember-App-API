describe('TasksController', () => {
	it('task name should is filled', () => {
		const name = 'tasks'
		const email = 'test@example.com'

		function create(name, email) {
			const task = {
				name,
				email,
			}

			return task
		}
		const task = create(name, email)

		expect(task.name).toBeTruthy()
	})

	it('email should not be empty', () => {
		function create(name, email) {
			const task = {
				name,
				email,
			}

			return task
		}
		const task = create('emailTest', 'emaildeteste@gmail.com')

		expect(task.email).toBeTruthy()
	})
})
