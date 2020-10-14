import React from '../Reactjs-Residentes-1/src/react'
import { Switch, Route } from '../Reactjs-Residentes-1/src/react-router-dom' 
import ListBuild from '../Reactjs-Residentes-1/src/components/ListBuild/ListBuild'
import ListFloor from '../Reactjs-Residentes-1/src/components/ListFloor/ListFloor'
import ListResid from '../Reactjs-Residentes-1/src/components/ListResid/ListResid'
import ListBuild2 from '../Reactjs-Residentes-1/src/components/ListBuild2/ListBuild2'
import DatBasic from '../Reactjs-Residentes-1/src/components/DatBasRed/DatBasic'
import NuevoInte from '../Reactjs-Residentes-1/src/components/CrearIntegrante/NuevoInte'

//import Proteccion from './components/Proteccion'
import Login from '../Reactjs-Residentes-1/src/components/Login/Login'

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