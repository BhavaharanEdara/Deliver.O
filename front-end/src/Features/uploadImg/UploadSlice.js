import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import uploadService from "./UploadServise";
import { config } from "../../Utils/headerConfig";

const initialState = {
    images : [],
    isError : false,
    isLoading : false,
    isSucess : false,
    message :""
}

export const uploadImg = createAsyncThunk("/product/upload/images", async (data, thunkAPI)=>{
    try{
        const formData = new FormData();
        for(let i=0;i<data.length;i++){
            formData.append('images',data[i]);
        }
        const response = await uploadService.uploadImg(formData);
        console.log(response);
        return response
    }
    catch(error){
        return thunkAPI.rejectWithValue(error); 
    }
})


export const delImg = createAsyncThunk("/product/delete/images", async (id, thunkAPI)=>{
    try{
        return await uploadService.deleteImg(id)
    }
    catch(error){
        return thunkAPI.rejectWithValue(error); 
    }
})

export const uploadSlice = createSlice({
    name : "images",
    initialState : initialState,
    reducers:{
        clearImgs : (state,action)=>{
            state.images = [];
        }
    },
    extraReducers : (builder)=>{
        builder.addCase(uploadImg.pending, (state,action)=>{
            state.isLoading=true;
        }).addCase(uploadImg.fulfilled, (state,action)=>{
            state.isLoading=false;
            state.isSucess = true;
            state.images = action.payload;
        }).addCase(uploadImg.rejected, (state, action)=>{
            state.isLoading=false;
            state.isError = true;
            state.isSucess = false;
            state.images = [];
        }).addCase(delImg.pending, (state,action)=>{
            state.isLoading=true;
        }).addCase(delImg.fulfilled, (state,action)=>{
            state.isLoading=false;
            state.isSucess = true;
            for(let i=0;i<state.images.length;i++){
                if(state.images[i].public_id===action.payload.id){
                    state.images.splice(i, 1);
                    break;
                }
            }
        }).addCase(delImg.rejected, (state, action)=>{
            state.isLoading=false;
            state.isError = true;
            state.isSucess = false;
            state.message = action.payload;
        })
    }
})

export const {clearImgs} = uploadSlice.actions;
export default uploadSlice.reducer;


