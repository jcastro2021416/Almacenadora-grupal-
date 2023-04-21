const {request, response} = require("express"); /*Importa los objetos request y response de la biblioteca 'express' sin tenes que
escribir el nombre completo de las bibliotecas cada vez que se llega a utilizar*/
const { Result } = require("express-validator");
const jwt = require('jsonwebtoken');
const moment = require("moment");
const Empresas = require('../models/empresaModel');

const validateJWT = async(req = request, res = response, next)=>{
    const token = req.header("x-token"); //Los header enviar el token
    //Si no vienen el token
    if(!token){
        return res.status(400).send({
            msg: "No hay token en tu peticion",
        });
    } 
    try{
        //Decodificion de token
        const payload = jwt.decode(token, process.env.SECRET_KEY);//La carga util decodifica se decodifica se almacena en la variable 'payload' como un objeto
        //La informacion se utiliza para autorizar y autenticar a los usuario de la aplicacion
        const empresaEncontrada = await Empresas.findById(payload.uId); //Ira a buscar la empresa por medio del parametro ID y lo almacena en empresaEncontrada
        console.log(empresaEncontrada);
        //verificacion de expiracion de token
        if(payload.exp <= moment().unix()){
            return res.status(401).send({
                msg: "Su token a expirado"
            })
        }
        //Si la empresa ya no existe
        if(!empresaEncontrada){
            return res.status(400).send({
                msg: "El token no es valio - La empresa no existe dentro de la db"
            });
        }
        req.empresas = empresaEncontrada;
        next();
    }catch(err){
        throw new Error(err);
    }
}








