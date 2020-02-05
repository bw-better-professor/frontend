
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
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";
import AddProject from "./components/AddProject";
import StudentDetails from "./components/StudentDetails";

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
        <PrivateRoute path="/dashboard" component={StudentList} />
        <PrivateRoute path="/student/:id" component={StudentDetails} />
        {/* <Route path="/student/:id" render={props=> {
          return <StudentDetails {...props} /> 
          }} /> */}
        <PrivateRoute path="/addstudent" component={AddStudent} />
        <PrivateRoute path="/addproject/:id" component={AddProject} />
        {/* <Route path="/addproject/:id" render={props=> {
          return <AddProject {...props} /> 
          }} /> */}
        <Route component={LoginForm} />
      </Switch>
    </>
  );
}

export default App;
