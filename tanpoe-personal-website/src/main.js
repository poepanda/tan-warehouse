// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VTooltip from 'v-tooltip';
import Icon from 'vue-awesome/components/Icon';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// Register module from awesome icons
Vue.component('icon', Icon);

// Regsiter Vue Router
Vue.use(VueRouter);

// Register V Tooltip
Vue.use(VTooltip);

// Exposing animeJS library to global

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store,
});
