import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Item from './pages/Item';


function App() {

  return (

    <Router>

      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">eCommerce</a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>

        <main>
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