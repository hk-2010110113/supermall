import { request } from './request'
//首页所有的请求在这里封装
export function getHomeMultidata(){
    return request({
        url:'/home/multidata'
    })
}