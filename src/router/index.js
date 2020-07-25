import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main.vue'
import Contact from '../components/Contact.vue'
import Offer from '../components/Offer.vue'

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
