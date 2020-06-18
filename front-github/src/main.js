import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.component('todo-item', {  template: '<div>A custom component!</div>'});

new Vue({
  render: h => h(App)
}).$mount('#app')
