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
axios.interceptors.response.use(response => response.data, err => {
    message.error(err.message || Constants.NetWorkErrorDefaultMsg)
    return Promise.reject(err)
})


export default axios;