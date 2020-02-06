import React from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

import { useForm } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import {LoginForm} from './styled-components';
import "./styles.css";


const Login2Form = () => {
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
    <div className="pageContainer2">
      <div className="sectionContainer1">
        <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
          <h1>Log In</h1>
          <label htmlFor="email">Email</label>
          <input id="email" placeholder="Enter Email Here" name="Email" ref={register({ required: true })} />
          <ErrorMessage error={errors.firstName} />

          <label htmlFor="password">Password</label>
          <input id="password" placeholder="Enter Password Here" name="PassWord" type="password" ref={register({ required: true, minLength: 2 })} />
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
          <input disabled={isSubmitting} value={"Log In"} type="submit" />
          </buttons>

        </form>
    </div>
    <div className="sectionContainer2">
      <div id="signUp">
        {/* Sign Up Graphic Here */}
      </div>
    </div>
    </div>
    </LoginForm>
    
  );
}

export default Login2Form;
