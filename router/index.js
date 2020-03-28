import Vue from 'vue'
import VueRouter from 'vue-router'
import NoteBook from '../views/NoteBook.vue'
import Login from '../views/Login.vue'
import China from '../views/China.vue'
import World from '../views/World.vue'
import Welcome from '../views/Welcome.vue'
import Foreign from '../views/Foreign.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Welcome',
    component:Welcome
  },
  {
    path:'/login',
    name:'Login',
    component:Login
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  //test
  {
    path:'/notebook',
    name:'NoteBook',
    component:NoteBook
  },
  {
    path:'/china',
    name:'China',
    component:China
  },
  {
    path:'/world',
    name:'World',
    component:World
  },
  {
    path:'/foreign',
    name:'Foreign',
    component:Foreign
  },
  {
    path:'/test',
    name:'Test',
    component:()=>import('../views/Test.vue')
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
