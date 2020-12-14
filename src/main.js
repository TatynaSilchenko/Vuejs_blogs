import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import style from './main.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  style,
  render: h => h(App)
}).$mount('#app')
