import { createSlice, current } from "@reduxjs/toolkit";
import { FakeApiThunk } from "./FakeApiThunk";

const CartSlice = createSlice({
  name: "cart-data",
  initialState: {
    items: [],
    fakeUsers: {
      loading: false,
      usersData: null,
      error: null,
    },
  },
  reducers: {
    addItem: (state, action) => {
      console.log(action.payload);
      // card?.info.id
      const dataitems = state.items?.some(
        (x) => x?.card?.info.id === action.payload?.card?.info?.id,
      );
      if (!dataitems) {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearItems: (state) => {
      state.items.length = 0;
      // we can do
      // state.items.length = 0 ( it updates the original state (immer in draft))
      // or return {items:[]} (it replaces the state data)

      // We Cannot do like this => state = [] (its treats as a new variable);
    },
  },

  //asynchronous api calls handling...
  //to handle the async api life cycle actions - extra reducers
  extraReducers: (builder) => {
    console.log(builder)
    builder
      .addCase(FakeApiThunk.pending, (state) => {
        state.fakeUsers.loading = true;
      })
      .addCase(FakeApiThunk.fulfilled, (state, action) => {
        state.fakeUsers.loading = false;
        state.fakeUsers.usersData = action.payload;
        state.fakeUsers.error = "";
      })
      .addCase(FakeApiThunk.rejected, (state, action) => {
        state.fakeUsers.loading = false;
        state.fakeUsers.error = action.error;
      });
  },
});

export const { addItem, removeItem, clearItems } = CartSlice.actions;
export default CartSlice.reducer;
