import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';
import {Head,
        HLeft,
        HRight} from './styled-components';

function Header() {

  const delToken = () => {
    localStorage.removeItem("token"); 
    localStorage.removeItem("professorID");
    window.location.reload();
  }

  return(
    <Head>
      <HLeft>
        <img src="./imgs/BPALogo.png" alt="BPA Logo"/>
        <div className="h-left">
          <h1 id="app-name">Better Professor</h1>
          <p id="app-description">Deadline Management App</p>
        </div>
      </HLeft>
      <HRight>
        <Link id="header-login" to="/">Login</Link>
        <Link id="header-login" to="/" onClick={()=>delToken()}>Logout</Link>
      </HRight>
    </Head>
  );
}

export default Header;
