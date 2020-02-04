import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import Axios from "axios";

const LoginBasic = () => {
    const history = useHistory();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleUserChanges = e => {
        setUsername(e.target.value);
    }

    const handlePwChanges = e => {
        setPassword(e.target.value);
    }

    const handleLogin = e => {
        e.preventDefault();
        Axios
        .post(`https://betterprofessor25.herokuapp.com/api/auth/login`, {username, password})
        .then(res=> {
            console.log("login successfull")
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("professorID", res.data.id);
            history.push("/dashboard")
            setMessage("")
        })
        .catch(err=>{
            console.log(err, "failed to login")
            setMessage("Failed to login. Please try again.")
        })
    }

    const logout = e => {
        window.location.reload();
        localStorage.removeItem("token");
        localStorage.removeItem("professorID");
    }

    return (
        <div>
            {!localStorage.getItem("professorID") && !localStorage.getItem("token") && (
                <>
                <input type="text" onChange={handleUserChanges} value={username} placeholder="username" />
                <input type="password" onChange={handlePwChanges} value={password} placeholder="password" />
                <button onClick={handleLogin}>Login</button>
                </>
            )}
            {localStorage.getItem("professorID") && localStorage.getItem("token") && (
                <>
                    <button onClick={logout}>Logout</button>
                </>
            )}
                
            
            {message !== "" && (<div>{message}</div>)}
        </div>
    )
}

export default LoginBasic;