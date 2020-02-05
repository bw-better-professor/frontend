import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import {Nav} from './styled-components';

function Navigation() {
  let whereTo = "/";

  if (localStorage.getItem("token") && localStorage.getItem("professorID")){
    whereTo = "/dashboard"
  }

  return(
    <Nav>
      <Link to={whereTo}>Home</Link>
      {/* <Link to="/">How It Works</Link> */}
      {/* <Link to="/">Reviews</Link> */}
      {/* something */}
      <Link to="/registration">Sign Up</Link>
    </Nav>
  );
}

export default Navigation;
