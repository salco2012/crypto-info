import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

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
          console.log(error);
          console.log(error.code);
          console.log(error.message);
          // const errorCode = error.code;
          // const errorMessage = error.message;
        });
    },
  },
  getters: {
    isUserAuthenticated: (state) => state.user.isAuthenticated, // Получаем значение аутентификации
  },
};
