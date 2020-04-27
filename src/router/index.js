import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Sort from '../views/Sort.vue'
import Mine from '../views/Mine.vue'
import Search from '../views/Search.vue'
import SearchResult from '../views/SearchResult.vue'

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
  routes
})

export default router
