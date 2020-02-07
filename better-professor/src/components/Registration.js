import React, {useState} from 'react';
import Axios from "axios";
import {useHistory} from "react-router-dom";

import './styles.css';
import {useForm} from 'react-hook-form';
import {FormPage,
        FormField,
        FormInfo,
        Button,
        Input,
        ImgDiv} from './styled-components';

function RegForm() {
    const history = useHistory();
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [notMatching, setNotMatching] = useState('');

    const changesUser = e => {
      setUser(e.target.value);
    }
    const changesPass = e => {
      setPassword(e.target.value);
    }
    const changesConfirm = e => {
      setConfirmPassword(e.target.value);
    }

    const changeEmail = e => {
      setEmail(e.target.value);
    }

    const {
      register,
      handleSubmit,
      errors} = useForm();

    const onSubmit = () => {
      (password === confirmPassword) ? ( // <-- IF THIS, THEN -->
      Axios
        .post(`https://betterprofessor25.herokuapp.com/api/auth/register`, {
          "username": email.toString(),
          "password": password.toString()
        })
        .then(res=> {
            console.log("successfully created a user.");
        })
        .then(res => {
            Axios
            .post(`https://betterprofessor25.herokuapp.com/api/auth/login`, {
              "username": email.toString(),
              "password": password.toString()
            })
            .then(res2=>{
              console.log("successfully logged in as newly created user")
              localStorage.setItem("token", res2.data.token);
              localStorage.setItem("professorID", res2.data.id);
              history.push(`/dashboard`);
            })
          
        })
        .catch(err=>{
            console.log(err, "failed to register")
        }) ) : // IF NOT, THEN -->

        ( setNotMatching('Passwords do not match!') )
    };

  return(
    <FormPage>
      <FormField onSubmit={handleSubmit(onSubmit)}>
        <h1>Create an Account</h1>
        {/* NAME */}
        {/* <FormInfo>
          <label htmlFor="name">Full Name</label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Full Name"
            onChange={changesUser}
            value={user}
            ref={register({ required: "Must enter full name" })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </FormInfo> */}
        {/* EMAIL */}
        <FormInfo>
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            name="email"
            id="email"
            onChange={changeEmail}
            value={email}
            placeholder="Enter Email Address"
            ref={register({ required: "Must enter a valid email address" })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </FormInfo>
        {/* PASSWORD */}
        <FormInfo>
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Create a password"
            onChange={changesPass}
            value={password}
            ref={register({ required: "Must enter a password", minLength: {value: 7, message: "Password must be at least 7 characters long."} })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </FormInfo>
        {/* CONFIRM PASSWORD */}
        <FormInfo>
          <label htmlFor="confirm-password">Confirm Password</label>
          <Input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Re-enter password"
            onChange={changesConfirm}
            value={confirmPassword}
            ref={register({ required: "Must confirm password", minLength: {value: 7, message: "Not enough characters."} })}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
          <p>Password must be at least 7 characters long. {notMatching}</p>
        </FormInfo>
        <Button type="submit">Create Account</Button>
        <div className="preUnderline">Already have an account? <span className="underline2" onClick={()=>history.push("/login")}>Sign in here.</span></div>
      </FormField>
      {/* SIGN UP PAGE IMG */}
      <div id="signUp">
        {/* Sign Up Graphic Here */}
      </div>
    </FormPage>
  );
}

export default RegForm;
