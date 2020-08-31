import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify/lib'
import router from './router'
import vuetify from './plugins/vuetify'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { VueReCaptcha } from 'vue-recaptcha-v3'

Vue.config.productionTip = false
Vue.use(Vuetify);
Vue.use(VueReCaptcha, { siteKey: '6LfC9MUZAAAAAMAW2Tp6lfvOrhCh51a2CfRcWbFm' })

new Vue({
  created() {
    AOS.init()
  },  
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
