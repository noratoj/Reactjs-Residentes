/* Para realizar el listado de las Residencias o Torres del conuunto del condominio*/
import React, { useState, useEffect } from '../Reactjs-Residentes-1/src/react'
import axios from '../Reactjs-Residentes-1/src/axios'
import ListResults from './ListResults'
import { gettoken } from '../funciones/tokens'

var token = gettoken()

const ListBuild = () => {
    
    const [results, setResults] = useState([])
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');

    useEffect (() => {
        //api para el listado de torres en la BD
        axios.get("http://127.0.0.1:3000/api/vecinos/torres", { headers: {"x-access-token" : `${token}`} })
        .then(res => {
            const data = res.data.data;
            setResults(data);
            setLoad(true);
        })
        .catch(err => {
            setLoad(false);
            setError(err);
        });

    }, [])

    if (error.response){
        console.log(error.response.data.message)
      }
    
      //sí es TRUE, envia al componente el resultado
    if (load) {
        return (
            <ListResults results = { results } />
        )
     } else {
        if (!error.response) {
            return (            
                <div>                    
                    Loading...
                </div>
            );
        } else {
            return (            
                
                <div>                    
                    {error.response.data.message}
                    {error.response.status}
                    Llamar al Login
                </div>
            );

        }
    }
}

export default ListBuild
