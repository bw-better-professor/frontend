import React, {useState, useEffect} from "react";
import {useHistory, useParams} from "react-router-dom";
import {axiosWithAuth} from "../utils/axiosWithAuth";


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
            history.push(`/student/${project.student_id}`)
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
                <button onClick={handleSubmit}>Save Project</button>
            </div>
        )}
        
        </>
    )
}

export default EditProject;