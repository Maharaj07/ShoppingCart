import { createSlice } from '@reduxjs/toolkit';
const cartSlice = createSlice({
  name: 'cartItems',
  initialState: {
    cartitem: [],
    status: 'idle',
    error: null
  },
  reducers: {
    add(state, action) {
      state.cartitem.push(action.payload)
    },
    remove(state, action) {
      state.cartitem = state.cartitem.filter((e) => e.id !== action.payload)
    },
     increaseQty(state, action) {
      const itemId = action.payload;
      const updatedCartItems = state.cartitem.map((item) => {
        if (item.id === itemId) {
          if (item.quantity === undefined) {
            // If quantity doesn't exist, initialize it to 0
            return {
              ...item,
              quantity: 1, // You can set it to 1 if you want to start from 1
            };
          } else {
            // Increase the quantity
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
        } else {
          // Return the original item if it doesn't match itemId
          return item;
        }
      });
    console.log(updatedCartItems);
      state.cartitem = updatedCartItems;
    },
    
    decreaseQty(state, action) {
      const itemId = action.payload;
      const updatedCartItems = state.cartitem.map((item) => {
        if (item.id === itemId && item.quantity > 1) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });
      state.cartitem = updatedCartItems;
    }


  }
})
export const { add, remove, increaseQty,decreaseQty } = cartSlice.actions;
export default cartSlice.reducer;