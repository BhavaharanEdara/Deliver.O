import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "./AuthService";

const userDefaultState = {
    _id:null,
    firstname:null,
    lastname:null,
    email:null,
    token:null,
}

const initialState = {
    user : userDefaultState,
    isError : false,
    isLoading : false,
    isSucess : false,
    message :""
}

export const login = createAsyncThunk("/auth/login", async (user, thunkAPI)=>{
    try{
        return await AuthService.login(user)
    }
    catch(error){
        return thunkAPI.rejectWithValue(error); 
    }
})

export const authSlice = createSlice({
    name : "auth",
    initialState : initialState,
    reducers:{},
    extraReducers : (builder)=>{
        builder.addCase(login.pending, (state,action)=>{
            state.isLoading=true;
        }).addCase(login.fulfilled, (state,action)=>{
            state.isLoading=false;
            state.isSucess = true;
            state.user = action.payload;
        }).addCase(login.rejected, (state, action)=>{
            state.isLoading=false;
            state.isError = true;
            state.isSucess = false;
            state.user = null;
        })
    }
})
export default authSlice.reducer;


