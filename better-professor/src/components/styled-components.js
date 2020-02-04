import React from 'react';
import styled from 'styled-components';

export const FormPage = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const FormField = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

  &:focus {
    border-color: dodgerblue;
  }
`;

export const Button = styled.button `
  padding: .5rem;
  border-radius: 10px;
  background-color: #2196F3;
  width: 28rem;
  border-style: none;
  color: white;
`;
