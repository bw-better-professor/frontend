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
import {CardList} from './styled-components';
import './styles.css';

const StudentList = () => {
  const [studentState, setStudentState] = useState([]);

  const id = localStorage.getItem("professorID");

  useEffect(() => {
    axiosWithAuth()
      .get(`api/users/${id}/students`)
      .then(res => {
        setStudentState(res.data);
        console.log(res.data);
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
    <div>
      <div className="addStudentPage">
        <Link to="/addstudent" className="studentLink2">
          <Button className="addStudentBtn"> Add Student </Button>
        </Link>
        <CardList>
          {studentState.map(student => {
            return (
              
              <Link to={`/student/${student.studentId}`} key={student.studentId} className="studentLink">
                <Card style={cardStyle} className="hoverEffect">
                  {/* <CardImg style={{paddingTop: "15px"}} src={student.image_url} alt="card-group" /> */}
                  <CardBody style={cardBodyStyle}>
                    <CardTitle>Name: {student.name}</CardTitle>
                    <CardText className="cardText">Email: {student.email}</CardText>
                  </CardBody>
                </Card>
              </Link>
            );
          })}
        </CardList>
      </div>
    </div>
  );
};

export default StudentList;
