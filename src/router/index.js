
import Vue from 'vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter)
const Home = ()=>import('../views/home/Home')
const Category = ()=>import('../views/category/Category')
const Profile = ()=>import('../views/profile/Profile')
const Shopcart = ()=>import('../views/shopcart/Shopcart')
const routes = [
  {
    path:'',
    redirect:'/home'
  },
 
  {
    path:'/home',
    component: Home
  },
  {
    path:'/category',
    component: Category
  },
  {
    path:'/shopcart',
    component: Shopcart
  },
  {
    path:'/profile',
    component: Profile
  }
  
]
const router = new vueRouter({
  routes,
  mode:'history'
})
export default router