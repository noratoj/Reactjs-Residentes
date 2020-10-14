import React from "react";
import { Link } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Grid } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    "& > *": {
      borderStyle: "solid",
      border: 1,
      padding: 2,
      "&:hover": {
        backgroundColor: "green",
        color: "black",
      }
     
    }
    
  },

   tableRow: {

    "&:hover": {
      foregroundcolor: "yellow !important",
      backgroundColor: "green !important",

    }
  } 

});

export default function ListDetalle( {results } ) {
  const classes = useStyles();

  return (

    <Grid container spacing= { 2 } justify = "center" >
    <h3>Listado de Residentes por la Torre: xxxx, Piso xxxxx </h3>  
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow className={classes.root}>
            <TableCell align="center">
              Nro de Cédula
            </TableCell>
            <TableCell align="left">Nombres</TableCell>
            <TableCell align="left">Apellidos</TableCell>
            <TableCell align="left">Piso</TableCell>
            <TableCell align="left">Acción</TableCell>            
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map(row => (
            <TableRow className={classes.root} key={row.id}>
              <TableCell component="th" scope="row">
                {row.nro_cedula}
              </TableCell>
              <TableCell align="left">{row.nombre1}</TableCell>
              <TableCell align="left">{row.apellido_1}</TableCell>
              <TableCell align="left">{row.apto}</TableCell>
              <TableCell>
                        <Link className="btn btn-outline-info "  to={"/edit/"+row.id} >Edit</Link>

                    </TableCell>

              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
  );
}
