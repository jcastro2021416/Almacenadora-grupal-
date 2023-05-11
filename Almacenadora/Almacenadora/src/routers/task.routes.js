'use strict'

const {Router} = require('express'); //Contiene metodo http
const { createTask, readTasK, updateTask, deleteTask } = require('../controller/tareaController');
const api = Router();

api.post('/create-task', createTask)
api.get('/read-task', readTasK)
//api.put('/update-task/:id', updateTask)
api.put('/actualizar-tarea/:id', updateTask)
api.delete('/delete-task/:id', deleteTask)

module.exports = api;