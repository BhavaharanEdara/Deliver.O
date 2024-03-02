import axios from "axios";
import { base_url } from "../../Utils/base_url";

const login = async(userData)=>{
    const response = await axios.post(`${base_url}/auth/login`, userData);
    if(response.data){
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("token", JSON.stringify(response.data?.token));
    }
    return response.data;
}
const authServices = {login}
export default authServices