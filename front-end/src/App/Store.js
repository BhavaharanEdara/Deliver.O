import { configureStore} from "@reduxjs/toolkit"
import authReducer from "../Features/auth/AuthSlice"
import uploadReducer from "../Features/uploadImg/UploadSlice"
import cartReducer from "../Features/cart/CartSlice" 
export const store = configureStore({
    reducer :{
        auth: authReducer,
        upload: uploadReducer,
        cart:cartReducer,
    },
})