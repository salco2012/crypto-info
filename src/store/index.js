import Vue from 'vue';
import Vuex from 'vuex';
import users from './modules/user';
import cryptocurrencyRate from './modules/cryptocurrencyRate';
import createPersistedState from 'vuex-persistedstate'; // плагин для обработки и хранения состояния между обновлениями страниц.

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users,
    cryptocurrencyRate,
  },
  plugins: [
    createPersistedState({ 
      storage: window.sessionStorage,
    }),
  ],
});
