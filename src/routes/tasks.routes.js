const { Router } = require('express')

const TasksController = require('../controllers/TasksController')

const tasksRoutes = Router()

const tasksController = new TasksController()

tasksRoutes.post('/', tasksController.create)
tasksRoutes.get('/', tasksController.index)

module.exports = tasksRoutes
