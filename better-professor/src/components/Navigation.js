import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import {Nav} from './styled-components';

function Navigation() {

  return(
    <Nav>
      <ul className="navLinksContainer">
        <a href="https://bw-better-professor.github.io/UI/index.html"><div id="nav-link">Home</div></a>
        <a href="https://bw-better-professor.github.io/UI/how_it_works.html"><div id="nav-link">How It Works</div></a>
        <a href="https://bw-better-professor.github.io/UI/reviews.html"><div id="nav-link">Reviews</div></a>
        <a href="https://bw-better-professor.github.io/UI/meet_the_team.html"><div id="nav-link">Meet the Team</div></a>
        <Link to="/registration"><div id="nav-link">Sign Up</div></Link>
      </ul>
    </Nav>
  );
}

export default Navigation;
