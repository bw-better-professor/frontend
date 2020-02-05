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
    <div>
      <div>
        {studentState.map(student => {
          return (
            <Link to={`/student/${student.studentId}`} key={student.studentId}>
              <Card>
                {/* <CardImg src={student.image_url} alt="card-group" /> */}
                <CardBody>
                    <CardTitle>Name: {student.name}</CardTitle>
                    <CardText>Email: {student.email}</CardText>
                    <Link to={`/addproject/${student.studentId}`}>
                      <Button>Add Project</Button>
                    </Link>
                </CardBody>
              </Card>
            </Link>
          );
        })}
        <Link to="/addstudent">
          <Button> Add Student </Button>
        </Link>
      </div>
    </div>
  );
};

export default StudentList;
