import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedComponents: {
    CPU: null,
    Mouse: null,
    Ram: null,
    Keyboard: null,
    Storage: null,
    Monitor: null,
  },
};


const builderSlice = createSlice({
  name: "builder",
  initialState,
  reducers: {
    selectComponent: (state, action) => {
      const { category, component } = action.payload;
      state.selectedComponents[category] = component;
    },
    clearComponent: (state, action) => {
      const { category } = action.payload;
      state.selectedComponents[category] = null;
    },
  },
});

export const { selectComponent, clearComponent } = builderSlice.actions;

export default builderSlice.reducer;