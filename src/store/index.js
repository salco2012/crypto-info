import Vue from 'vue';
import Vuex from 'vuex';
import users from './modules/user';
import general from './modules/general';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    users,
    general,
  },
});
