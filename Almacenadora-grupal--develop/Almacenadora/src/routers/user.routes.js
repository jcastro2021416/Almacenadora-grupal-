'use strict'

const {Router} = require('express'); //Contiene metodo http
const { createUser, readUser, updateUser, deleteUser } = require('../controller/userController');
const api = Router();

api.post('/create-user', createUser)
api.get('/read-user', readUser)
api.put('/update-user', updateUser)
api.delete('/delete-user', deleteUser)

module.exports = api;
