import React from '../Reactjs-Residentes-1/src/react'
import { Link } from '../Reactjs-Residentes-1/src/react-router-dom'
import { Card, CardMedia, CardContent, Typography } from '../Reactjs-Residentes-1/src/@material-ui/core'
import { withStyles } from '../Reactjs-Residentes-1/src/@material-ui/core/styles'

const Style = {
    height: 132,
    width: 260
  };

  
const ListItem = ({ description, classes, image, total, name }) => {
    return (
        
        <Link to={`/dettor/${name}`} className='Gif-link'>
        <Card className={ classes.item }>            
             <CardMedia style={Style} className={ classes.media } src= {image} component="img" title="Edificios/Torres/Residencias"/>
            <CardContent className={classes.cardcontent}>
                
                    <Typography variant="h6" component = "p" > { description } </Typography>
                
            </CardContent>
            <CardContent className={classes.cardcontent}>
                <Typography variant="h6" component = "p"> Nro Habitantes: { total } </Typography>
            </CardContent>

        </Card>
        </Link>
    )
} 

export default withStyles({
    item: {
        minWidth: "80px",
        margin: "1em",
        background: "#073b4c",
        textAlign: "center",
        color: "white",
        boxSizing: "border-box"
    },
    media:{
        minHeight: "100px",
    },
    cardcontent: {
        padding: 0,
        "&:last-child": {
          paddingBottom: 0
        }
      }    



})(ListItem);