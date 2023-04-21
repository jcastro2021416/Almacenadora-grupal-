'use strict'

const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    task: {
        type: Schema.Types.ObjectId,
        ref: 'Works'
    }
});

module.exports = mongoose.model('User', UserSchema)


