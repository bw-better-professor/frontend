import React, {useState} from 'react';

function RegForm() {

  return(
    <form>
      {/* NAME */}
      <div>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Full Name"
        />
      </div>
      {/* EMAIL */}
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email Address"
        />
      </div>
      {/* PASSWORD */}
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Create a password"
        />
      </div>
      {/* CONFIRM PASSWORD */}
      <div>
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          name="confirm-password"
          id="confirm-password"
          placeholder="Re-enter password"
        />
      </div>
      <button type="submit">Create Account</button>
    </form>
  );
}

export default RegForm;
