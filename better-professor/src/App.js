import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";
import LoginBasic from "./components/LoginBasic";
import RegisterBasic from "./components/RegisterBasic";
import PrivateRoute from "./components/PrivateRoute";
// import Register from "./routes/Register";

function App() {
  return (
    <>
      {/* <Wrapper> */}
      <LoginBasic />
      <RegisterBasic />

      {/* <Switch>
        <Route exact path="/register">
          {localStorage.getItem("token") ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route exact path="/login">
          {localStorage.getItem("token") ? <Redirect to="/" /> : <Login />}
        </Route>
        <PrivateRoute exact path="/"></PrivateRoute>
        <PrivateRoute path="/project/:id"></PrivateRoute>
      </Switch>
      </Wrapper> */}
    </>
  );
}

export default App;
