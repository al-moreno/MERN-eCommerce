import React from 'react';



function Login() {

    const signupFormHandler = async (event) => {
        event.preventDefault();

        
        if (name && email && password) {
            const response = await fetch('/api/users', {
                method: 'POST',
                body: JSON.stringify({ username: name, email: email, password: password }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                document.location.replace('/');
            } else {
                alert(response.statusText);
            }
        }
    };





    return (
        <main>
            <div className="col-1">
                <form className="card-body card">

                    <div>
                        <h3> Login </h3>
                    </div>
                    <div className="row ">
                        <label for="text" type="input" className="form-label">Username</label>
                        <input type="username" className="form-control" id="name-signup" />
                    </div>

                    <div class="row ">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password-signup" />
                    </div>
                    <div class="row ">
                        <label>Welcome Back</label >
                        <input type="submit" value="Login" className="   " />
                    </div>
                    <h3> Sign Up </h3>
                    <div className="row">
                    </div>
                    <div className="row">
                        <label> First Name </label>
                        <input type="text" name="firstname" className="   " />
                    </div>
                    <div className="row">
                        <label> Last Name </label>
                        <input type="text" name="lastname" className="   " />
                    </div>
                    <div className="row">
                        <label> Email Address </label>
                        <input type="email" name="email" className="   " />
                    </div>
                    <div className="row">
                        <label> Username </label>
                        <input type="text" name="username" className="   " />
                    </div>
                    <div className="row">
                        <label> Password </label>
                        <input type="password" name="password" className="   " />
                    </div>
                    <div className="row">
                        <label><input type="checkbox" name="terms" /> I agree with the <a href="#"> Terms and Conditions </a></label >
                        <input type="submit" value="Sign up" className="   " />
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Login;


