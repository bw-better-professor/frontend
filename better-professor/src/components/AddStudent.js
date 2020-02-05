import React from "react";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";

import {axiosWithAuth} from "../utils/axiosWithAuth";

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
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="email"
                    placeholder="email"
                    ref={register({
                    required: 'Required',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "invalid email address"
                    }
                    })}
                />
                {errors.email && errors.email.message}

                <input
                    name="name"
                    placeholder="name"
                    ref={register({
                        required: "Required",
                        validate: value => value !== "admin" || "Nice try!"
                    })}
                />
                {errors.name && errors.name.message}

                <button type="submit">Add Student</button>
            </form>
        )}
        
        </>
    )
}

export default AddStudent;