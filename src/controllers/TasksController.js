const Task = require('../database/schemas/Task')

class TasksController {
	async create(request, response) {
		const { name, email } = request.body

		try {
			const task = await Task.create({
				name,
				email,
			})

			return response.json(task)
		} catch (error) {
			return response.status(500).send({
				error: error.message,
			})
		}
	}

	async index(request, response) {
		const tasks = await Task.find({})
		return response.json(tasks)
	}
}

module.exports = TasksController
