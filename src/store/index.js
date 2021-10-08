import Vue from 'vue';
import Vuex from 'vuex';
import users from './modules/user';
import cryptocurrencyRate from './modules/cryptocurrencyRate';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users,
    cryptocurrencyRate,
  },
});
