import Vue from 'vue';
import http from '@/api';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'materialize-css/dist/js/materialize.min';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.prototype.$http = http;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
