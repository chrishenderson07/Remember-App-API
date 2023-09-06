require('express-async-errors')
require('dotenv/config')

const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const cors = require('cors')
const schedule = require('./services/notifications')

const app = express()
const PORT = process.env.PORT || 3000

const mongoUsername = process.env.MONGODB_USERNAME
const mongoPassword = process.env.MONGODB_PASSWORD
const mongoCluster = process.env.MONGODB_CLUSTER_NAME

mongoose.connect(
	`mongodb+srv://${mongoUsername}:${mongoPassword}@${mongoCluster}.er6tyoo.mongodb.net/?retryWrites=true&w=majority`,
)

app.use(cors())
app.use(express.json())

app.use(routes)
schedule()
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
