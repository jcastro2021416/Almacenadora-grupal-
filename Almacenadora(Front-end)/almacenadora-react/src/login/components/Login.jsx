import React, { useState , useEffect } from 'react'
import { listAppLogin } from "../../login/api/AppLogin.js";

// El console hace que se exporte el api
// console.log(listUserApi());

export const UserTable = ()=>{
    const [login,setLogin] = useState([]);

    const reload = async()=>{
        const result = await listAppLogin();
        setLogin(result);
    };

    // useeffectSnippet para que me de la esctrura
    useEffect(() => {
      reload();
        console.log(login)
    },[]);
    
    return(
        <>
        <h1 className = "text-decoration-underline">Almacenadora</h1>
        <div>
            <table className="table table-dark table-borderless">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre de Usuario</th>
                        <th>Correo Electonico</th>
                    </tr>
                </thead>
                
                <tbody>
                    
                </tbody>
            </table>
        </div>
    </>
    )
};