'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchema = new Schema({
    mameTask: { 
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    dateFinish: {
        type: Date,
        required: true,
    },
    taskStatus: {
        type: Boolean,
        default: true
    }
});


module.exports = mongoose.model('Room', TaskSchema)

