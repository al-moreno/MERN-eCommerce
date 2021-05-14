import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import Item from './pages/Item';
import SignUp from './pages/Signup';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';



function App() {

  return (

    <Router>

      <div className="grid-container">
        <header className="row">
          <div>
            <Link to="/" className="brand" > eCommerce </Link>
          </div>
          <div>
            <Link to="/cart"> Cart </Link>
            <Link to="/signup"> Sign In</Link>
          </div>
        </header>

        <main>
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={Home} />
          <Route exact path="/item/:id" component={Item} />
        </main>

        <footer className="row center">All Rights Reserved
        </footer>
      </div>
    </Router>

  );
}

export default App;