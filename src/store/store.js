import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
//  CONFIGURATION TO STORE ALL SLICES IN STORE // a store é o parametro do Provider que da wrap a toda a App
export const store = configureStore({
    reducer: {
        cartState: cartReducer
    }
});

