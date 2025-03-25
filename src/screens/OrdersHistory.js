
import React from 'react';
import { useSelector } from 'react-redux';

const OrdersHistory = () => {
  const orders = useSelector((state) => state.cart.orders);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">📜 Order History</h2>

      {orders.length === 0 ? (
        <div className="alert alert-info text-center">No orders yet</div>
      ) : (
        <div className="list-group">
          {orders.map((order) => (
            <div key={order.orderNo} className="list-group-item list-group-item-action">
              <h5>Order No: <span className="text-success">{order.orderNo}</span></h5>
              <p>Date: {order.dateTime}</p>
              <h6 className="text-end">Total: <span className="text-danger fw-bold">${order.totalAmount}</span></h6>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersHistory;
