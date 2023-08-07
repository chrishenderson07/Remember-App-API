class TasksController {
	async create(request, response) {
		const { title, date, frequency } = request.body
		const taskId = Math.random()
	}
}

module.exports = TasksController
