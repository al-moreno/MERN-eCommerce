import React, {useState, useEffect }from 'react'
import {BrowserRouter as Router, Route, Link, useLocation} from 'react-router-dom';
import Home from '../pages/Home';
import Item from '../pages/Item';
import SignUp from '../pages/Signup';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Login from "../pages/Login";
import cartService from "./cart";
import logo from '../components/download.png'

const styles ={

SignUp:{
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
    gridTemplateRows: "10rem 65rem 4rem",
    gridTemplateAreas:
    `'header header header header header header header header'
    '. . main main main main . .'
    'footer footer footer footer footer footer footer footer'`,
    height: "100%"
  
},

Home:{
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridTemplateRows: "10rem auto 4rem",
    gridTemplateAreas:
    `'header header header header header header'
    'main main main main main main '
    'footer footer footer footer footer footer'`,
    height: "100%"
  },
};

export default function Routes() {

    const [verified, setVerified] = useState(false);
	const [userName, setUserName] = useState(false);
	const [cartSize, setCartSize] = useState(0);
    const location = useLocation ();

	const logout = () => {
		//clear the user info and reload page
		localStorage.removeItem("user");
		localStorage.removeItem("cart");
		window.location.reload();
	}

	const updateCartTotal = () => {
		const subscription = cartService.cartCount().subscribe((cartSize) => {
			setCartSize(cartSize);
		});

		return () => { subscription.unsubscribe(); };
	}

	useEffect(() => {
		//check to see if the person is logged in
		const user = JSON.parse(localStorage.getItem('user'));
		//verify the token exists
		if (user && user.token){
			setVerified(true);
			setUserName(user.user.firstName);
		}

		updateCartTotal();

		cartService.checkCart();
	},[]);

    return (
        <div>
            <div style={location.pathname === "/" ?  styles.Home  : styles.SignUp}className="grid-container">
<header className="row">
    <div>
        <Link to="/" className="brand"> <img src={logo} alt="logo" />  </Link>
    </div>
    <div>
        {verified ? <span className="welcome">Welcome {userName}!</span> : <Link to="/signup"> Sign Up</Link>}
        {!verified ? <Link to="/login">Login</Link> : '' }
        <Link to="/cart"> Cart ({cartSize}) </Link>
        {verified ? <span onClick={() => logout()} className="logout">Logout</span> : '' }
    </div>
</header>

<main>
    <Route exact path="/checkout" component={Checkout}/>
    <Route exact path="/cart" component={Cart}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/signup" component={SignUp}/>
    <Route exact path="/" component={Home}/>
    <Route exact path="/item/:id" component={Item}/>
</main>

<footer className="row center">All Rights Reserved
</footer>
</div>
        </div>
    )
}
