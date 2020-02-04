import React from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

import { useForm } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import styled from 'styled-components';







const LoginForm = () => {
    const history = useHistory();
    const {
      register,
      handleSubmit,
      errors,
      setError,
      clearError,
      formState: { isSubmitting }
    } = useForm();

    const onSubmit = data => {
      const username = data.Email;
      const password = data.PassWord;
    
      axios
      .post(`https://betterprofessor25.herokuapp.com/api/auth/login`, {username, password})
      .then(res=> {
          console.log("login successfull")
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("professorID", res.data.id);
          history.push("/dashboard")
      })
      .catch(err=>{
          console.log(err, "failed to login")
      })
    }
    
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    const validateUserName = async value => {
      await sleep(1000);
      if (value !== "bill") {
        setError("username", "validate");
      } else {
        clearError("username");
      }
    };

  return (
      <LoginForm>
    <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>
      <label>Email</label>
      <input name="Email" ref={register({ required: true })} />
      <ErrorMessage error={errors.firstName} />
      
      <label>Password</label>
      <input name="PassWord" ref={register({ required: true, minLength: 2 })} />
      <ErrorMessage error={errors.firstName} />

      
      <ErrorMessage error={errors.gender} />

      
        
        {e => validateUserName(e.target.value)}
        {register({ required: true, validate: validateUserName })}
      
      <ErrorMessage error={errors.username} />

      
        
        {register({ required: true, pattern: /^\S+@\S+$/i })}
      
      <ErrorMessage error={errors.email} />

      
        
        {register({ required: true, min: 18 })}
      
      <ErrorMessage error={errors.age} />

      
     <buttons>
      <input disabled={isSubmitting} type="submit" />
      </buttons>
    </form>
    </LoginForm>
    
  );
}

export default LoginForm;


