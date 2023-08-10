const { Router } = require('express')

const tasksRoutes = require('./tasks.routes')

const routes = Router()

routes.use('/tasks', tasksRoutes)

module.exports = routes
