import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from 'firebase/auth';

export default {
  state: {
    user: {
      isAuthenticated: false, // флаг который отвечает за аутентификацию
      userID: null, // сохраняем уникальное id пользователя
    },
    error: null,
    resetPassword: {
      errorResetPassword: null,
      successfulResetPassword: false,
    },
  },
  mutations: {
    SET_USER(state, payload) {
      state.user.isAuthenticated = true;
      state.user.userID = payload;
    },
    SET_ERROR(state, payload) {
      state.error = payload;
    },
    CLEAR_ERROR(state) {
      state.error = null;
    },
    CLEAR_ERROR_RESET_PASSWORD(state) {
      state.errorResetPassword = null;
    },
    RESET_PASSWORD_ERROR(state, payload) {
      state.resetPassword = {
        errorResetPassword: payload,
        successfulResetPassword: false,
      };
    },
    RESET_PASSWORD_SUCCESSFUL(state) {
      state.resetPassword = {
        errorResetPassword: null,
        successfulResetPassword: true,
      };
    },
  },
  actions: {
    registration({ commit }, payload) {
      createUserWithEmailAndPassword(getAuth(), payload.email, payload.password)
        .then((user) => {
          commit('SET_USER', user.uid);
        })
        .catch((error) => {
          commit('SET_ERROR', error.code); // обрабатываем ошибку, записываем ее в state.error
        });
    },
    authorization({ commit }, payload) {
      signInWithEmailAndPassword(getAuth(), payload.email, payload.password)
        .then((user) => {
          commit('SET_USER', user.uid);
        })
        .catch((error) => {
          commit('SET_ERROR', error.code); // обрабатываем ошибку, записываем ее в state.error
        });
    },
    exitUserAccount() {
      // Отвечает за выход из аккаунта
      const auth = getAuth();
      signOut(auth);
      sessionStorage.clear();
      document.location.reload(true);
    },
    resetPassword({ commit }, email) {
      const auth = getAuth();
      sendPasswordResetEmail(auth, email)
        .then(() => {
          commit('RESET_PASSWORD_SUCCESSFUL');
        })
        .catch((error) => {
          commit('RESET_PASSWORD_ERROR', error.code);
        });
    },
  },
  getters: {
    isUserAuthenticated: (state) => state.user.isAuthenticated, // Получаем значение аутентификации
    getError: (state) => state.error, // Получаем значение ошибки
    errorResetPassword(state) {
      return state.resetPassword.errorResetPassword;
    },
    successfulResetPassword(state) {
      return state.resetPassword.successfulResetPassword;
    }
  },
};
