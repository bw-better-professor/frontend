import React, {useState} from 'react';
import './styles.css';
import Axios from "axios";
import {useHistory} from "react-router-dom";
import {FormPage,
        FormField,
        FormInfo,
        Button,
        Input,
        ImgDiv} from './styled-components';

function RegForm() {
  const history = useHistory();
  const [userState, setUserState] = useState({username: "", password: "", confirmPassword: ""})

  const handleChanges = e => {
    const value = e.target.value;

    setUserState({
        ...userState,
        [e.target.name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    const username = userState.username;
    const password = userState.password;
    Axios
    .post(`https://betterprofessor25.herokuapp.com/api/auth/register`, {username, password})
    .then(res=> {
        console.log("successfully created a user.", res);
        history.push(`/login`);
    })
    .catch(err=>{
        console.log(err, "failed to register")
    })
}

  return(
    <FormPage>
      <FormField>
        {/* NAME */}
        <FormInfo>
          {/* <label htmlFor="name">Full Name</label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Full Name"
            value={userState.name}
          /> */}
        </FormInfo>
        {/* EMAIL */}
        <FormInfo>
          <label htmlFor="email">Username</label>
          <Input
            type="text"
            name="username"
            id="email"
            placeholder="Enter Username"
            value={userState.username}
            onChange={handleChanges}
          />
        </FormInfo>
        {/* PASSWORD */}
        <FormInfo>
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Create a password"
            value={userState.password}
            onChange={handleChanges}
          />
        </FormInfo>
        {/* CONFIRM PASSWORD */}
        <FormInfo>
          <label htmlFor="confirm-password">Confirm Password</label>
          <Input
            type="password"
            name="confirmPassword"
            id="confirm-password"
            placeholder="Re-enter password"
            value={userState.confirmPassword}
            onChange={handleChanges}
          />
          <p>Password must be at least 7 characters long and contain one uppercase letter, one lowercase letter and one special character.</p>
        </FormInfo>
        <Button type="submit" onClick={handleSubmit}>Create Account</Button>
      </FormField>
      {/* SIGN UP PAGE IMG */}
      <div>
        <img src="./imgs/signUpPageGraphic.jpg" alt="Sign up page graphic"/>
      </div>
    </FormPage>
  );
}

export default RegForm;
