import Vue from 'vue'
import App from './App.vue'
import VueMq from 'vue-mq'
import VueCarousel from '@chenfengyuan/vue-carousel'

Vue.use(VueMq, {
  breakpoints: {
    sm: 1000,
    md: Infinity
  }
})
Vue.use(VueCarousel);

new Vue({
  el: '#app',
  render: h => h(App)
})

