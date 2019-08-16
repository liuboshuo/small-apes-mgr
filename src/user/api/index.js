import axios from "@/api/http"

export function getUserList(){
    const config = {method:"get",url:"/api/user/list"};
    return axios(config).catch(error=>{
        return null
    });
}