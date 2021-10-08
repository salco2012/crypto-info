<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="8">
        <v-card elevation="8">
          <v-window>
            <v-window-item>
              <v-row>
                <v-col
                  cols="12"
                  md="4"
                  class="purple accent-5 d-flex flex-column"
                >
                  <div class="ml-auto mb-auto">
                    <v-btn small icon>
                      <v-icon small color="white">
                        mdi-close-thick
                      </v-icon>
                    </v-btn>
                  </div>
                  <v-card-text class="white--text text-center mb-auto">
                    <h2 class="text-center mb-4">Есть аккаунт?</h2>
                    <p class="text-center">
                      Пройдите авторизацию прямо сейчас!
                    </p>
                    <v-btn
                      @click="$router.push('/authorization')"
                      rounded
                      outlined
                      dark
                    >
                      Авторизация
                    </v-btn>
                  </v-card-text>
                </v-col>

                <v-col cols="12" md="8">
                  <v-card-text>
                    <h1 class="mb-4 mt-6 text-center">
                      Регистрация
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
                      label="Имя"
                      name="name"
                      prepend-icon="mdi-face-recognition"
                      type="text"
                      color="purple accent-2"
                      v-model.trim="registrationForm.name"
                      :error="!$v.registrationForm.name.alphaRus"
                    />
                    <p
                      class="myError"
                      v-if="!$v.registrationForm.name.alphaRus"
                    >
                      Только кириллица
                    </p>

                    <v-text-field
                      label="Email"
                      name="Email"
                      prepend-icon="mdi-email"
                      type="email"
                      color="purple accent-2"
                      v-model.trim="registrationForm.email"
                      :error="!$v.registrationForm.email.email"
                    />
                    <p class="myError" v-if="!$v.registrationForm.email.email">
                      Это не похоже на email
                    </p>

                    <v-text-field
                      label="Пароль"
                      name="password"
                      prepend-icon="mdi-lock"
                      type="password"
                      color="purple accent-2"
                      v-model.trim="registrationForm.password"
                      :error="!$v.registrationForm.password.minLength"
                    />
                    <p
                      class="myError"
                      v-if="!$v.registrationForm.password.minLength"
                    >
                     Пароль не может быть меньше 6 символов
                    </p>

                    <v-text-field
                      label="Повторите пароль"
                      name="password"
                      prepend-icon="mdi-lock"
                      type="password"
                      color="purple accent-2"
                      v-model.trim="registrationForm.repeatPassword"
                      :error="!$v.registrationForm.repeatPassword.sameAsPassword && $v.registrationForm.password.required && $v.registrationForm.repeatPassword.required"
                    />

                    <p
                      class="myError"
                      v-if="!$v.registrationForm.repeatPassword.sameAsPassword && $v.registrationForm.password.required && $v.registrationForm.repeatPassword.required"
                    >
                     Пароль не совпадает с указанным выше
                    </p>


                    <div class="text-center mt-2 mb-6">
                      <v-btn
                        rounded
                        class="purple accent-5 white--text"
                        type="submit"
                        @click.prevent="registration"
                        :disabled="$v.registrationForm.$invalid"
                        >Зарегистрироваться</v-btn
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
  </v-container>
</template>

<script>
import { required, email, minLength, helpers, sameAs } from 'vuelidate/lib/validators';
const alphaRus = helpers.regex('alphaRus', /[А-ЯЁа-яё]/);

export default {
  data() {
    return {
      registrationForm: {
        name: null,
        email: null,
        password: null,
        repeatPassword: null,
      },
    };
  },
  validations: {
    registrationForm: {
      name: {
        alphaRus,
      },
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6),
      },
      repeatPassword: {
        required,
        sameAsPassword: sameAs('password'),
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
  },
  watch: {
    isUserAuthenticated(value) {
      if (value === true) {
        this.$router.push('/user-account');
      }
    },
  },
  methods: {
    registration() {
      this.$store.dispatch('registration', {
        email: this.registrationForm.email,
        password: this.registrationForm.password,
      });
    },
    onSubmitForm() {
      this.$v.registrationForm.$touch();
    },
  },
};
</script>

<style scoped>
.myError {
  color: red;
  margin-top: -15px;
}
</style>
