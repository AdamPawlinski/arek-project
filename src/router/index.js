import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main'
import Contact from '../components/Contact'
import Offer from '../components/Offer'
import AboutMe from '../components/AboutMe'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/kontakt',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/oferta',
    name: 'Offer',
    component: Offer
  },
  {
    path: '/omnie',
    name: 'About Me',
    component: AboutMe
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
