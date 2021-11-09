import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import Games from "../pages/Games";
import Home from '../pages/Home'
import News from "../pages/News";

const AppRoutes = () => {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/games" component={Games} />
            <Route path="/news" component={News} />
            <Route path="*" component={()=><h1>Pagina não encontrada</h1>} />
          </Switch>
      </BrowserRouter>
    )
  }

export default AppRoutes