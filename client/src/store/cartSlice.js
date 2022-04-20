import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemList: [],
  totalQuantity: 0,
  userCart: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;

      const existingItem = state.itemList.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemList.push({
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          id: newItem.id,
          name: newItem.name,
          thumbnailUrl: newItem.thumbnailUrl,
          weight: newItem.weight,
        });

        state.totalQuantity++;
      }
    },

    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.itemList.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        existingItem.quantity--;
        state.itemList = state.itemList.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    saveUserCart(state, action) {
      state.userCart = state.itemList;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
