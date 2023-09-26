import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Category from './pages/Category';
import CartPage from './pages/CartPage';

const App = () => {
  // Define your items and cart state here
  const [items, setItems] = useState([]); // Initialize with your items data
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <Home items={items} />} />
          <Route path="/category/:category" render={({ match }) => <Category items={items} category={match.params.category} />} />
          <Route path="/cart" render={() => <CartPage cartItems={cartItems} />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;