import Vue from 'vue'
import VueRouter from 'vue-router'
import goTo from 'vuetify/es5/services/goto'
import Main from '../components/Main'
import Contact from '../components/Contact'
import Offer from '../components/Offer'
import AboutMe from '../components/AboutMe'
import Error from '../components/Error'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: Main,
    meta: {
      breadCrumb: 'Strona główna'
    }
  },
  {
    path: '/kontakt',
    component: Contact,
    meta: {
      breadCrumb: 'Kontakt'
    }
  },
  {
    path: '/oferta',
    component: Offer,
    meta: {
      breadCrumb: 'Oferta'
    }
  },
  {
    path: '/omnie',
    component: AboutMe,
    meta: {
      breadCrumb: 'O mnie' 
    }
  },
  {
    path: '/*',
    component: Error,
    meta: {
      breadCrumb: '404 page'
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
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0

    if (to.hash) {
      scrollTo = to.hash
    } else if (savedPosition) {
      scrollTo = savedPosition.y
    }

    return goTo(scrollTo)
  },
  routes
})

export default router
