import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CartService from "./CartService";

const cartDefaultState = {
    Products:[],
    cartTotal : 0

};

const initialState = {
    cart : cartDefaultState,
    isError : false,
    isLoading : false,
    isSucess : false,
    message :""

};

export const addProductToCart = createAsyncThunk("/auth/cart", async (cart, thunkAPI)=>{
    try{
        return await CartService.addToCart(cart)
    }
    catch(error){
        return thunkAPI.rejectWithValue(error); 
    }
})

export const deleteProductFromCart = createAsyncThunk("/auth/removeFromCart", async(cart,thunkAPI)=>{
    try{
        return await CartService.delFromCart(cart);
    }
    catch(error){
        return thunkAPI.rejectWithValue(error);
    }
})

export const getCart = createAsyncThunk("/auth/getCart", async(cart,thunkAPI)=>{
    try{
        return await CartService.getUserCart(cart);
    }
    catch(error){
        return thunkAPI.rejectWithValue(error);
    }

})


export const cartSlice = createSlice({
    name : "cart",
    initialState : initialState,
    reducers:{},
    extraReducers : (builder)=>{
        builder.addCase(addProductToCart.pending, (state,action)=>{
            state.isLoading=true;
        }).addCase(addProductToCart.fulfilled, (state,action)=>{
            state.isLoading=false;
            state.isSucess = true;
            state.cart = action.payload;
        }).addCase(addProductToCart.rejected, (state, action)=>{
            state.isLoading=false;
            state.isError = true;
            state.isSucess = false;
        }).addCase(deleteProductFromCart.pending, (state,action)=>{
            state.isLoading=true;
        }).addCase(deleteProductFromCart.fulfilled, (state,action)=>{
            state.isLoading=false;
            state.isSucess = true;
            state.cart = action.payload;
        }).addCase(deleteProductFromCart.rejected, (state, action)=>{
            state.isLoading=false;
            state.isError = true;
            state.isSucess = false;
        }).addCase(getCart.pending, (state,action)=>{
            state.isLoading=true;
        }).addCase(getCart.fulfilled, (state,action)=>{
            state.isLoading=false;
            state.isSucess = true;
            state.cart = action.payload;
        }).addCase(getCart.rejected, (state, action)=>{
            state.isLoading=false;
            state.isError = true;
            state.isSucess = false;
        })

    }
})

export default cartSlice.reducer;


