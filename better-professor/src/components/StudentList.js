import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import { LoginForm2} from './styled-components';
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
                <div onClick={()=>history.push(`/student/${student.studentId}`)} key={student.studentId} className="project">
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
