import { configureStore } from "@reduxjs/toolkit";
import counterSlice  from "../features/counterSlice";
import userSlice from "../features/users/userSlice";

export const store=configureStore({
    reducer:{
        counterSlice,
        userSlice,
    }
})