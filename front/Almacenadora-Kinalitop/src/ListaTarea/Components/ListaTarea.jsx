import React, {useEffect, useState} from 'react';
import {ListTaskApi} from '../../ListaTarea/api/ListTaskApi';

export const ListaTarea = () => {
     const [users, setUsers] = useState([]);

     const reload = async() => {
         const result = await ListTaskApi();
         setUsers(result);
     }

     useEffect(() =>{
         reload(users);
     }, []);

     return (<>
        <h1 className = "text-decoration-underline">Almacenadora Kinalito</h1>
          <div>
              <table className="table table-dark table-borderless">
                  <thead>
                      <tr>
                          <th>Usuario</th>
                          <th>Correo</th>
                          <th>Nombre Tarea</th>
                          <th>Descripcion</th>
                          <th>Fecha de Inicio</th>
                          <th>Fecha de Finalización</th>
                          <th>OpcioneS</th>
                      </tr>
                  </thead>
                  
                  <tbody>
                      {listaTarea.map(userActual=>{
                          return(
                          <tr key={userActual._id}>
                              <td>{userActual._nameUser}</td>
                              <td>{userActual._email}</td>
                              <td>{userActual._nameTask}</td>
                              <td>{userActual._description}</td>
                              <td>{userActual._dateStart}</td>
                              <td>{userActual._dateFinish}</td>
                              <td><button className="btn btn-danger margin-button">Eliminar</button>
                              <button className="btn btn-warning margin-button">Agregar</button>
                              </td>
                          </tr>
                          )
                      })}
                  </tbody>
              </table>
          </div>

     </>);
}