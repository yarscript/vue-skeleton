import Vue from 'vue';
import App from './App.vue';
import store from './modules/core/store';

import { sync } from 'vuex-router-sync';
import { router } from './modules/http';

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


Vue.config.productionTip = false;
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import VueMeta from 'vue-meta'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueMeta)

import 'leaflet/dist/leaflet.css';

//styles
import '@/assets/scss/style.scss';

sync(store, router);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
