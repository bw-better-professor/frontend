import React, {useState, useEffect} from "react";
import {useHistory, useParams} from "react-router-dom";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import {LoginForm} from "./styled-components";


const initialState = {
    student_id: "",
    title: "",
    due_date: "",
    reminder_time: "",
    notes: ""
}

const EditProject = (props) => {
    const history = useHistory();
    const {id} = useParams();
    const [project, setProject] = useState(initialState);

    const handleChanges = e => {
        setProject({
            ...project,
            [e.target.name]: e.target.value
        })
    }

    useEffect(()=>{
        axiosWithAuth()
        .get(`api/projects/${id}`)
        .then(res=>{
            setProject({
                student_id: res.data.student_id,
                title: res.data.title,
                due_date: res.data.due_date,
                reminder_time: res.data.reminder_time,
                notes: res.data.notes
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .put(`api/projects/${id}`, {
            student_id: project.student_id,
            title: project.title,
            due_date: project.due_date,
            reminder_time: project.reminder_time,
            notes: project.notes
        })
        .then(res => {
            console.log("edit project successfull")
            history.push(`/student/${project.student_id}/${id}`)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="pageContainer">
        {localStorage.getItem("professorID") && localStorage.getItem("token") && (
            <LoginForm>
                <span className="goBack" onClick={()=>history.push(`/student/${project.student_id}/${id}`)}>Back to Project Details</span>
                
                <form className="loginForm">
                    <h1>Edit Project</h1>
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" onChange={handleChanges} name="title" value={project.title} placeholder="Enter Title Here"/>
                    <label htmlFor="due_date">Due Date</label>
                    <input id="due_date" type="date" onChange={handleChanges} name="due_date" value={project.due_date} placeholder="Set Due Date"/>
                    <label htmlFor="reminder_time">Reminder Time</label>
                    <input id="reminder_time" type="time" onChange={handleChanges} name="reminder_time" value={project.reminder_time} placeholder="Set Reminder Time"/>
                    <label htmlFor="notes">Notes</label>
                    <input id="notes" type="textarea" onChange={handleChanges} name="notes" value={project.notes} placeholder="Enter Notes Here"/>
                    <button type="submit" onClick={handleSubmit}>Save Edit</button>
                </form>
            </LoginForm>
        )}
        
        </div>
    )
}

export default EditProject;