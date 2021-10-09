<template>
  <v-container fluid>
    <div class="wrapper-sparkline" v-if="getCurrentClickTicker">
      <h3 class="title">{{ getCurrentClickTicker.name.toUpperCase() }}</h3>
      <span class="cross" @click="clientTickerIsNull">&#10006;</span>
      <v-sparkline
        :fill="true"
        color="rgba(194, 34, 127, .9)"
        line-width="4"
        padding="0"
        height="50"
        :smooth="8"
        :value="getPriceArchive"
      ></v-sparkline>
    </div>
  </v-container>
</template>

<script>
export default {
  computed: {
    getPriceArchive() {
      return this.$store.getters.getPriceArchive;
    },
    getCurrentClickTicker() {
      return this.$store.getters.getCurrentClickTicker;
    },
  },
  methods: {
    clientTickerIsNull() {
      this.$store.commit('CURRENT_CLIENT_TICKER_iS_NULL');
    },
  },
};
</script>

<style scoped>
.wrapper-sparkline {
  background-color: white;
  border-radius: 25px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.514);
  overflow: hidden;
  position: relative;
}
.cross {
  font-weight: 900;
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 10px;
  text-indent: 0px;
}

.title {
  position: absolute;
  top: 5px;
  left: 10px;
  text-indent: 0px;
}
</style>
