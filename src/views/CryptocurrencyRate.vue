<template>
  <div>
    <AddTickerInput />

    <InformationCard />

    <cryptocurrencyСhart />
  </div>
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

