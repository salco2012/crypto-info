import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import router from './router';
import store from './store/index';
import vuetify from './plugins/vuetify';
import VuetifyConfirm from 'vuetify-confirm';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './config/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

Vue.use(Vuelidate);

// Модальное окно
Vue.use(VuetifyConfirm, {
  vuetify,
  buttonFalseText: 'Остаюсь',
  buttonTrueText: 'Выйти',
  color: 'warning',
  icon: null,
  title: 'Вы действительно хотите выйти?',
  width: 400,
  property: '$confirm',
});

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
