import React from "react";
import Form from "./Form";
import Canvas from "./Canvas";
import './App.css';
import {BrowserRouter, Route, Switch, Link, Redirect} from 'react-router-dom';

const App = () => {

  return (
    <BrowserRouter>
      <nav className="navigation">
        <Link className="navigation__link" to='/form'>Форма</Link>
        <Link className="navigation__link" to='/canvas'>Окружности</Link>
      </nav>

      <hr/>
      <Switch>
        <Route exact path="/form" component={Form} />
        <Route exact path="/canvas" component={Canvas}/>
        <Redirect to="/form"/>
      </Switch>

    </BrowserRouter>

  );
};

export default App;
