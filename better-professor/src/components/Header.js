import React from 'react';
import './styles.css';
import {Link, useHistory} from 'react-router-dom';
import {Head,
        HLeft,
        HRight} from './styled-components';

function Header() {
  const history = useHistory();

  const delToken = () => {
    localStorage.removeItem("token"); 
    localStorage.removeItem("professorID");
    history.push("/");
  }

  return(
    <Head>
      <Link to="/">
        <HLeft>
            <div id="headerLogo"> {/* Header Logo Here */} </div>
            <div className="h-left">
              <h1 id="app-name">Better Professor</h1>
              <span id="app-description">Deadline Management App</span>
            </div>
        </HLeft>
      </Link>
      <HRight>
        <div id="header-login" onClick={()=>history.push("/")}>Login</div>
        <div id="header-login" onClick={delToken}>Logout</div>
      </HRight>
    </Head>
  );
}

export default Header;
