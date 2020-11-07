import Vue from 'vue'
import VueRouter from 'vue-router'
import goTo from 'vuetify/es5/services/goto'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/Main.vue'),
    meta: {
      breadCrumb: 'Strona główna'
    }
  },
  {
    path: '/kontakt',
    name: 'kontakt', 
    component: () => import('../components/Contact.vue'),
    meta: {
      breadCrumb: 'Kontakt'
    }
  },
  {
    path: '/oferta/:opened',
    name: 'oferta', 
    component: () => import('../components/Offer1.vue'),             
    meta: {
      breadCrumb: 'Oferta'
    }
  },
  {
    path: '/omnie',
    name: 'omnie',
    component: () => import('../components/AboutMe.vue'),
    meta: {
      breadCrumb: 'O mnie' 
    }
  },
  {
    path: '/polityka-prywatnosci',
    name: 'polityka-prywatnosci',
    component: () => import('../components/PrivacyPolicy.vue'),
    meta: {
      breadCrumb: 'Polityka prywatności'
    }
  },
  {
    path: '*',
    name: 'error',
    component: () => import('../components/Error.vue'),
    meta: {
      breadCrumb: '404 page'
    }
  },
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
  // beforeEach: ()=>(
  //   (to, from, next) => {
  //     console.log(to, from)
  //     if (from.path === "oferta/*") 
  //     to === {path: `/${to}`}
  //     next() 
  //   }
  // ),
  routes
})

export default router
