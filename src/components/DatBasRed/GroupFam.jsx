import React from 'react'

//import axios from 'axios'
//const [grupoFam, setGrupoFam] = useState([])
//const [readyFam, setReadyFam] = useState(false);
//const [errorFam, setErrorFam] = useState('');
//const baseUrl = "http://127.0.0.1:3000"
 

const GroupFam = (grupo) => {

    const grupo_2 = grupo.grupo

     //const url = baseUrl+"/vecinos/grupo/"+grupo

/*     useEffect (() => {
    
        axios.get(url)
        .then(res => {
            const data = res.data.data;
            setGrupo(data);
            setReady(true);
        })
        .catch(err => {
            setReady(true);
            setError(err);
        });
        
    }, [url])
 */     

    return (
        <div>
            Grupo Familiar
            <ul>
                {grupo_2.map(row => (
                <li key={row.id}>
                    {row.nro_cedula} -- {row.nombre1} -- {row.apellido_1}
                </li>
                ))
              }
            </ul>
 
        </div>
    )
}

export default GroupFam
