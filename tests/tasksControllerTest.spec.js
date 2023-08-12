describe('TasksController', () => {
	it('task name should is filled', () => {
		const name = 'tasks'
		const date = "12/12/2023"
		const frequency = 2

		function create(name, date,frequency) {
			const task = {
				name,
				date,
				frequency,
			}

			return task
		}
		const task = create(name, date, frequency)

		expect(task.name).toBeTruthy()
	})

	it("frequency shoud be more than 1", ()=> {

	})
})
