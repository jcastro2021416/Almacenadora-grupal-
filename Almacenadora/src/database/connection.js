'use strict' // modo estricto de JS

require('dotenv').config();  //Se usa para cargar y configurar variables de entorno defidad en el .env
const database = process.env.DATABASE;

const mongoose = require("mongoose"); //mongoose es una biblioteca de JS, que usamos para interactuar con la db
mongoose.set("strictQuery", true); //Esteblecemos que mongoose va  usar el modo de escritura estricta

const connection = async() =>{
    try{
        await mongoose.connect(database);
        console.log("Conexion es exitosa :3")
    }catch(err){
        throw new Error(err)
    }
}

module.exports = {
    connection,
}




















