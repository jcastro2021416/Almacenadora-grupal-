'use strict'

const User = require("../model/AlmacenadoraModel")

//------------------------------------create tarea-------------------------------------

const createTask = async(req, res)=> {
    const {nameUser, email} = req.body
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

module.exports = {
    createTask
}
