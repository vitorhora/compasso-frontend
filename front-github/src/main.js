import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueHead from 'vue-head';
import JwPagination from 'jw-vue-pagination';

Vue.component('jw-pagination', JwPagination);
Vue.config.productionTip = false;

Vue.use(VueHead);
Vue.use(VueRouter);

new Vue({
  render: h => h(App)
}).$mount('#app')
