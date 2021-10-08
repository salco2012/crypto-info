<template>
  <v-container fluid>
    <div class="wrapper-sparkline">
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
  },
};
</script>

<style scoped>
.wrapper-sparkline {
  background-color: white;
  border-radius: 25px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.514);
  overflow: hidden;
}
</style>
