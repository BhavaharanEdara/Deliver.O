import axios from "axios";
import { base_url } from "../../Utils/base_url";
import { config } from "../../Utils/headerConfig";

const uploadImg = async(data)=>{
    const response = await axios.put(`${base_url}/product/upload`, data, config);
    return response.data;
}
const deleteImg = async(id)=>{
    const response = await axios.delete(`${base_url}/product/delete-img/${id}`, config);
    return response.data;
}



const uploadService = {
    uploadImg,
    deleteImg
}

export default uploadService