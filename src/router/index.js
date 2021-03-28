import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Detail from '../views/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
