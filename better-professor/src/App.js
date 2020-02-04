import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";
// import LoginBasic from "./components/LoginBasic";
// import RegisterBasic from "./components/RegisterBasic";
import PrivateRoute from "./components/PrivateRoute";

import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import RegForm from './components/Registration';
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <>
      <Header />
      <Navigation />

      <Switch>
        <Route exact path="/" component={LoginForm} /> 
        <Route path="/registration">
          <RegForm />
        </Route>
        <Route component={LoginForm} />
      </Switch>
    </>
  );
}

export default App;
