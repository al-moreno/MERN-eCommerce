import React from 'react'


function Checkout() {
    return (
        <main>
            <div className="col-1">
                <form className="card-body card">
                    <h3> Checkout</h3>
                    <div class="row">
                    </div>
                    <div className="row">
                        <label> Country: </label>
                        <input type="text" name="country" className="   " />
                    </div>
                    <div className="row">
                        <label> First Name: </label>
                        <input type="text" name="firstname" className="   " />
                    </div>
                    <div className="row">
                        <label> Last Name: </label>
                        <input type="text" name="lastname" className="   " />
                    </div>
                    <div className="row">
                        <label> Mailing Address: </label>
                        <input type="text" name="mailingaddress" className="   " />
                    </div>
                    <div className="row">
                        <label> City: </label>
                        <input type="text" name="city" className="   " />
                    </div>
                    <div className="row">
                        <label> State: </label>
                        <input type="text" name="state" className="   " />
                    </div>
                    <div className="row">
                        <label> Zip / Postal Code: </label>
                        <input type="text" name="zip" className="   " />
                    </div> 
                    <div className="row">
                        <label> Phone Number: </label>
                        <input type="text" name="phone" className="   " />
                    </div>
                    <div className="row">
                        <label> Email Address: </label>
                        <input type="email" name="email" className="   " />
                    </div>
    
                    <div className="row">
    
                        <input type="submit" value="Secure Payment" className="payment" />
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Checkout;
