import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    orders: JSON.parse(localStorage.getItem('orders')) || [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find((product) => product.id === action.payload.id);
      if (item) {
        item.qty += 1;
      } else {
        state.cartItems.push({ ...action.payload, qty: 1 });
      }
    },
    checkout: (state) => {
      const order = {
        orderNo: `ORD-${Date.now()}`,
        dateTime: new Date().toLocaleString(),
        totalAmount: state.cartItems.reduce((sum, item) => sum + item.price * item.qty, 0),
        items: state.cartItems,
      };
      state.orders.push(order);
      localStorage.setItem('orders', JSON.stringify(state.orders));
      state.cartItems = [];
    },
  },
});

export const { addToCart, checkout } = cartSlice.actions;
export default cartSlice.reducer;
