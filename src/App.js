import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import News from './pages/News'
import Games from './pages/Games'
import Header from "./components/Header";


export default function App() {
  return (
    <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/games">
            <Games />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </BrowserRouter>
  );
}
