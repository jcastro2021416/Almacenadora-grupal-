'use strict'

const User = require("../model/AlmacenadoraModel")
const { generateJWT } = require("../helpers/create-jwt");

//------------------------------------create tarea-------------------------------------

const createTask = async(req, res)=> {
    const {nameUser, email, nameTask, description, dateStart, dateFinish} = req.body
    try{
        let usuario = await User.findOne({email});
        if(usuario){
            return res.status(400).send({
                msg: "Un usuario ya esta utilizando este correo",
                ok: false,
                user: usuario,
            });
        }
        usuario = new User(req.body)

        usuario = await usuario.save()

        res.status(210).send({
            msg: `El usuario ${nameUser} se creo de forma exitosa `,
            ok: true,
            user: usuario
        })
    }catch(err){
        console.log(510).send({
            ok: false,
            msg: `No se a podido crear el usuario: ${nameUser}`
        });
    }
}

//----------------------------------------read tarea------------------------------------------

const readTasK = async(req, res) => {
    try{
        const task = await User.find();
        if(!task){
            res.status(401).send({
                msg: 'No hay tareas disponibles'
            });
        }else{
            res.status(401).send({
                task: task
            });
        }
    }catch(err){
        throw new Error(err)
    }
}

//------------------------------------update tarea--------------------------------------------------

const updateTask = async(req, res) => {
    try{
        const id = req.params.id
        const userEdit = {...req.body};

        const userComplete = await User.findByIdAndUpdate(id, userEdit, {new: true});

        if(userComplete){
            return res.status(200).send({
                message: 'Perfil actualizado correctamente', userComplete
            });
        }else{
            res.status(404).send({
                msg: 'Este usuario no existe dentro de la base de datos'
            });
        }
    }catch(err){
        console.log(err)
        throw new Error(err);
    }
}

//-------------------------------------delete tarea------------------------------------------------------

const deleteTask = async(req, res) =>{
    try{
        const userId = req.params.id
        const client = await User.findById(userId)
        if(!client){
            return res.status(404).json({
                msg: `No se encuntra el usuario con la tarea`
            });
        }
        await client.remove();

        res.json({
            msg: `El usuario se elimino de forma correcta`
        })
    }catch(err){
        throw new Error(err)
    }
}

module.exports = {
    createTask,
    readTasK,
    updateTask,
    deleteTask
}
