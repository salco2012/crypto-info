import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

export default {
  state: {
    user: {
      isAuthenticated: false, // флаг который отвечает за аутентификацию
      userID: null, // сохраняем уникальное id пользователя
    },
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
  },
  actions: {
    registration({ commit }, payload) {
      createUserWithEmailAndPassword(getAuth(), payload.email, payload.password)
        .then((user) => {
          commit('SET_USER', user.user.uid);
        })
        .catch((error) => {
          commit('SET_ERROR', error.code); // обрабатываем ошибку, записываем ее в state.error
        });
    },
    authorization({ commit }, payload) {
      signInWithEmailAndPassword(getAuth(), payload.email, payload.password)
        .then((userCredential) => {
          commit('SET_USER', user.user.uid);
          console.log(userCredential);
          const user = userCredential.user;
          // ...
        })
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
  },
  getters: {
    isUserAuthenticated: (state) => state.user.isAuthenticated, // Получаем значение аутентификации
  },
};
