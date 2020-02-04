import React, { useEffect, useState } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import { Card, CardTitle } from "reactstrap";
import {useParams} from "react-router-dom";

const StudentDetails = props => {
  const [projectState, setProjectState] = useState([]);
  const [studentState, setStudentState] = useState({
    name: "",
    email: "",
    image_url: ""
  });

  const {id} = useParams();

  useEffect(() => {
    axiosWithAuth()
      .get(`api/students/${id}/projects`)
      .then(res => {
        setProjectState(res.data);
      })
      .catch(err => console.log("this is my error", err));
  }, []);

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

  return (
    <div>
      {/* <img src={studentState.image_url} /> */}
      <h2>Name: {studentState.name}</h2>
      <h3>Email: {studentState.email}</h3>
      <div>
        <h1>Projects</h1>
        {projectState.map(project => {
          return (
            <Card key={project.id}>
              
              <CardTitle>Title: {project.title}</CardTitle>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default StudentDetails;
