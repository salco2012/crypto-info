<template>
  <div>
    <AddTickerInput />

    <InformationCard />

    <CryptocurrencyСhart />
  </div>
</template>

<script>
import InformationCard from '../components/InformationCard.vue';
import CryptocurrencyСhart from '../components/СryptocurrencyСhart.vue';
import AddTickerInput from '../components/AddTickerInput.vue';

export default {
  components: {
    CryptocurrencyСhart,
    InformationCard,
    AddTickerInput,
  },
};
</script>

<style scoped></style>
