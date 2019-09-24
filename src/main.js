import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from '@/plugins/vuetify';
import globals from '@/plugins/globals';
import config from '../config.json';
import './registerServiceWorker';

export const Config = config;
Vue.config.productionTip = false;

Vue.use(globals);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
