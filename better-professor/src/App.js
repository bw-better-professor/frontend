import React from 'react';

<<<<<<< HEAD
import AddStudent from "./components/AddStudent";
import './App.css';

function App() {
  return (
    <div className="App">
      <AddStudent />
    </div>
=======
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';


import PrivateRoute from './components/PrivateRoute';
import Login from './routes/Login';
import Register from './routes/Register';


function App() {
  return (
    <>
      
      <Wrapper>
        <Switch>
        <Route exact path="/register">
            {localStorage.getItem('token') ? <Redirect to="/" /> : <Register />}
          </Route>
          <Route exact path="/login">
            {localStorage.getItem('token') ? <Redirect to="/" /> : <Login />}
          </Route>
          <PrivateRoute exact path="/">
          
          </PrivateRoute>
          <PrivateRoute path="/project/:id">
          
          </PrivateRoute>
        </Switch>
      </Wrapper>
    </>
>>>>>>> 04d69baa5976102fd1d4c19deebd03029bd40771
  );
}

export default App;

