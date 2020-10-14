import React from 'react'
import  {Link} from 'react-router-dom'
import { List, ListItem, ListItemIcon, ListItemText, Divider     } from '@material-ui/core'
//icono para menú lateral
import DomainIcon from '@material-ui/icons/Domain';
import GraphicEqIcon from '@material-ui/icons/GraphicEq';

const Listas = () => {
    return (
        <div>
            <List component ='nav'>
                <ListItem component={Link} to="/ListBuild">
                    <ListItemIcon>
                        <DomainIcon />       
                    </ListItemIcon>
                    <ListItemText primary='Residentes'/>
                </ListItem>

                <ListItem component={Link} to="/ListBuild2">
                    <ListItemIcon>
                        <GraphicEqIcon />       
                    </ListItemIcon>
                    <ListItemText primary='Lista Completa'/>
                </ListItem>
                <Divider />
            </List>
        </div>
    )
}

export default Listas
