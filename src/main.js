import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import vuetify from './plugins/vuetify';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './config/firebase';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

new Vue({
  store,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
