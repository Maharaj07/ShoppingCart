import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

export const userSlice = createSlice({
  name: 'users',
  initialState: { user: [] },
  reducers: {
    addUser(state, action) {
      const { email, password, name, id, cartitem } = action.payload;
      const existingUser = state.user.find(user => user.email === email);
      if (!existingUser) {
        state.user.push({ email, password, id, name, cartitem }); // Include an empty cartitem array
      } else {
        alert('User with the same email already exists');
      }
    },
    addd(state, action) {
      const { login, cart } = action.payload;
      const userIndex = state.user.findIndex((user) => user.id === login.id);
      if (userIndex !== -1) {
      const user = state.user[userIndex];
        const productIndex = user.cartitem.findIndex(
          (product) => product.id === cart.id
        );
        if (productIndex !== -1) {
          user.cartitem[productIndex].quantity += cart.quantity;
        } else {
          // Product doesn't exist in the user's cart, add it
          user.cartitem.push(cart);
          toast.success(`${cart.title} is  added successfully`, {
            position: "top-left",
          });
        }
      }
      return state; // Return the updated state
    },
    removee(state, action) {
      const { login, cartItemId } = action.payload;
      const userIndex = state.user.findIndex((user) => user.id === login.id);
      console.log(userIndex);
      if (userIndex !== -1) {
        const user = state.user[userIndex];
        const productIndex = user.cartitem.findIndex(
          (product) => product.id === cartItemId
        );
        console.log(productIndex);
        if (productIndex === -1) {

          // Remove the cart item from the user's cart
          user.cartitem.splice(productIndex, 1);
          toast.warning(`Cart item removed successfully`, {
            position: "bottom-right",
          });
        }
      }
      return state; // Return the updated state
    },
    
    
    decreaseCart(state, action) {

      const { login, cartItemId } = action.payload;

      const userIndex = state.user.findIndex((user) => user.id === login.id);

 

      if (userIndex !== -1) {

        const user = state.user[userIndex];

        const productIndex = user.cartitem.findIndex(

          (product) => product.id === cartItemId

        );

 

        if (productIndex !== -1) {

          const product = user.cartitem[productIndex];

 

          // Decrease the quantity of the item by one

          if (product.quantity > 1) {

            product.quantity -= 1;

          } else {

            // If the quantity is 1, remove the item from the cart

            user.cartitem.splice(productIndex, 1);

          }

 

          toast.info(`Cart item updated successfully`, {

            position: "bottom-center",

          });

        }

      }

    },
  }

  
});

export const { addUser, addd,removee,decreaseCart } = userSlice.actions;
export default userSlice.reducer;
