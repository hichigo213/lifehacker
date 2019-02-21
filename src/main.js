import Vue from 'vue'
import App from './App.vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: {
    sm: 1000,
    md: Infinity
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})

