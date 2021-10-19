<template>
  <v-container class="pl-3 mt-8">
    <div
      class="wrapper-sparkline"
      v-if="getTickersCards.length && getCurrentClickTicker"
    >
      <h3 v-if="getCurrentClickTicker" class="title-charh">
        {{ getCurrentClickTicker.name.toUpperCase() }}
      </h3>
      <v-sparkline
        :fill="true"
        color="rgba(194, 34, 127, .9)"
        line-width="4"
        padding="0"
        height="50"
        :smooth="8"
        :value="getPriceArchive"
      ></v-sparkline>
      <span class="close-chart" @click="resetCurrentTicker">&#10006;</span>
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
    getTickersCards() {
      return this.$store.getters.getTickersCards;
    },
  },
  methods: {
    resetCurrentTicker() {
      this.$store.commit('RESET_CURRENT_CLICK_TICKER');
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
  padding-top: 30px;
}

.title-charh {
  position: absolute;
  top: 5px;
  left: 10px;
}

.close-chart {
  position: absolute;
  top: 5px;
  right: 10px;
  cursor: pointer;
}
</style>
