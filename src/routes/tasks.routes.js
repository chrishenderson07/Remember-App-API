const { Router } = require('express')

const TasksController = require('../controllers/TasksController')

const tasksRoutes = Router()

const tasksController = new TasksController()

tasksRoutes.post('/', tasksController.create)
tasksRoutes.get('/', tasksController.index)
tasksRoutes.get('/:_id', tasksController.show)
tasksRoutes.put('/:_id', tasksController.update)
tasksRoutes.delete('/:_id', tasksController.delete)

module.exports = tasksRoutes
