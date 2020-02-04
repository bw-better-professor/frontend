import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import Axios from "axios";

const LoginBasic = () => {
    const history = useHistory();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUserChanges = e => {
        setUsername(e.target.value);
    }

    const handlePwChanges = e => {
        setPassword(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        Axios
        .post(`https://betterprofessor25.herokuapp.com/api/auth/register`, {username, password})
        .then(res=> {
            console.log("successfully created a user.", res);
            history.push(`/login`);
        })
        .catch(err=>{
            console.log(err, "failed to register")
        })
    }

    return (
        <div>
            <input type="text" onChange={handleUserChanges} value={username} placeholder="username"/>
            <input type="password" onChange={handlePwChanges} value={password} placeholder="password"/>
            <button onClick={handleSubmit}>Create User</button>
        </div>
    )
}

export default LoginBasic;