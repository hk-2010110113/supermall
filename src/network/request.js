import axios from 'axios'

export function request(config) {
    //第一步创建axios实例
    const instance = axios.create({
        //baseURL: 'http://123.207.32.32:8000/',
        baseURL: 'http://yapi.weilaigongzuo.com/mock/441',
        timeout: 5000
    })

    //请求拦截器
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        console.log(err)
    })
    //响应拦截器
    instance.interceptors.response.use(res => {
        // 响应成功拦截
        return res.data
    }, err => {
        console.log(err)
        //响应失败拦截
    })
    //发送网络请求
    return instance(config)
}