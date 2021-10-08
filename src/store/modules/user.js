import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

export default {
  state: {
    user: {
      isAuthenticated: false, // флаг который отвечает за аутентификацию
      userID: null, // сохраняем уникальное id пользователя
    },
    error: null, 
  },
  mutations: {
    SET_USER(state, payload) {
      state.user.isAuthenticated = true;
      state.user.userID = payload;
    },
    UNSET_USER(state) {
      state.user = {
        isAuthenticated: false,
        userID: null,
      };
    },
    SET_ERROR(state, payload) {
      state.error = payload;
    },
    CLEAR_ERROR(state) {
      state.error = null;
    },
  },
  actions: {
    registration({ commit }, payload) {
      createUserWithEmailAndPassword(getAuth(), payload.email, payload.password)
        .then(() => {})
        .catch((error) => {
          commit('SET_ERROR', error.code); // обрабатываем ошибку, записываем ее в state.error
        });
    },
    authorization({ commit }, payload) {
      signInWithEmailAndPassword(getAuth(), payload.email, payload.password)
        .then(() => {})
        .catch((error) => {
          commit('SET_ERROR', error.code); // обрабатываем ошибку, записываем ее в state.error
        });
    },
    stateChanged({ commit }, payload) {
      if (payload) {
        commit('SET_USER', payload.uid);
      } else {
        commit('UNSET_USER');
      }
    },
    exitUserAccount() {
      // Отвечает за выход из аккаунта
      const auth = getAuth();
      signOut(auth);
    },
  },
  getters: {
    isUserAuthenticated: (state) => state.user.isAuthenticated, // Получаем значение аутентификации
    getError: (state) => state.error, // Получаем значение ошибки
  },
};
