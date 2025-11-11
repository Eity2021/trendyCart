import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
};;

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.cartItems.find(
                (x) => x._id === item._id
            );

            if (existingItem) {
                existingItem.quantity += 1; // Increase quantity
            } else {
                state.cartItems.push({ ...item, quantity: 1 });
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (x) => x._id !== action.payload
            );
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        clearCart: (state) => {
            state.cartItems = [];
            localStorage.removeItem("cartItems");
        },
    },
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;