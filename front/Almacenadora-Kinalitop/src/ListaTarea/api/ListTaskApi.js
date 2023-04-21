import axios from "axios";
const URL = "https://localhost:3006/api/";

export const ListTaskApi = async() => {
    try{
        const {data:{users}} = await axios.get(`${URL}read-user`);
        return users;
    }catch(error){
        throw new Error(error);
    }
}