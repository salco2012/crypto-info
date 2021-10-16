<template>
  <v-container>
    <h1 class="titleText mb-6 mt-4 text-center">Данные о майнинге</h1>
    <v-card class="mb-5" v-for="(item, index) in miningData" :key="index">
      <v-card-title>
        {{ item.CoinInfo.Name }}
      </v-card-title>
      <v-card-text>
        {{ item.CoinInfo.FullName }}
      </v-card-text>
      <v-btn>
        {{ item.Price.USD }}
      </v-btn>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      miningData: [],
    };
  },
  methods: {
    async getApiMiningData() {
      const response = await fetch(
        `https://min-api.cryptocompare.com/data/blockchain/mining/calculator?fsyms=BTC,ETH,ZEC&tsyms=USD&api_key=4b9a4ab5d678d62a4f000c38fafcdbee2fde445e9e3bd06f875e46b6a4ae53ff`
      );
      const result = await response.json();
      Object.keys(result.Data).filter((key) => {
        this.miningData.push(result.Data[key]);
      });
    },
  },
  created() {
    this.getApiMiningData();
  },
};
</script>

<style lang="scss" scoped>
.titleText {
  font-family: 'Russo One', sans-serif;
  font-weight: normal;
  color: #490c53;
  margin: 0 auto;
  text-transform: uppercase;
}
</style>
