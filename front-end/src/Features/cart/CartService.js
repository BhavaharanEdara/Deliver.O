import axios from "axios";
import { base_url } from "../../Utils/base_url";
import { config } from "../../Utils/headerConfig";

const addToCart = async(data)=>{
    const response = await axios.post(`${base_url}/auth/cart`, data, config);
    if(response.data){
        const user = JSON.parse(localStorage.getItem("user"));
        user.findUser.cart = response.data?._id;
        localStorage.setItem("user",JSON.stringify(user));
    }
    return response.data;
}
const delFromCart = async(data)=>{
    const response = await axios.put(`${base_url}/auth/removeFromCart`, data, config);
    return response.data;
}
const clearCart = async(id)=>{
    const response = await axios.delete(`${base_url}/auth/removeFromCart`, config);
    return response.data;
}
const getUserCart = async(id)=>{
    const response = await axios.get(`${base_url}/auth/getCart`, config);
    return response.data;
}



const uploadService = {
    delFromCart,
    addToCart,
    clearCart,
    getUserCart
}

export default uploadService