// Packages and classes
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

// Pages
import { CatStore } from "./pages/CatStore";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import Cart from "./pages/Cart";
import { Product } from "./pages/Product";

// Components
import CartIcon from "./Components/CartIcon";

// Style
import './App.css';

class App extends React.Component {
  render() {
    return (
    <Router>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">Cat Store</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
          <CartIcon />
        </nav>
        <Route path="/" component={CatStore} exact />
        <Route path="/products" component={Products} exact />
        <Route path="/products/:id" component={Product} />
        <Route path="/home" component={Home} />
        <Route path="/cart" component={Cart} />
      </div>
    </Router>
    )
  }
}

function AppWithStore() {
  return <Provider store={store}>
    <App />
  </Provider>
}

export default AppWithStore;
