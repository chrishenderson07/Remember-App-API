const Task = require('../database/schemas/Task')
const TasksRepository = require('../repositories/TasksRepository')

class TasksController {
	async create(request, response) {
		const { name, date, frequency } = request.body

		if (!name || !date || !frequency) {
			return response
				.status(400)
				.json({ error: 'Name, Date and Frequency is required' })
		}

		if (frequency < 1) {
			return response
				.status(400)
				.json({ error: 'Frequency must be more than one' })
		}

		try {
			const task = await TasksRepository.create({
				name,
				date,
				frequency,
			})

			return response.json(task)
		} catch (error) {
			return response.status(500).send({
				error: error.message,
			})
		}
	}

	async index(request, response) {
		const tasks = await TasksRepository.findAll()
		return response.json(tasks)
	}

	async show(request, response) {
		const { _id } = request.params


		const task = await TasksRepository.findById(_id)
		
		if(!task) {
			return response.status(400).json("Task not found")
		}


		return response.json(task)
	}

	async delete(request, response) {
		const { _id } = request.params
		const taskId = await TasksRepository.findById(_id)

		await TasksRepository.deleteOne(taskId)

		response.json()
	}
}

module.exports = TasksController
