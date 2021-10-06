import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import vuetify from './plugins/vuetify';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './config/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

new Vue({
  store,
  router,
  vuetify,
  render: (h) => h(App),
  created() {
    let vm = this;
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      vm.$store.dispatch('stateChanged', user);
    });
  },
}).$mount('#app');
