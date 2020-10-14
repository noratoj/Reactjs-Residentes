import React, { useState, useEffect } from '../Reactjs-Residentes-1/src/react'
import axios from '../Reactjs-Residentes-1/src/axios'
import ListResFloor from './ListResFloor';
import { gettoken } from '../funciones/tokens'

var token = gettoken()


const ListFloor = (props) => {

    const [results, setResults] = useState([])
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');
    const url = (props.match.url);

    useEffect (() => {
        axios.get(`http://127.0.0.1:3000/api/vecinos${url}`, { headers: {"x-access-token" : `${token}`} })
        .then(res => {
            const data = res.data.data;
            setResults(data);
            setLoad(true);
        })
        .catch(err => {
            setLoad(true);
            setError(err);
        });

    }, [url])

    if (error.response){
        console.log(error.response.data)
      }
    
    if (load) {

        return (
            <ListResFloor results = { results } />
            
        )
     } else {
        return (
            <div>
                Loading...
            </div>
        );
    }

}

export default ListFloor
