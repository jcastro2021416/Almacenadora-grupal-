import axios from "axios";
const URL = "https://localhost:3006/api/";

export const ListTaskApi = async() => {
    try{
        const {data:{task}} = await axios.get(`${URL}read-task`);
        return task;
    }catch(error){
        throw new Error(error);
    }
}