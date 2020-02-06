import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link, useHistory } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";
import {CardList, LoginForm2} from './styled-components';
import './styles.css';

const StudentList = () => {
  const [studentState, setStudentState] = useState([]);
  const history = useHistory();
  const id = localStorage.getItem("professorID");

  useEffect(() => {
    axiosWithAuth()
      .get(`api/users/${id}/students`)
      .then(res => {
        setStudentState(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  // Styles
  const cardStyle = {
    borderRadius: '5px',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
    width: '250px',
    marginBottom: '15px'
  };
  const cardBodyStyle = {
    padding: '15px',
    textAlign: 'center'
  };

  return (
    <div className="pageContainer">
      <div className="addStudentPage">
        <div className="pageContainer">
        <LoginForm2>
          <div className="projectsContainer2">
        <h1>Welcome back, Professor.</h1>
        
          <button onClick={()=>history.push("/addstudent")} type="submit" className="editDeleteButtons"> Add Student </button>
          <div className="projectsContainer">
        {(studentState.length===0) && (<h3>You have no students. Please add a student to manage.</h3>)}
          {studentState.map(student => {
            return (
                <div onClick={()=>history.push(`/student/${student.studentId}`)} key={student.studentId} style={cardStyle} className="project">
                    <h3>{student.name}</h3>
                    <h4>{student.email}</h4>
                </div>
            );
          })}
          </div>
          </div>
        </LoginForm2>
        </div>
      </div>
    </div>
  );
};

export default StudentList;
