import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import Item from './pages/Item';
import SignUp from './pages/Signup';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from "./pages/Login";
import cartService from "./components/cart";
import Routes from "./components/Routes";


function App() {
	
	return (

		<Router>
			<Routes />
		</Router>

	);
}

export default App;
