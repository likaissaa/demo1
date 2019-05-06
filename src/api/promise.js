import axios from "@/axios/http.js";
export default function(url, method, params = {}) {
    // 首先 判断是get 请求 还是 post 请求
    let data = method.toLocaleLowerCase() === 'get' ? 'params' : 'data';
    return axios({
        method,
        url,
        [data]: params
    }).then(res => {
        return Promise.resolve(res.data);
    }).catch(err => {
        return Promise.reject(err)
    })
    
}