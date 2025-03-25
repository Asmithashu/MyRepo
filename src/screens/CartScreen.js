
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkout } from '../redux/cartSlice';

const CartScreen = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">🛒 Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="alert alert-warning text-center">Cart is empty</div>
      ) : (
        <div className="card p-3">
          {cartItems.map((item) => (
            <div key={item.id} className="d-flex justify-content-between align-items-center border-bottom py-2">
              <p className="mb-0">{item.title} (x{item.qty})</p>
              <p className="fw-bold text-primary mb-0">${item.price * item.qty}</p>
            </div>
          ))}
          <h4 className="text-center mt-3">Total: <span className="text-success">${totalAmount}</span></h4>
          <button className="btn btn-primary w-100 mt-3" onClick={() => dispatch(checkout())}>
            ✅ Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartScreen;
