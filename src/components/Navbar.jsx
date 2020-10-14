import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles, IconButton, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

import MenuIcon from '@material-ui/icons/Menu'

const useStyle = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),   
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        }
    },
    title:{
        flexGrow: 1
    },
    appBar:{
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${240}px )`,
            marginLeft: 240,
        },
    }


}))
const Navbar = (props) => {
    const classes = useStyle()
    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton 
                    color='inherit' 
                    aria-label="menu" 
                    className={classes.menuButton}
                    onClick={() => props.accionAbrir()}>
                    <MenuIcon />
                </IconButton>  
                <Typography variant="h6" className={classes.title}>
                    Noratoj
                </Typography>
                <Link to="/login">
                    <Button variant="text" color="inherit">Login</Button>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar