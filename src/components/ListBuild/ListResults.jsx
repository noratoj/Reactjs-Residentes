/* recorre el map.result para geerar el listado de las torres o edificios. Sino tiene imagen asignada, se le asigna edifSA.png. Número de habitantes, nombre del edif o torre  */
import React, {Fragment} from 'react'
import { Grid } from '@material-ui/core'
import ListItem from './ListItem'

const ListResults = ({results}) => {

    var imagen_var =""
    return (
        <Fragment>            
            <h1>Lista de Torres/Edificios</h1>
             <Grid container spacing= { 2 } justify = "center" >
                {results.map(( result, index)  => {                    
                    if (result.imagen) {
                        imagen_var=result.imagen
                    } else {
                        imagen_var="edifSA.png"
                    }
                    var imageName2 = require("../Images2/"+imagen_var)    
                    return <ListItem description={result.descripcion} image={imageName2}  total={result.nro_hab} name={result.id} key={index}/>            
                })}
            </Grid>
        </Fragment>
    )
}

export default ListResults
