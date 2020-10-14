/* Login con el correo electrónico/email más su contraseña/password */
import React, { useState } from '../Reactjs-Residentes-1/src/react'
import axios from '../Reactjs-Residentes-1/src/axios'
import LoginDatos from "../Reactjs-Residentes-1/src/components/Login/LoginDatos"

const Login = () => {

    const [logins, setResults] = useState([])
    const [error, setError] = useState('');

    //función para permitir validar los campos: corre_elec
    const handleValidation = () => {

         var var_name="";
         const campos = logins;
         var exito=true;
         if (campos.length===0) {
          console.log("pase") 
          exito=false;
          return exito
         }
         
         
        Object.keys(campos).map(function(key, index) {
          var_name=key+ "-helper-text";
          
          switch (key){
            case 'correo_elec':                
              document.getElementById(var_name).innerHTML = "";
              document.getElementById(var_name).style.color = "black";       

              if (campos.correo_elec!==""){
                
                var arroba = campos.correo_elec.indexOf("@");
                var punto =  campos.correo_elec.lastIndexOf(".");
                if (arroba < 1 || ( punto - arroba < 2 )){
                  document.getElementById(var_name).innerHTML = "Dirección de email inválido";
                  document.getElementById(var_name).style.color = "red";
                  exito= false
                }  
              } else {
                  document.getElementById(var_name).innerHTML = "Campo Obligatorio";
                  document.getElementById(var_name).style.color = "red";                
                  exito= false          
              }
             
              break;
            default:

              break;
          }
          return exito
        });        

        return exito

    }
    //Además, las mayúsculas suelen ser poco amigables visualmente, no en vano se utilizan en los chats para vociferar o gritar, y en por ende lo más recomendable es utilizar las minúsculas.(toUpperCase)
    const handleInputChange = (event) => {
        
          setResults({
            ...logins,
            [event.target.name] : event.target.value
          
          
        })
    }

    const ocultar = () => {
      document.getElementById("sastife").style.display =  'none';
    }
 
    const ocultarerror = () => {
      document.getElementById("error").style.display =  'none';
    }

    const sendUpdate = (event) => {
      event.preventDefault();
      //validar que el correo es el correcto.
      //Sí es falso, no permitir grabar
      var Validado = handleValidation()
      
      //  get parameter id
      //  obtener el ID para realizar el UPDATE
      if (Validado)
      {
        // url de backend
        const baseUrl = "http://127.0.0.1:3000/api/auth/login"
        // parametros de datospost
        const datapost = {
          correo_elec : logins.correo_elec,
          contrasena: logins.contrasena
        }

        axios.post(baseUrl,datapost)
        .then(response=>{
          if (response) {
            localStorage.setItem('usertoken', JSON.stringify(response.data))
            document.getElementById("sastife").style.display =  'block';
            setTimeout(ocultar,3000);
            
          }
          else {
            document.getElementById("errmes").innerHTML=error.response.data.message
            document.getElementById("error").style.display =  'block';
            //alert("Error 34 "+error)  
            setTimeout(ocultarerror,3000);
          }
        }).catch(error=>{
            setError(error);
            document.getElementById("errmes").innerHTML=error.response.data.message
            document.getElementById("error").style.display =  'block';
            setTimeout(ocultarerror,3000);
            })
        
      } else {
        document.getElementById("errmes").innerHTML="Se presentaron errores. Por favor, revisar campos obligatorios"
        document.getElementById("error").style.display =  'block';
        setTimeout(ocultarerror,3000);
      }  
    }  

  
    return (
      
      <>
  
        <LoginDatos logins = { logins } handleInputChange = { handleInputChange } ejecutarUpdate={sendUpdate} />
        
      </>
    )

}

export default Login