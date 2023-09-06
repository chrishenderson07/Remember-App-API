const TasksRepository = require('../repositories/TasksRepository')

const AppError = require('../utils/AppError')
class TasksController {
	async create(request, response) {
		const { name, date, frequency } = request.body

		if (!name || !frequency) {
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
		if (!tasks) {
			return response.json('Tasks not found')
		}
		return response.json(tasks)
	}

	async show(request, response) {
		const { _id } = request.params

		const task = await TasksRepository.findById(_id)

		if (!task) {
			return response.status(400).json('Task not found')
		}

		return response.json(task)
	}

	async update(request, response) {
		const { _id } = request.params
		const { name, date, frequency } = request.body

		const updatedTask = await TasksRepository.update(_id, name, date, frequency)

		return response.status(200).json(updatedTask)
	}

	async delete(request, response) {
		const { _id } = request.params
		const taskId = await TasksRepository.findById(_id)

		if (!taskId) {
			throw new AppError(400, 'Task not Found')
		}
		await TasksRepository.deleteOne(taskId)

		response.json()
	}
}

module.exports = TasksController
