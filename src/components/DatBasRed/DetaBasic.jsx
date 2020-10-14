import React, { useState, useEffect } from '../Reactjs-Residentes-1/src/react'
import axios from '../Reactjs-Residentes-1/src/axios'
import { Link } from '../Reactjs-Residentes-1/src/react-router-dom'

import TextField from '../Reactjs-Residentes-1/src/@material-ui/core/TextField';
import { makeStyles } from '../Reactjs-Residentes-1/src/@material-ui/core/styles';
import InputLabel from '../Reactjs-Residentes-1/src/@material-ui/core/InputLabel';
import MenuItem from '../Reactjs-Residentes-1/src/@material-ui/core/MenuItem';
//import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '../Reactjs-Residentes-1/src/@material-ui/core/FormControl';
import Select from '../Reactjs-Residentes-1/src/@material-ui/core/Select';
import Button from '../Reactjs-Residentes-1/src/@material-ui/core/Button';
//import ButtonGroup from '@material-ui/core/ButtonGroup';
import Radio from '../Reactjs-Residentes-1/src/@material-ui/core/Radio';
import RadioGroup from '../Reactjs-Residentes-1/src/@material-ui/core/RadioGroup';
import FormControlLabel from '../Reactjs-Residentes-1/src/@material-ui/core/FormControlLabel';
import FormLabel from '../Reactjs-Residentes-1/src/@material-ui/core/FormLabel';
import { Alert, AlertTitle } from '../Reactjs-Residentes-1/src/@material-ui/lab';

import GroupFam from './GroupFam';

import { gettoken } from '../funciones/tokens'

var token = gettoken()

const style = {
  background: '#3700B3',
  padding: '5px'
};

const useStyles2 = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
      background: '#F6F6F6 !important',

      //opacity: 0

    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
      background: '#F6F6F6 !important',
      fontSize: '14px'    

    },
  },  
}));

export default function Detabasic( { results, handleInputChange, ejecutarUpdate } ) {

  const classes = useStyles();
  const classes2 = useStyles2();

   const [grupo, setGrupo] = useState([])
  const [ready, setReady] = useState(false);
  const [error, setError] = useState('');
   

  const [torres, setTorre] = useState([])
  const [pisos, setPiso] = useState([])
  const [miembros, setMiembro] = useState([])


  const baseUrl = "http://127.0.0.1:3000"
  const grupoId = results.grupo_fam;
  const url = baseUrl+"/api/vecinos/grupo/"+grupoId

   useEffect (() => {
    
     axios.get(url, { headers: {"x-access-token" : `${token}`} } )
    .then(res => {
        const data = res.data.data;
        setGrupo(data);
        setReady(true);
    })
    .catch(err => {
        setReady(true);
        setError(err);
    });
 
    axios.get("http://127.0.0.1:3000/api/torres/list", { headers: {"x-access-token" : `${token}`} }
    )
    .then(res => {
        const data = res.data.data;
        setTorre(data);
    })
    .catch(err => {
        setError(err);
    });

    axios.get("http://127.0.0.1:3000/api/pisos/list", { headers: {"x-access-token" : `${token}`} }
    )
    .then(res => {
        const data = res.data.data;
        setPiso(data);
    })
    .catch(err => {
        setError(err);
    });

    axios.get("http://127.0.0.1:3000/api/miembros/list", { headers: {"x-access-token" : `${token}`} }
    )
    .then(res => {
        const data = res.data.data;
        setMiembro(data);
    })
    .catch(err => {
        setError(err);
    });

}, [url])

  if (error){
    console.log("error")
  }

  if (ready){
    console.log(" ")
  }

  return (
    
    <form className={classes.root} noValidate autoComplete="off">

       <div id = "error" style={{ display: 'none' }} >
       <Alert id="errmes" variant="filled" severity="error">
        <AlertTitle>Error</AlertTitle>
          Se presentaron errores. Por favor, revisar
        </Alert>
      </div>
      <div id="sastife" style={{ display: 'none' }}>
        <Alert variant="filled" severity="success">
          Se guardo satisfactoriamente. Gracias
        </Alert>
      </div>

      <div id="actual" style={{float:'left', width:450, border:'1px solid red'}}>
      <h4>{"Datos Básicos"}</h4>            


        <TextField
          id="nro_cedula"
          label="Nro de Cédula"          
          name = "nro_cedula" 
          value={results.nro_cedula}
          onChange={handleInputChange}
          helperText="id o cédula de identidad"
          inputProps={{style: {fontSize: 14}}} // font size of input text
          InputLabelProps={{style: {fontSize: 14}}} // font size of input label          
        />
        <TextField
          id="correo_elec"
          label="Correo Electrónico"          
          value={results.correo_elec}
          type="email"
          name="correo_elec"
          onChange={handleInputChange}
          helperText="Correo electrónico..."
          inputProps={{style: {fontSize: 14}}} // font size of input text
          //maxLength: 10,
          InputLabelProps={{style: {fontSize: 14}}} // font size of input label          

        />
        <TextField
          required
          id="nombre1"
          label="1er Nombre"          
          value={results.nombre1}
          name="nombre1"
          onChange={handleInputChange}
          helperText={"1er Nombre"}
          inputProps={{style: {fontSize: 14}}} // font size of input text
          InputLabelProps={{style: {fontSize: 14}}} // font size of input label          
        />
        <TextField
          id="nombre_2"
          label="2do Nombre"          
          value={results.nombre_2}
          name="nombre_2"
          onChange={handleInputChange}
          helperText="Segundo nombre (sí lo tiene)"
          inputProps={{style: {fontSize: 14}}} // font size of input text
          InputLabelProps={{style: {fontSize: 14}}} // font size of input label          

        />

        <TextField
            required
            id="apellido_1"
            label="1er Apellido"          
            value={results.apellido_1}
            name="apellido_1"
            onChange={handleInputChange}
              helperText="Primer apellido"
            inputProps={{style: {fontSize: 14}}} // font size of input text
            InputLabelProps={{style: {fontSize: 14}}} // font size of input label          
  
        />

        <TextField
            id="apellido_2"
            label="2do Apellido"          
            value={results.apellido_2}
            name="apellido_2"
            onChange={handleInputChange}  
            helperText="Segundo apellido"
            inputProps={{style: {fontSize: 14}}} // font size of input text
            InputLabelProps={{style: {fontSize: 14}}} // font size of input label          
  
        />

        <TextField
            id="telefono_1"
            label="Nro de Teléfono 1"
            value={results.telefono_1}
            name="telefono_1"
            onChange={handleInputChange}  
            helperText="Primer número de teléfono"
            inputProps={{style: {fontSize: 14}}} // font size of input text
            InputLabelProps={{style: {fontSize: 14}}} // font size of input label          
  
        />


        <TextField
            id="telefono_2"
            label="Nro de Teléfono 2"
            value={results.telefono_2}
            name="telefono_2"
            onChange={handleInputChange}  
            helperText="Segundo número de teléfono"
            inputProps={{style: {fontSize: 14}}} // font size of input text
            InputLabelProps={{style: {fontSize: 14}}} // font size of input label          
  
        />

        <TextField
            id="fecha_nac"
            label="Fecha Nacimieno"
            type="date"
            value={results.fecha_nac}
            name="fecha_nac"
            onChange={handleInputChange}  
            helperText="Fecha en DD/MM/AAAA"
            inputProps={{style: {fontSize: 14}}} // font size of input text
            InputLabelProps={{style: {fontSize: 14}}} // font size of input label          
            />

        <TextField
            id="profesion"
            label="Profesión u Oficio"
            value={results.profesion}
            name="profesion"
            onChange={handleInputChange}  
            helperText="Ocupación desempeñada"
            inputProps={{style: {fontSize: 14}}} // font size of input text
            InputLabelProps={{style: {fontSize: 14}}} // font size of input label 
            />

            <FormControl component="fieldset">
              <FormLabel component="legend">Sexo</FormLabel>
              <RadioGroup row aria-label="gender" name="sexo" value={results.sexo} onChange={handleInputChange}>
                <FormControlLabel value="F" control={<Radio />} label="Femenino" />
                <FormControlLabel value="M" control={<Radio />} label="Masculino" />
                <FormControlLabel value="O" control={<Radio />} label="Otro" />
              </RadioGroup>
            </FormControl>


      </div>
      <div style={{float:'right', width:480}}>
      <h4 style={{align:'center'}}>{"Ubicación: Edif, Piso, Apto"}</h4>            
        <FormControl className={classes2.formControl}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
            Torre / Edificio
            </InputLabel>
            <Select
            labelId="demo-simple-select-placeholder-label-label"
            id="demo-simple-select-placeholder-label"
            value={results.id_torre}
            //size="small"
            name="id_torre"
            onChange={handleInputChange}
            displayEmpty
            className={classes2.selectEmpty}>
            {torres.map(row => (
                <MenuItem key={row.id} value={row.id} >{row.descripcion}</MenuItem>
            ))}
            </Select>
{/*             <FormHelperText>Label + placeholder</FormHelperText> */}
        </FormControl>

        <FormControl className={classes2.formControl}>
            <InputLabel shrink id="id_piso">
            Piso / Ubicación
            </InputLabel>
            <Select
            labelId="id_piso"
            id="id_piso_1"
            value={results.id_piso}
            name="id_piso"
            onChange={handleInputChange}
            displayEmpty
            className={classes2.selectEmpty}>
            {pisos.map(row => (
                <MenuItem key={row.id} value={row.id}>{row.descripcion}</MenuItem>
            ))}
            </Select>
{/*             <FormHelperText>Label + placeholder</FormHelperText> */}
        </FormControl>

        <div>

        <FormControl className={classes2.formControl}>
            <InputLabel shrink id="id_rol">
            Rol dentro del Hogar
            </InputLabel>
            <Select
            labelId="id_rol"
            id="id_rol_1"
            value={results.id_miembro}
            name="id_miembro"
            onChange={handleInputChange}
            displayEmpty
            className={classes2.selectEmpty}>
            {miembros.map(row => (
                <MenuItem key={row.id} value={row.id}>{row.descripcion}</MenuItem>
            ))}
            </Select>
{/*             <FormHelperText>Label + placeholder</FormHelperText> */}
        </FormControl>


        <TextField
            InputProps={{
              readOnly: true,
            }}            
            id="idtot"
            label="Nro de personas del Hogar"
            value={grupo.length}
        />


        </div>

        <div style={{clear:'both'}}>
          {/* Agregar grupo familiar - Componente */}
            <FormControl className={classes2.formControl}>
              <GroupFam grupo={grupo}/>           
            </FormControl>
            
            <FormControl className={classes2.formControl}>

            <div id="actual" style={{display: 'flex', justifyContent : 'right', alignItem: 'center', width:950}}> 
                <Button  style= {style} onClick={(e)=>ejecutarUpdate(e)}>Grabar</Button>
                <Link to={`/nuevo/${results.id}`}>
                <Button style= {style}>Agregar nuevo Integrante</Button>
                  {/* <button type="button" className="btn btn-info">Button</button> */}
                </Link>                
                <Button style= {style} onClick={()=> window.history.go(-1)}>Regresar</Button>
              </div>
          </FormControl>
      </div>


      </div>

    </form>
  );
}
