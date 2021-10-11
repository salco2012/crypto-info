<template>
  <v-container>
    <h1 class="titleText mt-4 text-center">
      Курс криптовалют:
    </h1>

    <AddTickerInput/>

    <InformationCard />

    <cryptocurrencyСhart />
  </v-container>
</template>

<script>
import InformationCard from '../components/InformationCard.vue';
import cryptocurrencyСhart from '../components/СryptocurrencyСhart.vue';
import AddTickerInput from '../components/AddTickerInput.vue';

export default {
  components: {
    cryptocurrencyСhart,
    InformationCard,
    AddTickerInput,
  },
};
</script>

<style scoped>
.titleText {
  font-family: 'Russo One', sans-serif;
  font-weight: normal;
  color: #490c53;
  margin: 0 auto;
  text-transform: uppercase;
}
</style>
