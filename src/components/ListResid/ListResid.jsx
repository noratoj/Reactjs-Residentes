import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ListDetalle from './ListDetalle';
import { gettoken } from '../funciones/tokens'

var token = gettoken()

const ListResid = (props) => {

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

    if (error){
        console.log("error")
      }
    

    if (load) {

        return (
            <ListDetalle results = { results } />
            
        )
     } else {
        return (
            <div>
                Loading...
            </div>
        );
    }

}

export default ListResid
