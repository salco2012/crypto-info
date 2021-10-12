import Vue from 'vue';
import Vuex from 'vuex';
import userAuthenticated from './modules/userAuthenticated';
import cryptocurrencyRate from './modules/cryptocurrencyRate';
import createPersistedState from 'vuex-persistedstate'; // плагин для обработки и хранения состояния между обновлениями страниц.

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    userAuthenticated,
    cryptocurrencyRate,
  },
  plugins: [
    createPersistedState({ 
      storage: window.sessionStorage,
    }),
  ],
});
