import React from 'react';
import data from './data';
import Item from './components/Item'


function App() {

  return (
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
        <div className="row center">
          {
            data.items.map((item) => (


              <Item key={item.id} item={ item } />

            ))
          }
        
        </div>
      </main>

      <footer className="row center">All Rights Reserved

    </footer>
    </div>
  );
}

export default App;