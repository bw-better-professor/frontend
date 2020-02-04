import React, {useState} from "react";
import {useHistory} from "react-router-dom";

import {axiosWithAuth} from "../utils/axiosWithAuth";


const initialState = {
    student_id: "",
    title: "",
    due_date: "",
    reminder_time: "",
    notes: ""
}

const AddProject = (props) => {
    const history = useHistory();
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
            student_id: 1,
            title: project.title,
            due_date: project.due_date,
            reminder_time: project.reminder_time,
            notes: project.notes
        })
        .then(res => {
            console.log("add project successfull")
            history.push("/dashboard")
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <>
        {localStorage.getItem("professorID") && localStorage.getItem("token") && (
            <div>
                <input type="text" onChange={handleChanges} name="title" value={project.title} placeholder="title"/>
                <input type="text" onChange={handleChanges} name="due_date" value={project.due_date} placeholder="due date"/>
                <input type="text" onChange={handleChanges} name="reminder_time" value={project.reminder_time} placeholder="reminder time"/>
                <input type="text" onChange={handleChanges} name="notes" value={project.notes} placeholder="notes"/>
                <button onClick={handleSubmit}>Add Project</button>
            </div>
        )}
        
        </>
    )
}

export default AddProject;