import React from "react";
import {useForm} from "react-hook-form";
import {axiosWithAuth} from "../utils/axiosWithAuth";

const AddStudent = () => {
        const { handleSubmit, register, errors } = useForm();

        const onSubmit = values => {
            console.log(values)
            // axiosWithAuth()
            // .post(`/api/students`, {
            //     name: values.name, 
            //     email: values.email, 
            //     professor_id: localStorage.getItem(professorID)})
            // .then(res => {
            //     console.log(res)
            // })
            // .catch(err => {
            //     console.log(err)
            // })
        }

    return (
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
            {errors.username && errors.username.message}

            <button type="submit">Add Student</button>
        </form>
    )
}

export default AddStudent;