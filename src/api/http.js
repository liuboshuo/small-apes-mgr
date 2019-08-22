import axios from "axios"
import { message } from "antd"
import Constants from "@/common/Constants"
/**
 * axios全局设置
 */
axios.defaults.timeout = 30000
axios.defaults.withCredentials = true
axios.interceptors.request.use(config => config, error => {
    message.error(err.message || Constants.NetWorkErrorDefaultMsg)
    return Promise.reject(error)
})
axios.interceptors.response.use(response => {
    const data = response.data;
    if(data.code != 0){
        message.error(data.message || Constants.NetWorkErrorDefaultMsg)
        return null;
    }else{
        return data;
    }
}, err => {
    message.error(err.message || Constants.NetWorkErrorDefaultMsg)
    return Promise.reject(err)
})


export default axios;