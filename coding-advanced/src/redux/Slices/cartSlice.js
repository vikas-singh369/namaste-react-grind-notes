import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action)=>{
      // logic don't duplicate increase the count only 
      state.items.push(action.payload);
    },

    clearCart: (state)=>{
      state.items.length = 0 // it means empty
      // Note: we directly not that items = []
    }
  }
})

export const {
  addItem,
  clearCart
}  = cartSlice.actions

export default cartSlice.reducer;
