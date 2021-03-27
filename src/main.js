import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

/* register global dependencies */
Vue.use(require("moment"))

//
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
