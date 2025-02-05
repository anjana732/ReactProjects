import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/storeSlice"

export const store = configureStore({
    reducer: todoReducer
})