import React, { useState } from 'react';
import axios from "axios";
import './Signup.css';

function Login(props) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signupFormHandler = (event) => {
        event.preventDefault();

        if (email && password) {
            axios.post('/api/users/login', {
                email,
                password
            })
                .then((response) => {
                    const userData = response && response.data ? response.data : '';
                    //save the token and the user
                    localStorage.setItem("user", JSON.stringify(userData));
                    props.history.push("/");
                    window.location.reload();
                }).catch((err) => {
                    alert(err.response.data);
                })
        }
    };

    return (
        <main>
            <div className="col-1">
                <form onSubmit={(e) => signupFormHandler(e)} className="card-body card">
                    <div>
                        <h3> Login </h3>
                    </div>
                    <div className="row ">
                        <label for="text" type="input" className="form-label">Email</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="email-login" />
                    </div>

                    <div class="row ">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="password-login" />
                    </div>
                    <div class="row ">
                        <label>Welcome Back</label >
                        <input type="submit" value="Login" className="   " />
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Login;
