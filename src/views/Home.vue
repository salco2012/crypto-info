<template>
  <div class="home purple lighten-1">
    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <v-col cols="12" md="10" class="text-center">
          <img src="@/assets/img/coin.png" alt="coint" width="320" />
          <h1 class="white--text">
            Мониторьте курс криптовалют с нами.
            <br />Всегда и бесплатно!
          </h1>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Home',

  components: {},
};
</script>

<style scoped>
.home {
  height: 100%;
}
</style>
