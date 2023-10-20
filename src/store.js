import { configureStore } from "@reduxjs/toolkit";
import CustomerSlice from "./reducers/CustomerSlice";
import MoneySlice from "./reducers/MoneySlice";
const store = configureStore({
  reducer: {
    CustomerSlice: CustomerSlice,
    MoneySlice: MoneySlice,
  },
});

export default store;
