import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:"counterSlice",
    initialState:0,
    reducers:{
        increment:(state)=>state+=1,
        decrement:(state)=>state-=1
    }
})

// we export this so that we can call these actions inside the dispatcher from any component in the app
export const {increment,decrement}=counterSlice.actions

// and export this so that we can add the reducers of this feature in the global reducer of store
export default counterSlice.reducer

