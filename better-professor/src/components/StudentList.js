import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

const StudentList = () => {
  const [studentState, setStudentState] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/students")
      .then(res => {
        setStudentstate(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <div>
        {studentState.map(student => {
          return (
            <Card key={student.id}>
              <CardImg src={student.image_url} alt="card-group" />
              <CardBody>
                <CardTitle>Name:{student.name}</CardTitle>
                <CardText>Email:{student.email}</CardText>
                <Button>Add Project</Button>
              </CardBody>
            </Card>
          );
        })}
        <Link>
          <Button> Add Student </Button>
        </Link>
      </div>
    </div>
  );
};

export default StudentList;
