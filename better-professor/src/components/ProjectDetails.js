import React, { useEffect, useState } from "react";
import {useParams, useHistory} from "react-router-dom";

import {axiosWithAuth} from "../utils/axiosWithAuth";
import {EditDeleteButtons, LoginForm} from "./styled-components";
import "./styles.css";

const ProjectDetails = props => {
  const [projectState, setProjectState] = useState({
      title: "",
      due_date: "",
      reminder_time: "",
      notes: ""
  });
  const [studentState, setStudentState] = useState({
    name: "",
    email: "",
    image_url: ""
  });

  const {id, projectId} = useParams();
  const history = useHistory();

  useEffect(() => {
    axiosWithAuth()
      .get(`api/projects/${projectId}`)
      .then(res => {
        setProjectState(res.data);
      })
      .catch(err => console.log("this is my error", err));
  }, [projectId]);

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
    <div className="pageContainer">
      <LoginForm>
        <span className="goBack" onClick={()=>history.push(`/student/${id}`)}>Back to Student Details</span>

          <div className="editDelContainer">
            <button className="editDeleteButtons" onClick={()=>history.push(`/editproject/${projectId}`)}>Edit Project</button>
            <button className="editDeleteButtons2" onClick={()=>deleteProject(projectId, projectState.title)}>Delete Project</button>
          </div>
      </LoginForm>

      
      <div className="studentDetailsContainer"> 
        <div className="studentDetails2">
          {/* <img src={studentState.image_url} /> */}

            <div className="projectDetailLine">
                <span className="projectTitleLabel">Project: </span>
                <span className="projectDetailTitle">{projectState.title}</span>
            </div>

            <div className="projectDetailLine">
                <span className="projectLabel">Due Date: </span>
                <span className="projectDetailTitle">{projectState.due_date}</span>
            </div>

            <div className="projectDetailLine">
                <span className="projectLabel">Remind Me: </span>
                <span className="projectDetailTitle">{projectState.reminder_time}</span>
            </div>
          
          <div className="projectNotes">
            <div className="projectLabel">Notes: </div>
            <div className="notesSection">{projectState.notes}</div>
          </div>
          
        </div>
      </div>
      
    </div>
  );
};

export default ProjectDetails;
