import {configureStore} from "@reduxjs/toolkit"
import cartReduser from "./slices/cartSlice"
const appStore = configureStore({
  reducer: {
    cart: cartReduser
  }
});

export default appStore;