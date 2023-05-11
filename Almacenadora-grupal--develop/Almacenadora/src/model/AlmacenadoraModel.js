'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema


const AlmacenadoraSchema =  Schema({
    nameUser: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true
    },
    nameTask: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    dateStart:{
        type: String,
        required: true,
    },
    dateFinish: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('User', AlmacenadoraSchema)

