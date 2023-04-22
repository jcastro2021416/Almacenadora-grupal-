const jwt = require('jsonwebtoken')/*Se utiliza para crear, firmar y verificar tokens de autenticacion, se hace disponible
la funcionalidad en el codigo, lo que permite utilizar las funciones de la bilioteca para generar y verificar tokens de autenticacion
en el servidor o en el cliente*/
require('dotenv').config(); //Carga las variables de entorno desde un archivo .env
const secret = process.env.SECRET_KEY; //Obtiene el valor de la variable de entorno SECRET_KEY y lo asignamos a secret

const generateJWT = async(uId, name_company, email) =>{ //Definicion de funcion asincrona para generar el token
    const payload = {uId, name_company, email}; //Toma el valor de las variables que se pasan como parametros de la funcion. 
    //Almacena informacion que se codificara en un token JWT
    try{
        const token = await jwt.sign(payload, secret,{ //Instruccion de expiracion del tokens
            expiresIn: '1h'
        });
        return token; //Retornamos el token
    }catch(err){
        throw new Error(err + "Error al generar el token")
    }
};

module.exports = {generateJWT} //Exportacion del token



