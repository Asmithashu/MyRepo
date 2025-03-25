
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductsScreen from './screens/ProductsScreen';
import CartScreen from './screens/CartScreen';
import OrdersHistory from './screens/OrdersHistory';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">🛍️ Shopping Cart</Link>
            <div className="navbar-nav">
              <Link className="nav-link" to="/">Products</Link>
              <Link className="nav-link" to="/cart">Cart</Link>
              <Link className="nav-link" to="/orders">Orders</Link>
            </div>
          </div>
        </nav>
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<ProductsScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/orders" element={<OrdersHistory />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
