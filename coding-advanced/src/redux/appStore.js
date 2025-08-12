import {configureStore} from "@reduxjs/toolkit"
import cartReduser from "../redux/Slices/cartSlice"
const appStore = configureStore({
  reducer: {
    cart: cartReduser
  }
});

export default appStore;