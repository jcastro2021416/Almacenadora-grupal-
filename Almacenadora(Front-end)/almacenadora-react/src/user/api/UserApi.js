import axios from "axios";

const URL = "http://localhost:3000/api/"


// listar
export const listaUserApi = async()=>{
    try{
        const{data:{user}} = await axios.get(`${URL}read-user`)
        console.log(user);
        return user;
    }catch(error){
        throw new Error (error)

    }
};

export const deleteUserApi = async()=>{
    try{

    }catch(error){
        throw new Error(error)
    }
}