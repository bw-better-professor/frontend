import React, {useState, useEffect} from "react";
import {useForm} from "react-hook-form";
import {useParams, useHistory} from "react-router-dom";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import {LoginForm} from "./styled-components";

const EditStudent = () => {
    const { handleSubmit, register, errors } = useForm();
    const history = useHistory();
    const {id} = useParams();

    const [studentState, setStudentState] = useState({
        name: "",
        email: "",
        image_url: ""
      });

    const onSubmit = values => {
        console.log(values)

        axiosWithAuth()
        .put(`/api/students/${id}`, {
            name: studentState.name, 
            email: studentState.email
            })
        .then(res => {
            console.log("edit student successfull");
            history.push(`/student/${id}`)

        })
        .catch(err => {
            console.log(err)
        })
    }

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
      }, [id])

      const handleChanges = e => {
          const value = e.target.value;

          setStudentState({...studentState,
            [e.target.name]: value
        })
      }

return (
    <>
    {localStorage.getItem("professorID") && localStorage.getItem("token") && (
        <LoginForm>
            <span className="goBack" onClick={()=>history.push(`/student/${id}`)}>Back to Student Details</span>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Edit Student</h1>
                <label htmlFor="email">Student Email</label>
                <input
                    id="email"
                    name="email"
                    placeholder="email"
                    onChange={handleChanges}
                    value={studentState.email}
                    ref={register({
                    required: 'Required',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "invalid email address"
                    }
                    })}
                />
                {errors.email && errors.email.message}
                <label htmlFor="name">Student Name</label>
                <input
                    id="name"
                    name="name"
                    placeholder="name"
                    onChange={handleChanges}
                    value={studentState.name}
                    ref={register({
                        required: "Required",
                        validate: value => value !== "admin" || "Nice try!"
                    })}
                />
                {errors.name && errors.name.message}

                <button type="submit">Save Edit</button>
            </form>
        </LoginForm>
    )}
    
    </>
)
}

export default EditStudent;