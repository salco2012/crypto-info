<template>
  <v-container fluid>
    <div class="wrapper-sparkline">
      <v-sparkline
        :fill="true"
        color="rgba(194, 34, 127, .9)"
        line-width="4"
        padding="0"
        height="50"
        :smooth="10"
        :value="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
        auto-draw
      ></v-sparkline>
    </div>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper-sparkline {
   background-color: white;
   border-radius: 25px;
   box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.514);
   overflow: hidden;
   /* background-color: rgba(194, 34, 127, 0.616); */

   
}
</style>
