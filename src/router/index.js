import Vue from 'vue'
import VueRouter from 'vue-router'
import Blogs from "../views/Blogs";
import Character from "../views/Character";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Blogs',
    component: Blogs
  },
  {
    path: '/character',
    name: 'Character',
    component: Character
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
