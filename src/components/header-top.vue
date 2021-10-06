<template>
  <v-app-bar app color="purple darken-2" dark>
    <v-toolbar-title>
      <router-link style="text-decoration: none; color: inherit;" to="/">
        <div class="d-flex align-center">
          <img
            class="mr-2"
            src="../assets/img/btc.png"
            alt="logo"
            height="35"
          />
          <p class="ma-0">Crypto-info</p>
        </div>
      </router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn
      class="mr-3"
      @click="$router.push('/registration-form')"
      light
      rounded
      >Регистрация
      <v-icon right class="far fa-address-card"></v-icon>
    </v-btn>

    <v-btn
      
      @click="$router.push('/authorization')"
      light
      rounded
      >Авторизация
      <v-icon right>mdi-fingerprint</v-icon>
    </v-btn>

    <!-- <v-btn @click="$router.push('/')" class="ml-2" light rounded
      >Выйти
      <v-icon right>mdi-account-circle</v-icon>
    </v-btn> -->
  </v-app-bar>
</template>

<script>
export default {
  // computed: {
  //   isUserAuthenticated() {
  //     return this.$store.getters.isUserAuthenticated;
  //   },
  // },
};
</script>

<style lang="scss" scoped></style>
