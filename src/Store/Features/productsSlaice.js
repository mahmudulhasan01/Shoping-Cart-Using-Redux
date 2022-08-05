import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fatchProducts = createAsyncThunk(
  "products / fatchProducts",
  async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    console.log(res.data);
    return res.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    products: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fatchProducts.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fatchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
      state.products = action.payload;
      console.log(action.payload);
      state.error = null;
    });
    builder.addCase(fatchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});

export default productsSlice.reducer;
