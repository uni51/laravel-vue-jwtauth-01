require('./bootstrap');

import Vue from 'vue';
import store from './store';
import router from './router';

window.state = store.state;

import App from './components/App.vue';

Vue.component('app', App);

const app = new Vue({
  router
}).$mount('#app');
