import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';
import {Head,
        HLeft,
        HRight} from './styled-components';

function Header() {

  return(
    <Head>
      <HLeft>
        <div id="headerLogo"> {/* Header Logo Here */} </div>
        <div className="h-left">
          <h1 id="app-name">Better Professor</h1>
          <span id="app-description">Deadline Management App</span>
        </div>
      </HLeft>
      <HRight>
        <Link id="header-login">Login</Link>
      </HRight>
    </Head>
  );
}

export default Header;
