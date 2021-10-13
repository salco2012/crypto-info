import Vue from 'vue';
import Vuex from 'vuex';
import userAuthenticated from './modules/userAuthenticated';
import cryptocurrencyRate from './modules/cryptocurrencyRate';
import informationCard from './modules/informationCard'
import createPersistedState from 'vuex-persistedstate'; // плагин для обработки и хранения состояния между обновлениями страниц.

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    userAuthenticated,
    cryptocurrencyRate,
    informationCard,
  },
  plugins: [
    createPersistedState({
      paths: ['userAuthenticated'],
      storage: window.sessionStorage,
    }),
  ],
});
