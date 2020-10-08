import Vue from 'vue'
import VueRouter from 'vue-router'
import goTo from 'vuetify/es5/services/goto'
// import Main from '../components/Main'
// import Contact from '../components/Contact'
// import Offer from '../components/Offer'
// import AboutMe from '../components/AboutMe'
// import PrivacyPolicy from '../components/PrivacyPolicy'
// import Error from '../components/Error'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: () => import('../components/Main.vue'),
    meta: {
      breadCrumb: 'Strona główna'
    }
  },
  {
    path: '/kontakt',
    component: () => import('../components/Contact.vue'),
    meta: {
      breadCrumb: 'Kontakt'
    }
  },
  {
    path: '/oferta',
    component: () => import('../components/Offer1.vue'),
    meta: {
      breadCrumb: 'Oferta'
    }
  },
  {
    path: '/oferta/:opened',
    component: () => import('../components/Offer1.vue'),
    meta: {
      breadCrumb: 'Oferta'
    },
    props: true
  },
  {
    path: '/omnie',
    component: () => import('../components/AboutMe.vue'),
    meta: {
      breadCrumb: 'O mnie' 
    }
  },
  {
    path: '/polityka-prywatnosci',
    component: () => import('../components/PrivacyPolicy.vue'),
    meta: {
      breadCrumb: 'Polityka prywatności'
    }
  },
  {
    path: '*',
    component: () => import('../components/Error.vue'),
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
  mode: 'history',
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
