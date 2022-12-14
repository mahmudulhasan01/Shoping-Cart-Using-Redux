import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Features/cardSlice";
import productsReducer from "./Features/productsSlaice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});

export default store;
// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from './cartSlice';
// import productReducer from './productSlice';
// const store = configureStore({
//     reducer: {
//         cart: cartReducer,
//         product: productReducer,
//     },
// });

// export default store;
