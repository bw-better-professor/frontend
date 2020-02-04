import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";
import LoginBasic from "./components/LoginBasic";
import RegisterBasic from "./components/RegisterBasic";
import PrivateRoute from "./components/PrivateRoute";
// import Register from "./routes/Register";
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import RegForm from './components/Registration';

function App() {
  return (
    <>
      <Route path="/">
        <Header />
        <Navigation />
      </Route>
      <Route path="/registration">
        <RegForm />
      </Route>
    </>
  );
}

export default App;
