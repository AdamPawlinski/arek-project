import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify/lib'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(Vuetify);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
