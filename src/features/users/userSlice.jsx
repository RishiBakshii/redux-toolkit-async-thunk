import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserDataApi } from "./userApi";


export const getUserDataApiAsync=createAsyncThunk("userSlice/getUserData",async()=>{
    const userData= await getUserDataApi()
    console.log('function running')
    return userData
})

const userSlice=createSlice({
    name:"userSlice",
    initialState:{loading:"",data:[]},
    reducers:{
        increment:(state)=>state+=1,
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getUserDataApiAsync.pending,(state)=>{
            state.loading='true';
        })

        .addCase(getUserDataApiAsync.rejected,(state)=>{
            state.loading='false'
        })

        .addCase(getUserDataApiAsync.fulfilled,(state,action)=>{
            state.data=action.payload
        })
    }
})

export default userSlice.reducer