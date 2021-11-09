import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from '../pages/Home'

const Routes = ()=>{
    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route path="*" component={()=><h1>Pagina não encontrada</h1>} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes