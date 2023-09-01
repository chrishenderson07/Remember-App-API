const cron = require('node-cron')
const EmailSender = require('../services/emailSender')
const Task = require('../database/schemas/Task')

function schedule() {
	// Agendar a verificação diariamente, por exemplo, às 9h da manhã
	cron.schedule('0 08 * * *', async () => {
		const emailSender = new EmailSender()
		const currentTime = new Date()

		// Consultar todas as tarefas do banco de dados
		const allTasks = await Task.find()

		for (const task of allTasks) {
			const timeSinceLastNotification = currentTime - task.lastNotificationTime
			const notificationFrequencyInMillis = task.frequency * 24 * 60 * 60 * 1000

			//Se o tempo passado desde a última notificação for maior ou igual à frequência definida
			if (timeSinceLastNotification >= notificationFrequencyInMillis) {
				console.log(`Notification para Tarefa ${task.name}`)

				try {
					emailSender.sendEmail(task.name)
				} catch (error) {
					console.error(error.message)
				}
			}

			task.lastNotificationTime = currentTime
			await task.save()
		}
	})
}

module.exports = schedule
