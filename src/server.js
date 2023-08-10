const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb://localhost:27017/rememberApp')

app.use(express.json())

app.use(routes)

app.listen(3000, () => {
	console.log(`Server is running on port 3333🎸`)
})
