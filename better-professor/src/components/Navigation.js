import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import {Nav} from './styled-components';

function Navigation() {

  return(
    <Nav>
      <Link to={whereTo}>Home</Link>
      {/* <Link to="/">How It Works</Link> */}
      {/* <Link to="/">Reviews</Link> */}
      <Link to="/registration">Sign Up</Link>
    </Nav>
  );
}

export default Navigation;
