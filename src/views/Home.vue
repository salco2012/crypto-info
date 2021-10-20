<template>
  <div class="home purple lighten-1">
    <div>
      <v-row align="center" justify="center">
        <v-col cols="12" md="12" class="text-center">
          <img src="@/assets/img/coin.png" alt="coint" width="320" />
          <h1 class="white--text">
            Мониторьте курс криптовалют.
            <br />Всегда и бесплатно!
          </h1>
        </v-col>
      </v-row>
    </div>
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
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
