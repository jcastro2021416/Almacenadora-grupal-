'use strict'

const User = require("../model/userModel")

//------------------------------------create user---------------------------------------

const createUser = async(req, res)=>{
    const {name, lastName, email} = req.body
    try{
        let usuario = await User.findOne({email})
        if(usuario){
            return res.status(400).send({
                msg: "Un usuario ya esta registrado con este apellido"
            });
        }

        usuario = new User(req.body);
        usuario = await usuario.save()

        res.status(210).send({
            msg: `El usuario ${name} se creo de forma correcta`,
            ok: true,
            usuario: usuario,
        });
    }catch(err){
        console.log(err)
        res.status(510).send({
            ok: false,
            msg: `No se a logrado crear el usuario ${name} :)`
        });
    }
}

//-----------------------------------------read usuario-----------------------------------

const readUser = async(req, res) => {
    try{
        const user = await User.find();
        if(!user){
            res.status(410).send({
                msg: `No hay usuarios disponibles`
            });
        }else{
            res.status(200).send({alumnos_obtenidos: user});
        }
    }catch(err){
        throw new Error('Error al listar usuarios');
    }
}

//----------------------------------------update user----------------------------------------------

const updateUser = async(req, res) =>{
    try{
        const id = req.params.id
        const userEdit = {...req.body}
        const userComplete = await User.findByIdAndUpdate(id, userEdit, {email});
        if(userComplete){
            return res.status(200).send({
                msg: `Perfil actualizado correctamente`, userCompletel
            });
        }else{
            res.status(404).send({
                msg: `Este usuario no existe dentro de la dase de datos`
            });
        } 
    }catch(err){
        throw new Error(err)
    }
}

//---------------------------------------delete user---------------------------------------------

const deleteUser = async(req, user) =>{
    try{
        const userId = req.user.id
        const client = await User.findById(userId)
        if(!client){
            return res.status(404).json({
                msg: `El cliente no se encuentra registrado `
            });
        }

        await client.remove();
    
        res.json({
            msg: `El cliente se elimino de forma exitosa`
        })
    }catch(err){

    }
}

//------------------------------------------exportaciones de modulos-------------------------------------------

module.exports = {
    createUser,
    readUser,
    updateUser,
    deleteUser
}


