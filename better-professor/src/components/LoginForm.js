
import React from "react";

import { useForm } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

const LoginForm = () => {
    const {
      register,
      handleSubmit,
      errors,
      setError,
      clearError,
      formState: { isSubmitting }
    } = useForm();
    const onSubmit = data => {
      alert(JSON.stringify(data));
    };
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
    <form className="App" onSubmit={handleSubmit(onSubmit)}>
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

      

      <input disabled={isSubmitting} type="submit" />
    </form>
  );
}

export default LoginForm;



