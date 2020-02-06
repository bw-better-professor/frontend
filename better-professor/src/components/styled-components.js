import React from 'react';
import styled from 'styled-components';

export const FormPage = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 5rem;
`;

export const FormField = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

export const FormInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  max-width: 30rem;
`;

export const Input = styled.input`
  border: solid 1px #ddd;
  border-radius: 5px;
  padding: .5rem;
  width: 30rem;
  margin-bottom: 0;

  &:focus {
    border-color: dodgerblue;
  }
`;

export const Button = styled.button`
  padding: .5rem;
  border-radius: 10px;
  background-color: #2196F3;
  width: 28rem;
  border-style: none;
  color: white;
  transition: .25s;
  text-transform: capitalize;

  &[type="submit"]:hover {
    background-color: #0A2738;
  }
`;

export const Nav = styled.nav`
display:flex;
justify-content: flex-end;
align-items:center;
background-color: #0a2738;
margin:0 0 10px 0;
height: 46px;
`;

export const HeadContainer = styled.div`
display: flex;
justify-content: center;
`

export const Head = styled.header`
  width: 90%;
  height: 11rem;
  display: flex;
  margin-bottom: 2rem;
  align-items: center;
  justify-content: space-between;
`;

export const HLeft = styled.div`
  display: flex;
  padding: .5rem;
  align-items: center;
`;

export const HRight = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  margin-right: 4%;
  `

export const Buttons = styled.button`
background: dodgerblue;
  color: white;
  text-transform: uppercase;
  border: none;
  margin-top: 40px;
  padding: 20px;
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 10px;
`

export const LoginForm = styled.div`
display: block;
box-sizing: border-box;
width: 100%;
border-radius: 4px;
padding: 10px 15px;
margin-bottom: 10px;
font-size: 14px;
`

export const LoginForm2 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
box-sizing: border-box;
width: 100%;
border-radius: 4px;
padding: 10px 15px;
margin-bottom: 10px;
font-size: 14px;
`

export const EditDeleteButtons = styled.button`
  margin: 1%;
  background-Color: #66889c;
  color: white;
`

export const CardList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
