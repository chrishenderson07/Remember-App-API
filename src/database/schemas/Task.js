const mongoose = require('mongoose')
const { Schema } = mongoose

//Define which fields you need for Tasks
const Task = new Schema({
	name: {
		type: String,
		required: true,
	},
	date: {
		type: String,
		default: new Date().toLocaleDateString(),
	},
	frequency: {
		type: Number,
		required: true,
	},
	lastNotificationTime: {
		type: Date,
		default: new Date(),
	},
})

module.exports = mongoose.model('Task', Task)
