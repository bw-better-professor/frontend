import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import {Nav} from './styled-components';

function Navigation() {

  return(
    <Nav>
      <Link to="/">Home</Link>
      <Link>How It Works</Link>
      <Link>Reviews</Link>
      <Link to="/registration">Sign Up</Link>
    </Nav>
  );
}

export default Navigation;
