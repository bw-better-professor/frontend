import React, {useState} from 'react';
import './styles.css';
import {FormPage,
        FormField,
        FormInfo,
        Button,
        Input,
        ImgDiv} from './styled-components';

function RegForm() {

  return(
    <FormPage>
      <FormField>
        {/* NAME */}
        <FormInfo>
          <label htmlFor="name">Full Name</label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Full Name"
          />
        </FormInfo>
        {/* EMAIL */}
        <FormInfo>
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email Address"
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
          />
        </FormInfo>
        {/* CONFIRM PASSWORD */}
        <FormInfo>
          <label htmlFor="confirm-password">Confirm Password</label>
          <Input
            type="password"
            name="confirm-password"
            id="confirm-password"
            placeholder="Re-enter password"
          />
          <p>Password must be at least 7 characters long and contain one uppercase letter, one lowercase letter and one special character.</p>
        </FormInfo>
        <Button type="submit">Create Account</Button>
      </FormField>
      {/* SIGN UP PAGE IMG */}
      <div>
        <img src="imgs/signUpPageGraphic.jpg" alt="Sign up page graphic"/>
      </div>
    </FormPage>
  );
}

export default RegForm;
