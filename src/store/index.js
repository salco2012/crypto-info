import Vue from 'vue';
import Vuex from 'vuex';
import UserAuth from './modules/UserAuth';
import СryptocurrencyRate from './modules/СryptocurrencyRate';
import createPersistedState from 'vuex-persistedstate'; // плагин для обработки и хранения состояния между обновлениями страниц.

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    UserAuth,
    СryptocurrencyRate,
  },
  plugins: [
    createPersistedState({
      paths: ['UserAuth'],
      storage: window.sessionStorage,
    }),
  ],
});
