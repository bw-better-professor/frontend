import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';


const FormPage = styled.div`
  text-align: center;
  color: #7A7878;
  background-color: #EDC7C5;
  padding: 10px;
  .input-box {
    border: 1px solid #EDC7C5;
  }
  .login-button {
    color: #EDC7C5;
    background-color: #7A7878;
    border-radius: 12px;
    font-weight: bold;
    padding: 5px;
  }
`;


const LoginForm = ({ values, errors, touched, status }) => {

  const [userCredentials, setUserCredentials] = useState([]);
  
  // const { handleLogin } = useAuth();

  useEffect(() => {
    status && setUserCredentials(member => [...member, status])
  }, [status])

  return (
    <FormPage>
      <h1>Better Professor</h1>
      <div className="form-page">
        <Form>
          <div className="input-box">
            <Field type="text" name="username" id="username" placeholder="Enter your username" />
            {touched.username && errors.username && (
              <p>{errors.username}</p>
            )}
          </div>
          <div className="input-box">
            <Field type="password" name="password" id="password" placeholder="Enter your password" />
            {touched.password && errors.password && (
              <p>{errors.password}</p>
            )}
          </div>
          <div>
            <button className="login-button" type="submit">Login</button>
          </div>
        </Form>
      </div>
    </FormPage>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    }
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username Required"),
    password: Yup.string().required("Password Required")
  }),
  handleSubmit(values, { setStatus }) {
    /// handleLogin(values)
    axios
        .post("https://betterprofessor25.herokuapp.com", values)
        .then(res => {
            console.log(res.data);
            setStatus(res.data)
        })
        .catch(err => console.log(err.res));
}
})(LoginForm);

export default FormikLoginForm;