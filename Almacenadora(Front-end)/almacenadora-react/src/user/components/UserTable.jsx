import React, {useState, useEffect} from "react";
import { listaUserApi } from "../../user/api/UserApi";

export const UserTable =() =>{
    const [user,setUser] = useState([]);

    const relo = async()=>{
        const result = await  listaUserApi();
        setUser(result);
    };

    useEffect(()=>{
        relo();
        console.log(user)

    },[]);
    return(
        <>
        <>
        <h1 className = "text-decoration-underline">Almacenadora</h1>
        <div>
            <table className="table table-dark table-borderless">
                <thead>
                    <tr>
                        <th>Nombre de Usuario</th>
                        <th>Contraseña</th>
                    </tr>
                </thead>
                
                <tbody>
                    {user.map(userActual=>{
                        return(
                        <tr key={userActual._id}>
                            <td>{userActual.username}</td>
                            <td>{userActual.password}</td>                            
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </>
        </>
    )
}