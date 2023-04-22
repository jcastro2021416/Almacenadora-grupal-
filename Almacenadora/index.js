'use strict'
    
const express = require('express'); //La constante express ya viene predifinida
const app = express(); //Nos permite agregar las rutas http
const {connection} = require('./src/database/connection'); //Vamos a traer la constante conexion de la clase database
require('dotenv').config(); //Se usa para cargar y configurar variables de entorno fenidad en el .env
const port = process.env.PORT; //Asignamos la varibale PORT a la constante port
const RouterW = require("../Almacenadora/src/routers/task.routes")
connection();

/*express.urlencode es un middlware que usarmos para analizar solicitudes http
Los Middlware manejan las solicitudes y las respuestas de una aplicacion express*/
app.use(express.urlencoded({extended: false})); 
app.use(express.json());
app.use('/api', RouterW)

app.listen(port, () => {
    console.log(`Chi esta corriendo en el puerto ${port}`)
})

//defaultAdmin(); 
 














