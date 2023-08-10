const mongoose = require('mongoose')
const { Schema } = mongoose

//Define which fields you need for Tasks
const Task = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
})

module.exports = mongoose.model('Task', Task)
