import React from 'react'
import { Switch, Route } from 'react-router-dom' 
import ListBuild from 'components/ListBuild/ListBuild'
import ListFloor from 'components/ListFloor/ListFloor'
import ListResid from 'components/ListResid/ListResid'
import ListBuild2 from 'components/ListBuild2/ListBuild2'
import DatBasic from 'components/DatBasRed/DatBasic'
import NuevoInte from 'components/CrearIntegrante/NuevoInte'

//import Proteccion from './components/Proteccion'
import Login from 'components/Login/Login'

const Routes = () => {

    return (
        <Switch>
            <Route exact path ="/"></Route> 
{/*             <Route exact path ="/ListBuild">
                <Proteccion component={ListBuild} />
            </Route> 
 */}            
            <Route exact path ="/ListBuild" component={ListBuild}></Route>
            <Route exact path ="/ListBuild2" component={ListBuild2}></Route> 
            <Route path ="/dettor/:id" component={ListFloor}></Route> 
            <Route path ="/detpiso/:id/:id_tor" component={ListResid}></Route>
            <Route path="/edit/:employeeId" component={DatBasic} />                    
            <Route path="/nuevo/:employeeId" component={NuevoInte} />                    
            <Route path="/login" component={Login} />                    
        </Switch>
    );
}

export default Routes;