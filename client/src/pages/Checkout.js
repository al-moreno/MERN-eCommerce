import React from 'react'


function Checkout() {
    return (
        <main>
            <div className="col-1">
                <form className="card-body card">
                    <h3> Checkout</h3>
                    <br />
                    <div class="row">
                    </div>
                    <div className="row">
                        <label>Email: </label>
                        <input type="email" name="email" className="   " />
                    </div>
                    <br />
                    
                    <div className="row">
                        <label > Credit Information: </label>
                        <input type="text" name="firstname" className="   " />
                        
                    </div>
                    <br />
                    <div className="row">
                        <label> EXP / CVC </label>
                        <input type="text" name="lastname" className="   " />
                        <input type="text" name="lastname" className="   " />
                    </div>

                    <div>
                        <label><input type="checkbox" name="terms" /> Keep on file</label>
                    </div>
                    <br />
                    <div className="row">
                        <label> Name on Card: </label>
                        <input type="text" name="mailingaddress" className="   " />
                    </div>
                    <br />
                    <div className="row">
                        <label> State: </label>
                        <input type="text" name="state" className="   " />
                    </div>
                    <br />
                    <div className="row">
                        <label> Zip / Postal Code: </label>
                        <input type="text" name="zip" className="   " />
                    </div> 
                    
    
                    <div className="row">
    
                        <input type="submit" value="Submit Payment" className="payment" />
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Checkout;
