import { request } from './request'
//首页所有的请求在这里封装
export function getHomeMultidata() {
    return request({
        //url: '/home/multidata',
        //url:'/zhihu/recommend',
        //url: '/zhihu/hot-select',    //top10 热门
        //url:'/zhihu/hot-list',       //分类，科学，数码，体育等
        url: '/zhihu/news_specials/list', //新闻列表
        //url:'/zhihu/zhuanlan-card',   //详细内容
    })
}

// export default {
//     recommend: `${API}/zhihu/recommend`,
//     select: `${API}/zhihu/hot-select`,
//     hostList: `${API}/zhihu/hot-list`,
//     hostListItem: name => `${API}/zhihu/hot-lists/${name}`,
//     newsSpecialsList: `${API}/zhihu/news_specials/list`,
//     zhuanlanCard: `${API}/zhihu/zhuanlan-card`
// };