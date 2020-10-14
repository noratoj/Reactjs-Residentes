import React from '../Reactjs-Residentes-1/src/react'

import TextField from '../Reactjs-Residentes-1/src/@material-ui/core/TextField';
import { makeStyles } from '../Reactjs-Residentes-1/src/@material-ui/core/styles';
import Button from '../Reactjs-Residentes-1/src/@material-ui/core/Button';
import { Alert, AlertTitle } from '../Reactjs-Residentes-1/src/@material-ui/lab';


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

export default function Detabasic( { logins, handleInputChange, ejecutarUpdate } ) {

  const classes = useStyles();

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

      <div id="actual" style={{display: 'flex', justifyContent : 'center', width:950}}>
          <h4>{"Autenticar"}</h4>            
      </div>

      <div id="actual" style={{display: 'flex', justifyContent : 'center', width:950}}>



            <TextField
              id="correo_elec"
              label="Correo Electrónico"          
              value={logins.correo_elec}
              type="email"
              name="correo_elec"
              onChange={handleInputChange}
              helperText="Correo electrónico..."
              inputProps={{style: {fontSize: 14}}} // font size of input text
              //maxLength: 10,
              InputLabelProps={{style: {fontSize: 14}}} // font size of input label          

            />
      </div>
      <div id="actual" style={{display: 'flex', justifyContent : 'center', width:950}}> 

            <TextField
              required
              id="contrasena"
              type="password"
              label="Contraseña"          
              value={logins.contrasena}
              name="contrasena"
              onChange={handleInputChange}
              helperText={"Contraseña/Password"}
              inputProps={{style: {fontSize: 14}}} // font size of input text
              InputLabelProps={{style: {fontSize: 14}}} // font size of input label          
            />
        </div>
        <div id="actual" style={{display: 'flex', justifyContent : 'center', alignItem: 'center', width:950}}> 
                <Button onClick={(e)=>ejecutarUpdate(e)}>Login</Button>
                <Button >Registrase</Button>
          
        </div>
    </form>
  );
}
