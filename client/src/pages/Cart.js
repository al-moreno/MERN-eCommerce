import React from 'react'

export default function Cart() {
    return (
        <main>
            <div className="col-1">
                <form className="card-body card">

                    <div>
                        <h3> Login </h3>
                    </div>
                    <div class="row ">
                        <label for="text" type="input" class="form-label">Username</label>
                        <input type="username" class="form-control" id="name-signup" />
                    </div>

                    <div class="row ">
                        <label for="exampleInputEmail1" class=" form-label">Email address</label>
                        <input type="email" class="form-control" id="email-signup" aria-describedby="emailHelp" />
                    </div>


                    <div class="row ">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password-signup" />

                    </div>

                    <div class="row ">
                        <label>Welcome Back</label >
                        <input type="submit" value="Login" className="   " />

                    </div>



                    <h3> Sign Up </h3>






                    <div class="row">

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
    )
}
