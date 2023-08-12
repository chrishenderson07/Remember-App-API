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
		default: Date.now(),
	},
	frequency: {
		type: Number,
		required: true,
	},
})

module.exports = mongoose.model('Task', Task)
