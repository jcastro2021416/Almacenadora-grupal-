import axios from "axios";

const URL = "http://localhost:3000/api/"


// Listar ------
export const listAppLogin = async()=>{
    try{
        const {data:{users}}= await axios.get(`${URL}read-App`)
        console.log(users);
        return users;
    }catch(erro){
        throw new Error (erro);
    }
};


export const deleteAppLogin  = async()=>{
    try{

    }catch(erro){
        throw new Error(erro)
    }
};