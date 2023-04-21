const URL ="http://localhost:3000/api/"

// listar 
export const listTareaApi = async ()=>{
    try{
        const{data:{list}}= await axios.get(`${URL}read-listtarea`)
        console.log(list);
        return list;
    }catch(erro){
        throw new Error (erro);
    }
};

