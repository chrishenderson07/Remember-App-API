const Task = require('../database/schemas/Task')

class TasksRepository {
	async create({ name, frequency }) {
		const task = await Task.create({
			name,
			frequency,
		})
		return task
	}

	async findAll() {
		const tasks = await Task.find({}).sort({ name: 1 })
		return tasks
	}

	async findById(id) {
		const task = await Task.findOne({ _id: id })
		return task
	}

	async findByName(name) {
		const task = await Task.findOne({
			name: { $regex: name, $options: 'i' },
		})
		return task
	}

	async update(_id, name, date, frequency) {
		const filter = { _id }

		const newDate = new Date(date)

		console.log(newDate)
		const task = {
			name,
			date: newDate,
			frequency,
		}

		const updatedTask = await Task.findOneAndUpdate(filter, task)
		return updatedTask
	}

	async deleteOne(id) {
		const deleteTask = await Task.deleteOne({ _id: id })
		return deleteTask
	}

	async deleteAll() {
		await Task.deleteMany()
	}
}

module.exports = new TasksRepository()
