/* NO se ha utilizado. La finalidad es poder ejecutar cualquier acción y verificar, por medio del TOKEN, sí esta "logueado" el usuario y SÍ LO ESTA: que el token no este vencido ya. */

import React, { useState, useEffect } from '../Reactjs-Residentes-1/src/react'
import { Redirect } from '../Reactjs-Residentes-1/src/react-router-dom'
import axios from '../Reactjs-Residentes-1/src/axios'
import { gettoken } from './funciones/tokens'

var token = gettoken()

function Proteccion(props) {
         
    const [load, setLoad] = useState(false);

    useEffect (() => {
    
        async function cargarusuario(){
            //Sino tiene token, entonces realizar el LOGIN
            if (!token){
                setLoad(true);
                return;    
            }            

            try {
                await axios.get("http://127.0.0.1:3000/api/vecinos/torres", { headers: {"x-access-token" : `${token}`} })
                .then(res => {
                    setLoad(true);
                })
                .catch(err => {
                    //Si el error es 401, realizar el LOGIN
                    setLoad(false);
                });
            } catch (error) {
                console.log(error)
            }
        }
        
        cargarusuario()
    }, [])

    return  <div> {load ? <props.component /> : <Redirect to='/login' ></Redirect>} </div>
}

export default Proteccion
