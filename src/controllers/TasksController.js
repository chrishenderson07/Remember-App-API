class TasksController {
	async create(request, response) {
		const { title, date, frequency } = request.body

		return response.status(200).json({ title, date, frequency })
	}
}

module.exports = TasksController
