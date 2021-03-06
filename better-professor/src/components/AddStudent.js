import React from "react";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import {LoginForm} from "./styled-components";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import "./styles.css";
import "../App.css";

const AddStudent = () => {
        const { handleSubmit, register, errors } = useForm();
        const history = useHistory();

        const onSubmit = values => {
            const professorID = parseInt(localStorage.getItem("professorID"));
            axiosWithAuth()
            .post(`/api/students`, {
                professor_id: professorID,
                name: values.name, 
                email: values.email
                })
            .then(res => {
                console.log("add student successfull");
                history.push("/dashboard")

            })
            .catch(err => {
                console.log(err)
            })
        }

    return (
        <>
        {localStorage.getItem("professorID") && localStorage.getItem("token") && (
            <LoginForm>
            <span className="goBack" onClick={()=>history.push("/dashboard")}>Back to Student List</span>
            <div className="pageContainer2">
                <div className="sectionContainer2">
            <form className="loginForm2" onSubmit={handleSubmit(onSubmit)}>
                <h1>Add Student</h1>

                <label htmlFor="name">Student Name</label>
                <input 
                    className="styleInput2"
                    id="name"
                    name="name"
                    placeholder="Student Name Here"
                    ref={register({
                        required: "Required",
                        // validate: value => value !== "admin" || "Nice try!"
                    })}
                />
                {errors.name && errors.name.message}

                <label htmlFor="email">Student Email</label>
                <input
                    className="styleInput2"
                    id="email"
                    name="email"
                    placeholder="Student Email Here"
                    ref={register({
                    required: 'Required',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "invalid email address"
                    }
                    })}
                />
                {errors.email && errors.email.message}

                

                <button type="submit2">Add Student</button>
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

export default AddStudent;