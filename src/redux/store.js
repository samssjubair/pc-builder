import { configureStore } from "@reduxjs/toolkit";
import builderSlice from "./features/builder/builderSlice";

export const store = configureStore({
  reducer: {
    builder: builderSlice,
  },
});
