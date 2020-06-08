import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.component('component-a', {  template: '<div>A custom component!</div>'});

new Vue({
  render: h => h(App)
}).$mount('#app')
