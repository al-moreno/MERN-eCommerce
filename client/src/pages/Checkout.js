import React from 'react'

function Checkout() {
    return (
        <main>
        <div className="col-1">
            
            <form className="card-body card">

           



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

export default Checkout
