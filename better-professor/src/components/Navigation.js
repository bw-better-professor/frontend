import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import {Nav} from './styled-components';

function Navigation() {

  return(
    <Nav>
      <span className="navLinksContainer">
          <Link to="/dashboard"><div id="nav-link">Home</div></Link>
        
        {/* <Link to="/">How It Works</Link> */}
        {/* <Link to="/">Reviews</Link> */}
        <Link to="/registration"><div id="nav-link">Sign Up</div></Link>
      </span>
    </Nav>
  );
}

export default Navigation;
