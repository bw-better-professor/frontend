import React, { useEffect, useState } from "react";
import { Card, CardTitle } from "reactstrap";
import {useParams, Link, useHistory} from "react-router-dom";
import {Button, CardText} from "reactstrap";

import {axiosWithAuth} from "../utils/axiosWithAuth";
import {StudentDetailsStudent, StudentDetailsProjects, StudentDetailsStudentButtons, EditDeleteButtons,StudentDetailsStudentDetails,StudentDetailsProjectsHeader, StudentDetailsProjectHeaderSections, StudentDetailsStudentButtonsSection, StudentDetailsStudentAddProjectButton, ProjectsContainer} from "./styled-components";

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

  const deleteProject = (projectID, projectTitle) => {
    axiosWithAuth()
    .delete(`api/projects/${projectID}`)
    .then(res => {
      console.log("successfully deleted project", projectTitle)
      history.push(`/student/${id}`)
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <div>
      <StudentDetailsStudent>
        <StudentDetailsStudentButtonsSection>
          <StudentDetailsStudentAddProjectButton>
            <EditDeleteButtons onClick={()=>history.push(`/addproject/${id}`)}>Add Project</EditDeleteButtons>
          </StudentDetailsStudentAddProjectButton>
          <StudentDetailsStudentButtons>
            <EditDeleteButtons onClick={()=>history.push(`/editstudent/${id}`)}>Edit Student</EditDeleteButtons>
            <EditDeleteButtons onClick={deleteStudent}>Delete Student</EditDeleteButtons>
          </StudentDetailsStudentButtons>
        </StudentDetailsStudentButtonsSection>
        
        
        <StudentDetailsStudentDetails>
          {/* <img src={studentState.image_url} /> */}
          <h2>Name: {studentState.name}</h2>
          <h3>Email: {studentState.email}</h3>
        </StudentDetailsStudentDetails>
        
      </StudentDetailsStudent>
      
      <StudentDetailsProjects>
        <StudentDetailsProjectsHeader>
          <StudentDetailsProjectHeaderSections>
            <h1>Projects</h1>
          </StudentDetailsProjectHeaderSections>
        </StudentDetailsProjectsHeader>
        
        <ProjectsContainer>

        
        {projectState.map(project => {
          return (
            <Card key={project.projectId}>
              
              <CardText>Title: {project.title}</CardText>
              <CardText>Due Date: {project.due_date}</CardText>
              <CardText>Reminder: {project.reminder_time}</CardText>
              <CardText>Notes: {project.notes}</CardText>
              <Button onClick={()=>history.push(`/editproject/${project.projectId}`)}>Edit Project</Button>
              <Button onClick={()=>deleteProject(project.projectId, project.title)}>Delete Project</Button>
            </Card>
          );
        })}
        </ProjectsContainer>
      </StudentDetailsProjects>
    </div>
  );
};

export default StudentDetails;
