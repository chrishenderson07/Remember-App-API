class TasksRepositoryinMemory {
	tasks = []

	async create({ name, email }) {
		const task = {
			name,
			email,
		}

		this.tasks.push(task)
		return task
	}
}

module.exports = TasksRepositoryinMemory
