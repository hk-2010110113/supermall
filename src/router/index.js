import Vue from 'vue'
import Router from 'vue-router'
const home = () => import('views/home/home')
const category = () => import('views/category/category')
const cart = () => import('views/cart/cart')
const profile = () =>import('views/profile/profile')
const comments = () =>import('views/category/comments')
Vue.use(Router)
const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:home,
    name:'home'
  },
  {
    path:'/category',
    component:category,
    name:'category',
    children:[
      {
        path:'comments',
        component:comments,
        name:'comments'
      }
    ]
  },
  {
    path:'/cart',
    component:cart,
    name:'cart'
  },
  {
    path:'/profile',
    component:profile,
    name:'profile'
  }
]
export default new Router({
  mode: 'history',
  routes
})
