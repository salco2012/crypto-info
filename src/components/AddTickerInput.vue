<template>
  <v-row class="pt-10 pl-12">
    <v-col cols="2" class="pa-0">
      <v-text-field dark label="Например ZCash" v-model.trim="ticker" @keydown.enter="addTicker"/>
    </v-col>
    <v-col>
      <v-btn dark color="green" @click="addTicker">
        <v-icon left>
          mdi-plus
        </v-icon>
        Добавить
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      ticker: null,
    };
  },
  methods: {
    addTicker() {
      if (this.ticker) {
        this.$store.dispatch('getApiСryptoPrice', this.ticker);
        this.$store.commit('UPDATE_NAME_TICKER_ADD', this.ticker);
        this.$store.commit('SET_TICKERS_CARDS', {
          name: this.ticker,
          price: '-',
        });
        this.ticker = '';
      }
    },
  },
};
</script>
