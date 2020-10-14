import React from '../Reactjs-Residentes-1/src/react'
import { Link } from '../Reactjs-Residentes-1/src/react-router-dom'
import { Card, CardMedia, CardContent, Typography } from '../Reactjs-Residentes-1/src/@material-ui/core'
import { withStyles } from '../Reactjs-Residentes-1/src/@material-ui/core/styles'

const Style = {
    height: 132,
    width: 260
  };


const ListResItem = ({ description, classes, image, total, name, torre }) => {

    return (
        <Link to={`/detpiso/${torre}/${name}`} className='Gif-link'>
        <Card className={ classes.item }>
        <CardMedia style={Style} className={ classes.media } src= {image} component="img" title="Piso"/>

            <CardContent className={ classes.cardcontent }>
                
                    <Typography variant="h6" component = "p" > Piso: { description } </Typography>
                
            </CardContent>
            <CardContent  className={ classes.cardcontent }>
                <Typography variant="h6" component = "p"> Nro Habitantes:  { total } </Typography>
            </CardContent>

        </Card>
        </Link>


    )
} 

export default withStyles({
    item: {
        minWidth: "170px",
        margin: "1em",
        textAlign: "center",
        background: "#073b4c",
        color: "white",
        boxSizing: "border-box"
    },
    media:{
        minHeight: "130px"
    },
    cardcontent: {
        padding: 0,
        "&:last-child": {
          paddingBottom: 0
        }
      }    

})(ListResItem);