import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Sort from '../views/Sort.vue'
import Mine from '../views/Mine.vue'
import Search from '../views/Search.vue'
import Detail from '../views/Detail.vue'
import SearchResult from '../views/SearchResult.vue'
import Login from '../views/Login.vue'
import Regist from '../views/Regist.vue'

import JsCookie from 'js-cookie'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
	meta:{
		showtabbar:true,
	}
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/regist',
    name: 'Regist',
    component: Regist
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/searchresult',
    name: 'SearchResult',
    component: SearchResult
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
	meta:{
		showtabbar:true,
		auth:true
	}
  },
  {
    path: '/sort',
    name: 'Sort',
    component: Sort,
	meta:{
		showtabbar:true,
	}
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Mine,
	meta:{
		showtabbar:true,
		auth:true
	}
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes,
  scrollBehavior:function(t,f,s){
	  return{
		  x:0,
		  y:0
	  }
  }
})

router.beforeEach((t,f,n)=>{
	if(t.meta.auth){
		let logined = JsCookie.get("token");
		if(logined){
			console.log("已登录");
			n()
		}else{
			n("/login?next="+t.path);
			console.log("未登录")
		}
	}else{
		console.log("不需要导航守卫");
		n()
	}
})


export default router
