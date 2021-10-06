<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="8">
        <v-card elevation="8">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" md="8">
                  <v-card-text>
                    <h1 class="mb-4 mt-6 text-center">
                      Авторизация
                    </h1>
                  </v-card-text>

                  <v-form class="pa-4" @submit.prevent>
                    <v-text-field
                      label="Email"
                      name="Email"
                      prepend-icon="mdi-email"
                      type="email"
                      color="purple accent-2"
                      v-model.trim="authorizationForm.email"
                    />

                    <v-text-field
                      label="Пароль"
                      name="password"
                      prepend-icon="mdi-lock"
                      type="password"
                      color="purple accent-2"
                      v-model.trim="authorizationForm.password"
                    />

                    <div class="text-center mt-2 mb-6">
                      <v-btn
                        @click.prevent="authorization"
                        rounded
                        class="purple accent-5 white--text"
                        type="submit"
                        >Войти в кабинет</v-btn
                      >
                    </div>
                  </v-form>
                </v-col>

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
                    <h2 class="text-center mb-4">Забыли пароль?</h2>
                    <p class="text-center">
                      Не переживайте, мы вышлем новый!
                    </p>
                    <v-btn @click="step = 2" rounded outlined dark>
                      Восстановить
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
                    <v-btn small icon>
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
                    <v-text-field
                      label="Email"
                      name="Email"
                      prepend-icon="mdi-email"
                      type="email"
                      color="purple accent-2"
                    />

                    <div class="text-center mt-2 mb-6">
                      <v-btn
                        rounded
                        class="purple accent-5 white--text"
                        type="submit"
                        >Получить новый пароль</v-btn
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
export default {
  data() {
    return {
      authorizationForm: {
        email: null,
        password: null,
      },
      step: 1,
    };
  },
  // methods: {
  //   authorization() {},
  // },
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
    authorization() {
      this.$store.dispatch('authorization', {
        email: this.authorizationForm.email,
        password: this.authorizationForm.password,
      });
    },
  },
};
</script>
