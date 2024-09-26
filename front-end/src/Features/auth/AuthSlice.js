import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "./AuthService";
import axios from "axios";
import { base_url } from "../../Utils/base_url";
import { config } from "../../Utils/headerConfig";

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

export const removeFromWishList = createAsyncThunk('/product/removeFromWishList', async(data,thunkAPI)=>{
    try{
        const response = await axios.put(`${base_url}/product/addWishlist`,{productId:data?._id},config);
        localStorage.setItem("user", JSON.stringify({findUser:response.data}));
        return {findUser:response.data};
    }
    catch(error){
        return thunkAPI.rejectWithValue(error); 
    }
})
export const authSlice = createSlice({
    name : "auth",
    initialState : initialState,
    reducers:{
        setUser: (state, action) => {
            state.user = action.payload;
        },
        logout: (state, action)=>{
            state.user = null;
            localStorage.clear()
        }
    },
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
        builder.addCase(removeFromWishList.pending, (state,action)=>{
            state.isLoading = true;
        })
        builder.addCase(removeFromWishList.fulfilled, (state,action)=>{
            state.isLoading=false;
            state.isSucess = true;
            state.user = action.payload;
        })
        builder.addCase(removeFromWishList.rejected, (state,action)=>{
            state.isLoading=false;
            state.isError = true;
            state.isSucess = false;
            state.user = null;
        })
    }
})
export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;


