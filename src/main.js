import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify/lib'
import router from './router'
import vuetify from './plugins/vuetify'
import AOS from 'aos';
import 'aos/dist/aos.css';

Vue.config.productionTip = false
Vue.use(Vuetify);

new Vue({
  created() {
    AOS.init()
  },  
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
