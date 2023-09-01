const nodemailer = require('nodemailer')
class EmailSender {
	constructor() {
		this.transporter = nodemailer.createTransport({
			host: process.env.HOST,
			service: process.env.SERVICE,
			port: process.env.SERVICE_PORT,
			secure: true,
			auth: {
				user: process.env.USER_EMAIL,
				pass: process.env.USER_PASSWORD,
			},
		})
	}

	sendEmail(task) {
		const emailToSend = {
			from: process.env.ORIGIN_EMAIL,
			to: process.env.DESTINY_EMAIL,
			subject: `${task}`,
			text: `Lembrete ${task}`,
		}

		this.transporter.sendMail(emailToSend, (error) => {
			if (error) {
				console.log(error)
			} else {
				console.log('‘Email enviado com sucesso.’')
			}
		})
	}
}

module.exports = EmailSender
