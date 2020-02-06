import React, { useEffect, useState } from "react";
import { Card, CardTitle } from "reactstrap";
import {useParams, Link, useHistory} from "react-router-dom";
import {Button, CardText} from "reactstrap";

import {axiosWithAuth} from "../utils/axiosWithAuth";
import {EditDeleteButtons, LoginForm} from "./styled-components";
import "./styles.css";

const StudentDetails = props => {
  const [projectState, setProjectState] = useState([]);
  const [studentState, setStudentState] = useState({
    name: "",
    email: "",
    image_url: ""
  });

  const {id} = useParams();
  const history = useHistory();

  useEffect(() => {
    axiosWithAuth()
      .get(`api/students/${id}/projects`)
      .then(res => {
        setProjectState(res.data);
      })
      .catch(err => console.log("this is my error", err));
  }, [projectState]);

  useEffect(()=> {
    axiosWithAuth()
    .get(`api/students/${id}`)
    .then(res => {
      setStudentState({
        name: res.data.name,
        email: res.data.email,
        image_url: res.data.image_url
      })
    })
    .catch(err => console.log(err));
  }, [id, projectState])

  const deleteStudent = () => {
    axiosWithAuth()
    .delete(`api/students/${id}`)
    .then(res => {
      console.log("successfully deleted student", studentState.name)
      history.push("/dashboard")
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="pageContainer">
      <LoginForm>
        <span className="goBack" onClick={()=>history.push(`/dashboard`)}>Back to Student List</span>

          <div className="editDelContainer">
            <button className="editDeleteButtons" onClick={()=>history.push(`/editstudent/${id}`)}>Edit Student</button>
            <button className="editDeleteButtons2" onClick={deleteStudent}>Delete Student</button> 
          </div>
      </LoginForm>

      
      <div className="studentDetailsContainer"> 
        <div className="studentDetails">
          {/* <img src={studentState.image_url} /> */}
          <h2>{studentState.name}</h2>
          <h3>{studentState.email}</h3>
        </div>
      </div>

      <div className="projectsSection">
        <div className="projectsHeader">
          <span className="projectsAddButton">
            <button type="submit" onClick={()=>history.push(`/addproject/${id}`)}>Add Project</button>
          </span>
          {(projectState.length===0) && (<h3>{studentState.name} currently has no projects. Please add a project.</h3>)}
        </div>
        <div className="projectsContainer">
          
          {projectState.map(project => {
            return (
              <div onClick={()=>history.push(`/student/${id}/${project.projectId}`)} className="project" key={project.projectId}>
                <h3>{project.title}</h3>
                <h4>Due Date: {project.due_date}</h4>
                <h4>Remind Me: {project.reminder_time}</h4>
                
              </div>
            );
          })}
        </div>
        
      </div>
    </div>
  );
};

export default StudentDetails;
