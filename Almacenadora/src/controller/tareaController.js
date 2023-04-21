'use strict'

const Task = require("../model/taskModel")
const User = require("../model/userModel")

//------------------------------------create tarea-------------------------------------

const createTask = async(req, res) => {
    const {nameTask, description, startDate, dateFinish} = req.body
    try{
        const task = await Task.findOne({nameTask});
        if(task){
            return res.status(410).json({
                msg: "Ya existe una tarea registrada con este nombre",
                ok: false,
                tarea: task,
            });
        }
        const newTask = await Task.create({nameTask, description, startDate, dateFinish});

        User.task = newTask._id
        await User.task.save()

        res.status(200).send({
            ok: true,
            msg: `${nameTask} se creo de forma correcta`,
            tarea: newTask
        })
    }catch(err){
        console.log(err)
    }
}

module.exports = {
    createTask
}
