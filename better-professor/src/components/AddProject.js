import React, {useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import {LoginForm} from "./styled-components";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import "./styles.css";
import "../App.css";

const initialState = {
    student_id: "",
    title: "",
    due_date: "",
    reminder_time: "",
    notes: ""
}

const AddProject = (props) => {
    const history = useHistory();
    const {id} = useParams();
    const [project, setProject] = useState(initialState);

    const handleChanges = e => {
        const value = e.target.value;

        setProject({
            ...project,
            [e.target.name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post(`/api/projects`, {
            student_id: id,
            title: project.title,
            due_date: project.due_date,
            reminder_time: project.reminder_time,
            notes: project.notes
        })
        .then(res => {
            console.log("add project successfull")
            history.push(`/student/${id}`)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <>
        {localStorage.getItem("professorID") && localStorage.getItem("token") && (
            <LoginForm>
                <span className="goBack" onClick={()=>history.push(`/student/${id}`)}>Back to Student Details</span>
                <div className="pageContainer2">
                    <div className="sectionContainer1">
                <form className="loginForm2">
                    <h1>Add Project</h1>
                    <label htmlFor="title">Title</label>
                    <input className="styleInput2" id="title" type="text" onChange={handleChanges} name="title" value={project.title} placeholder="Enter Title Here"/>
                    <label htmlFor="due_date">Due Date</label>
                    <input className="styleInput2" id="due_date" type="date" onChange={handleChanges} name="due_date" value={project.due_date} placeholder="Set Due Date"/>
                    <label htmlFor="reminder_time">Reminder Time</label>
                    <input className="styleInput2" id="reminder_time" type="time" onChange={handleChanges} name="reminder_time" value={project.reminder_time} placeholder="Set Reminder Time"/>
                    <label htmlFor="notes">Notes</label>
                    <input className="styleInput2" id="notes" type="textarea" onChange={handleChanges} name="notes" value={project.notes} placeholder="Enter Notes Here"/>
                    <button type="submit2" onClick={handleSubmit}>Add Project</button>
                </form>
                </div>
                <div className="sectionContainer2">
            <div id="signUp">
        {/* Sign Up Graphic Here */}
      </div>
            </div>
                </div>
            </LoginForm>
        )}
        
        </>
    )
}

export default AddProject;