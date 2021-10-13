<template>
  <v-container fluid class="pl-0">
    <div class="wrapper-sparkline">
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

.title-charh {
  position: absolute;
  top: 5px;
  left: 10px;
  text-indent: 0px;
}

</style>
