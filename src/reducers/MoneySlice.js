import { createSlice } from "@reduxjs/toolkit";

const Money = createSlice({
  name: "money",
  initialState: {
    Money: 0,
    resaon: "",
    status: "",
    data: [],
  },
  reducers: {
    addAmout: {
      prepare(amount, reason, status) {
        return {
          payload: { amount, reason, status },
        };
      },
      reducer(state, action) {
        state.Money = state.Money + action.payload.amount;
        state.resaon = action.payload.reason;
        state.status = action.payload.status;
        state.data.unshift({
          id: state.data.length + 1,
          amount: action.payload.amount,
          reason: action.payload.reason,
          status: action.payload.status,
          date: new Date()
            .toISOString()
            .replace("-", "/")
            .split("T")[0]
            .replace("-", "/"),
        });
      },
    },
    Takeamount: {
      prepare(amount, reason, status) {
        return {
          payload: { amount, reason, status },
        };
      },
      reducer(state, action) {
        state.Money = state.Money - action.payload.amount;
        state.resaon = action.payload.reason;
        state.status = action.payload.status;
        state.data.unshift({
          id: state.data.length + 1,
          amount: action.payload.amount,
          reason: action.payload.reason,
          status: action.payload.status,
          date: new Date()
            .toISOString()
            .replace("-", "/")
            .split("T")[0]
            .replace("-", "/"),
        });
      },
    },
    deleteByid(state, action) {
      state.data = state.data.filter((state) => state.id != action.payload);
    },
    takefromBalance(state, action) {
      state.Money = state.Money - action.payload;
    },
    AddToBalance(state, action) {
      state.Money = state.Money + action.payload;
    },
  },
});

export const {
  addAmout,
  addReason,
  Takeamount,
  deleteByid,
  takefromBalance,
  AddToBalance,
} = Money.actions;

export default Money.reducer;
