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
  width: 100%;
  background-color: #0A2738;
  padding: 1rem .5rem;
  display: flex;
  justify-content: flex-end;
`;

export const Head = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const HLeft = styled.div`
  display: flex;
  margin-left: .5rem;
  align-items: center;
`;

export const HRight = styled.div`
  display: flex;
  align-items: center;
  margin-right: .5rem;
`;



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
border: 1px solid gray;
padding: 10px 15px;
margin-bottom: 10px;
font-size: 14px;
`

export const StudentDetailsStudent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1%;
  padding-bottom: 1%;
  border-bottom: solid black 1px;
`

export const StudentDetailsStudentButtonsSection = styled.div`
  display: flex;
`

export const StudentDetailsStudentButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
`

export const StudentDetailsStudentAddProjectButton = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 50%;
`

export const StudentDetailsStudentDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const EditDeleteButtons = styled.button`
  margin: 1%;
`

export const StudentDetailsProjects = styled.div`
  display: flex;
  flex-direction: column;
`
export const StudentDetailsProjectsHeader = styled.div`
  display: flex;
`
export const StudentDetailsProjectHeaderSections = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 1%;
`

export const ProjectsContainer = styled.div`
  display: flex;
  width: 90%;
  flex-wrap: wrap;
`
