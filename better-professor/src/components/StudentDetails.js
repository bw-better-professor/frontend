import React, { useEffect, useState } from "React";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Card, CardTitle } from "reactstrap";

const StudentDetails = props => {
  const [projectState, setProjectState] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`api/students/${props.student.id}/projects`)
      .then(res => {
        setProjectState(res.data);
      })
      .catch(err => console.log("this is my error", err));
  }, []);

  return (
    <div>
      <img src={props.student.img_url} />
      <h2>Name:{props.student.name}</h2>
      <h3>Email:{props.student.email}</h3>
      <div>
        {projectState.map(project => {
          return (
            <Card key={project.id}>
              <CardTitle>Title:{project.title}</CardTitle>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default StudentDetails;
