<template>
  <div class="wrapper-auth">
    <v-row align="center" justify="center">
      <v-col cols="12" md="8">
        <v-card elevation="8">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" md="7">
                  <v-card-text>
                    <h1 class="mb-4 mt-6 text-center">
                      Авторизация
                    </h1>
                  </v-card-text>

                  <v-form class="pa-4" @submit.prevent="onSubmitForm">
                    <v-alert
                      v-if="firebaseError"
                      dense
                      border="left"
                      type="warning"
                    >
                      {{ firebaseError }}
                    </v-alert>

                    <v-text-field
                      label="Email"
                      name="Email"
                      prepend-icon="mdi-email"
                      type="email"
                      color="purple accent-2"
                      v-model.trim="authorizationForm.email"
                      :error="!$v.authorizationForm.email.email"
                    />
                    <p class="myError" v-if="!$v.authorizationForm.email.email">
                      Это не похоже на email
                    </p>

                    <v-text-field
                      label="Пароль"
                      name="password"
                      prepend-icon="mdi-lock"
                      type="password"
                      color="purple accent-2"
                      v-model.trim="authorizationForm.password"
                      :error="!$v.authorizationForm.password.minLength"
                    />
                    <p
                      class="myError"
                      v-if="!$v.authorizationForm.password.minLength"
                    >
                      Не менее 6 символов
                    </p>

                    <div class="text-center mt-2 mb-6">
                      <v-btn
                        @click.prevent="authorization"
                        rounded
                        class="purple accent-5 white--text"
                        type="submit"
                        :disabled="$v.authorizationForm.$invalid"
                        >Войти в кабинет</v-btn
                      >
                    </div>
                  </v-form>
                </v-col>

                <v-col
                  cols="12"
                  md="5"
                  class="purple accent-5 d-flex flex-column"
                >
                  <div class="ml-auto mb-auto">
                    <v-btn small icon @click="$router.push('/')">
                      <v-icon small color="white">
                        mdi-close-thick
                      </v-icon>
                    </v-btn>
                  </div>
                  <v-card-text class="white--text text-center mb-auto">
                    <h2 class="text-center mb-4">Забыли пароль?</h2>
                    <p class="text-center">
                      Вы можете установить новый!
                    </p>
                    <v-btn @click="step = 2" rounded outlined dark>
                      Сбросить пароль
                    </v-btn>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-window-item>

            <v-window-item :value="2">
              <v-row>
                <v-col
                  cols="12"
                  md="4"
                  class="purple accent-5 d-flex flex-column"
                >
                  <div class="ml-auto mb-auto">
                    <v-btn small icon @click="cleanErrorResetPassword">
                      <v-icon small color="white">
                        mdi-close-thick
                      </v-icon>
                    </v-btn>
                  </div>
                  <v-card-text class="white--text text-center mb-auto">
                    <h2 class="text-center mb-4">Вспомнили пароль?</h2>
                    <p class="text-center">
                      Пройдите авторизацию прямо сейчас!
                    </p>
                    <v-btn @click="step = 1" rounded outlined dark>
                      Авторизация
                    </v-btn>
                  </v-card-text>
                </v-col>

                <v-col cols="12" md="8">
                  <v-card-text>
                    <h1 class="mb-4 mt-6 text-center">
                      Восстановление пароля
                    </h1>
                  </v-card-text>

                  <v-form class="pa-4" @submit.prevent>
                    <v-alert
                      v-if="errorResetPassword"
                      dense
                      border="left"
                      type="warning"
                    >
                      {{ errorResetPassword }}
                    </v-alert>
                    <v-alert
                      v-if="successfulResetPassword && !errorResetPassword"
                      dense
                      border="left"
                      type="success"
                    >
                      Ссылка на восстановление пароля была отправлена на Вашу
                      почту
                    </v-alert>

                    <v-text-field
                      label="Email"
                      name="Email"
                      prepend-icon="mdi-email"
                      type="email"
                      color="purple accent-2"
                      v-model.trim="passwordRecovery.email"
                      :error="!$v.passwordRecovery.email.email"
                    />

                    <p class="myError" v-if="!$v.passwordRecovery.email.email">
                      Это не похоже на email
                    </p>

                    <div class="text-center mt-2 mb-6">
                      <v-btn
                        rounded
                        class="purple accent-5 white--text"
                        type="submit"
                        :disabled="$v.passwordRecovery.$invalid"
                        @click="resetPassword"
                        >Сбросить пароль</v-btn
                      >
                    </div>
                  </v-form>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      authorizationForm: {
        email: null,
        password: null,
      },
      passwordRecovery: {
        email: null,
      },
      step: 1,
    };
  },
  validations: {
    authorizationForm: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6),
      },
    },
    passwordRecovery: {
      email: {
        required,
        email,
      },
    },
  },
  computed: {
    firebaseError() {
      return this.$store.getters.getError;
    },
    isUserAuthenticated() {
      return this.$store.getters.isUserAuthenticated;
    },
    errorResetPassword() {
      return this.$store.getters.errorResetPassword;
    },
    successfulResetPassword() {
      return this.$store.getters.successfulResetPassword;
    },
  },
  watch: {
    isUserAuthenticated(value) {
      if (value === true) {
        this.$router.push('/cryptocurrency-rate');
      }
    },
  },
  methods: {
    authorization() {
      this.$store.dispatch('authorization', {
        email: this.authorizationForm.email,
        password: this.authorizationForm.password,
      });
    },
    onSubmitForm() {
      this.$v.authorizationForm.$touch();
    },
    resetPassword() {
      this.$store.dispatch('resetPassword', this.passwordRecovery.email);
      setTimeout(() => {
        sessionStorage.clear();
        document.location.reload(true);
      }, 5000);
    },
    cleanErrorResetPassword() {
      this.$router.push('/');
      this.$store.commit('CLEAR_ERROR_RESET_PASSWORD');
    },
  },
};
</script>

<style scoped>
.wrapper-auth {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.myError {
  color: red;
  margin-top: -15px;
}
h1 {
  line-height: 1.1em;
}
</style>
