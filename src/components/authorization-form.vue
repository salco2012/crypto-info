<template>
  <v-app>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" md="8">
          <v-card elevation="8">
            <v-window v-model="step">
              <v-window-item :value="1">
                <v-row>
                  <v-col cols="12" md="8">
                    <v-card-text>
                      <h1 class="mb-2 mt-4 text-center purple--text">
                        Авторизация
                      </h1>
                    </v-card-text>

                    <v-form class="pa-4" @submit.prevent>
                      <v-text-field
                        label="Email"
                        name="Email"
                        prepend-icon="mdi-email"
                        type="text"
                        color="purple accent-2"
                      />

                      <v-text-field
                        label="Пароль"
                        name="Пароль"
                        prepend-icon="mdi-lock"
                        type="text"
                        color="purple accent-2"
                      />

                      <div class="text-center mb-4">
                        <v-btn
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
                      <v-btn rounded outlined dark>
                        Восстановить
                      </v-btn>
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-window-item>
            </v-window>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
