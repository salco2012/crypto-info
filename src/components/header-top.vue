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

    <v-btn @click="$router.push('/authorization')" light rounded
      >Авторизация
      <v-icon right>mdi-fingerprint</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
