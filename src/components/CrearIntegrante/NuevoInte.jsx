import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NuevoInteDet from "components/CrearIntegrante/NuevoInteDet"
import { gettoken } from '../funciones/tokens'

var token = gettoken()


const baseUrl = "http://127.0.0.1:3000"


const DatBasic = (props) => {

/*   nrocedula : results.nro_cedula,
  name1: results.nombre1,
  name2: results.nombre_2,
  apell1: results.apellido_1,
  apell2: results.apellido_2,
  idmiembro: results.id_miembro,
  phone1 : results.telefono_1,
  phone2 : results.telefono_2,
  email : results.correo_elec,
  id_torre : results.id_torre,
  id_piso : results.id_piso,
  apto: results.apto,
  fecha_nac: results.fecha_nac,
  profesion: results.profesion,
  sexo: results.sexo
 */
    
    const [results, setResults] = useState([])
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');


    let userId = props.match.params.employeeId;
    const url = baseUrl+"/api/vecinos/get/"+userId


    const Campo_Vacio= (campo, var_name_1) => {
      if (campo.length===0)
      {
        document.getElementById(var_name_1).innerHTML = "Campo Obligatorio";
        document.getElementById(var_name_1).style.color = "red";                
        return false
      } else 
      {
        return true
      }  
    }

    const MinMax_Caracteres = (min, max, var_name_1, minMaxlength_1) => {

      if (minMaxlength_1 <=min || minMaxlength_1 >=max){
        
        document.getElementById(var_name_1).innerHTML = "Campo debe tener entre " +(min+1)+" - "+max+" caracteres ";
        document.getElementById(var_name_1).style.color = "red";
        return false
      } else {
        return true
      }

    }

    const Solo_Caracteres = (campo, var_name_1) => {
      //VALIDAR Q TENGA NADA MÁS CARACTERES                           
      var regex = new RegExp("^[a-zñ A-ZÑ]+$");
      //var regex = new RegExp(/[A-Za-z]+/g);
      if (!regex.test(campo)){
        document.getElementById(var_name_1).innerHTML = "Se aceptan sólo caracteres alfabético ";
        document.getElementById(var_name_1).style.color = "red";
        return false
      } else {
        return true
      }
    }

    const Solo_Numeros = (campo, var_name_1) => {
      //VALIDAR Q TENGA NADA MÁS NUMEROS                           
      var regex = new RegExp("^[0-9]+$");
      if (!regex.test(campo)){
        document.getElementById(var_name_1).innerHTML = "Se aceptan sólo caracteres númericos ";
        document.getElementById(var_name_1).style.color = "red";
        return false
      } else {
        return true
      }
    }


    //función para permitir validar los campos: nombre1, apellido_1, corre_elec,

    const handleValidation = () => {

         var var_name="";
         const campos = results;
         var exito=true;

        Object.keys(campos).map(function(key, index) {
          var_name=key+ "-helper-text";
          var Vacio = ""
          var minMaxlength = 0
          var campo_esp=""
                     
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
                  exito=false
                }  
              }
             
              break;
            case 'nombre1':
            case 'apellido_1':  
              
              document.getElementById(var_name).innerHTML = "";
              document.getElementById(var_name).style.color = "black";       
              //VALIDAR Q NO SEA BLANCO

              if (key==='nombre1'){
                campo_esp=campos.nombre1
              }              
              if (key==='apellido_1'){
                campo_esp=campos.apellido_1
              }              
              Vacio = Campo_Vacio(campo_esp, var_name)
              minMaxlength = campo_esp.length;

              if (Vacio) {
                //VALIDAR Q TENGA MAS DE 3 CARACTERES Y MENOS DE 35
                var MinMax = MinMax_Caracteres(2,35,var_name,minMaxlength)
                if (MinMax) {
                  //VALIDAR Q sean solo caracteres
                  var Solo_Carac = Solo_Caracteres(campo_esp, var_name)
                  if (!Solo_Carac) {
                    exito=false
                  }
                } else {
                  exito=false
                }
              } else {
                exito=false;
              }
              break;
              case 'nombre_2':
              case 'apellido_2':  
                  
                  document.getElementById(var_name).innerHTML = "";
                  document.getElementById(var_name).style.color = "black";       
                  //VALIDAR Q NO SEA BLANCO    
                  if (key==='nombre_2'){
                    campo_esp=campos.nombre_2
                  }              
                  if (key==='apellido_2'){
                    campo_esp=campos.apellido_2
                  }              
                  minMaxlength = campo_esp.length;

                  if (campo_esp !== "") {
                    //VALIDAR Q TENGA MAS DE 3 CARACTERES Y MENOS DE 35
                    var MinMax_3 = MinMax_Caracteres(2,35,var_name,minMaxlength)
                    if (MinMax_3) {
                      //VALIDAR Q sean solo caracteres
                      var Solo_Carac_3 = Solo_Caracteres(campo_esp, var_name)
                      if (!Solo_Carac_3) {
                        exito=false
                      }
                    } else {
                      exito=false
                    }
                  } 
                  break;
    
            case 'telefono_1':
            case 'telefono_2':
            case 'nro_cedula':  
              document.getElementById(var_name).innerHTML = "";
              document.getElementById(var_name).style.color = "black";       
              var min_2=9
              var max_2=15
              if (key==='telefono_1'){
                campo_esp=campos.telefono_1
              }              
              if (key==='telefono_2'){
                campo_esp=campos.telefono_2
              }              
              if (key==='nro_cedula'){
                campo_esp=campos.nro_cedula
                min_2=6
              }              

              if (campo_esp!==""){
                minMaxlength = campo_esp.length;
                //VALIDAR Q TENGA MAS DE 3 CARACTERES Y MENOS DE 35
                var MinMax_1 = MinMax_Caracteres(min_2,max_2,var_name,minMaxlength)
                if (MinMax_1) {
                  //VALIDAR Q sean solo caracteres
                  var Solo_Numero = Solo_Numeros(campo_esp, var_name)
                  if (!Solo_Numero) {
                    exito=false
                  }
                } else {
                  exito=false
                }
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
            ...results,
            [event.target.name] : event.target.value
          
          
        })
    }

    const ocultar = () => {
      document.getElementById("sastife").style.display =  'none';
    }
 
    const ocultarerror = () => {
      document.getElementById("error").style.display =  'none';
    }

    const sendCreate = (event) => {
      event.preventDefault();
      //validar que los datos están correctamente llenos.
      //Sí es falso, no permitir grabar
      var Validado = handleValidation()
      
      //  get parameter id
      //  obtener el ID para realizar el UPDATE
      if (Validado)
      {
        // url de backend
        const baseUrl = "http://127.0.0.1:3000/api/vecinos/create"
        // parametros de datos post
        const datapost = {
          nro_cedula : results.nro_cedula,
          nombre1: results.nombre1,
          nombre_2: results.nombre_2,
          apellido_1: results.apellido_1,
          apellido_2: results.apellido_2,
          id_miembro: results.id_miembro,
          telefono_1 : results.telefono_1,
          telefono_2 : results.telefono_2,
          correo_elec : results.correo_elec,
          id_torre : results.id_torre,
          id_piso : results.id_piso,
          apto: results.apto,
          fecha_nac: results.fecha_nac,
          profesion: results.profesion,
          sexo: results.sexo,
          grupo_fam: results.grupo_fam,
        }
        axios.post(baseUrl,datapost, { headers: {"x-access-token" : `${token}`} })
        .then(response=>{
          if (response.data.success===true) {
            
            document.getElementById("sastife").style.display =  'block';
            setTimeout(ocultar,3000);
          }
          else {
            document.getElementById("error").style.display =  'block';
            setTimeout(ocultarerror,3000);
          }
        }).catch(error=>{
          alert("Error 34 "+error)
        })
        
      } else {
        document.getElementById("error").style.display =  'block';
        setTimeout(ocultarerror,3000);
      }  
    }  

    useEffect (() => {
        
        axios.get(url, { headers: {"x-access-token" : `${token}`} })
        .then(res => {
            const data = res.data.data[0];
            data.nro_cedula="";
            data.nombre1="";
            data.nombre_2="";
            data.apellido_1="";
            data.apellido_2="";
            data.telefono_1="";
            data.telefono_2="";
            data.correo_elec="";
            data.id_miembro=0;
            data.fecha_nac=0;
            data.profesion="";  
            setResults(data);
            setLoad(true);
        })
        .catch(err => {
            setLoad(true);
            setError(err);
        });

    }, [url])

    if (error.response){
      console.log(error.response.data.message)      
    }


    if (load) {

        return (
          <>
            <NuevoInteDet results = { results } handleInputChange = { handleInputChange } ejecutarCreate={sendCreate} />
          </>
        )
     } else {
        return (
            <div>
                Loading...
            </div>
        );
    }
}

export default DatBasic