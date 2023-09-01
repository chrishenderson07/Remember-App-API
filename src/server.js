require('express-async-errors')
require('dotenv/config')

const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const cors = require('cors')
const schedule = require('./services/notifications')

const app = express()
const PORT = process.env.PORT || 3000

mongoose.connect('mongodb://localhost:27017/rememberApp')

app.use(cors())
app.use(express.json())

app.use(routes)
schedule()
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
