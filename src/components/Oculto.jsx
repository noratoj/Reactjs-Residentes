import React from '../Reactjs-Residentes-1/src/react'
import { withWidth, Typography, Hidden, Button } from '../Reactjs-Residentes-1/src/@material-ui/core'

const Oculto = (props) => {
    return (
        <div>
            <Typography variant='h6' color='initial'>
                ANCHO: {props.width}
            </Typography>
            <Hidden xsDown>
                <Button variant='contained' color='primary'>
                    xs
                </Button>
            </Hidden>
        </div>
    )
}

export default withWidth()(Oculto)

