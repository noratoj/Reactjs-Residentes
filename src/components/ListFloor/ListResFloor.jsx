import React, {Fragment} from '../Reactjs-Residentes-1/src/react'
import ListResItem from './ListResItem'
import { Grid } from '../Reactjs-Residentes-1/src/@material-ui/core'

function ListResFloor ({ results } ) {
    var imagen_var =""
    return(
        <Fragment>            
            
            <h1>Lista de Torres/Edificios por Pisos</h1>
            <Grid container spacing= { 2 } justify = "center" >
                {results.map(( result, index)  => {
                    if (result.imagen) {
                        imagen_var=result.imagen
                    } else {
                        imagen_var="sinasigna.png"
                    }
                    var imageName2 = require("../Images2/"+imagen_var)    

                    return <ListResItem description={result.descripcion} image={imageName2} total={result.nro_hab} name={result.id} torre={result.torre} key={index}/>            
                })}
            </Grid>
        </Fragment>
    );

    
}

export default ListResFloor



