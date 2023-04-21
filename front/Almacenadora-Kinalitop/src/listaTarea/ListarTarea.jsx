import { listTareaApi } from "../listaTarea/api/ListTareaApi";

export const UserTable = ()=>{
    const [listaTarea,setList] = useState([]);

    const reload = async()=>{
        const result = await listTareaApi();
        setList(result);
    };
    // useeffectSnippet para que me de la esctrura
    useEffect(() => {
        reload();
          console.log(listaTarea)
      },[]);
      
      return(
          <>
          <h1 className = "text-decoration-underline">Almacenadora Kinalito</h1>
          <div>
              <table className="table table-dark table-borderless">
                  <thead>
                      <tr>
                          <th>Nombre de la tarea</th>
                          <th>Descripcion de la tarea</th>
                          <th>Fecha</th>
                          <th>Estado de la tarea</th>
                          <th>Nombre y Apellido</th>
                      </tr>
                  </thead>
                  
                  <tbody>
                      {listaTarea.map(userActual=>{
                          return(
                          <tr key={userActual._}>
                              <td>{userActual._nombretarea}</td>
                              <td>{userActual._descripciontarea}</td>
                              <td>{userActual._fecha}</td>
                              <td>{userActual._estadotarea}</td>
                              <td>{userActual._nombreyapellido}</td>
                              <td><button className="btn btn-danger margin-button">Eliminar</button>
                              <button className="btn btn-warning margin-button">Editar</button>
                              <button className="btn btn-success margin-button">Ver</button>
                              </td>
                              
                          </tr>
                          )
                      })}
                  </tbody>
              </table>
          </div>
      </>
      )
};