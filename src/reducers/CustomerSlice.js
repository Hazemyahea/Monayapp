import { createSlice } from "@reduxjs/toolkit";

const CustomerSlice = createSlice({
  name: "customer",
  initialState: {
    name: "",
    password: "",
  },
  reducers: {
    CreateCustomer(state, action) {
      state.name = action.payload;
    },
    CreatePassword(state, action) {
      state.password = action.payload;
    },
    deletePost(state, action) {},
  },
});

export const { CreateCustomer, CreatePassword } = CustomerSlice.actions;

export default CustomerSlice.reducer;
