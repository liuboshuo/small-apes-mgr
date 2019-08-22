import axios from "@/api/http"

export function getResumeList(){
    const config = {method:"get",url:"/api/resume"};
    return axios(config).catch(error=>{
        return null
    });
}


export function deleteResume(id){
    const config = {method:"delete",url:`/api/resume/${id}`};
    return axios(config).catch(error=>{
        return null
    });
}

export function updateStatus(data){
    const config = {method:"post",url:"/api/resume/update",data};
    return axios(config).catch(error=>{
        return null
    });
}
