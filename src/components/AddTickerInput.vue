<template>
<v-container bg fill-height grid-list-md text-xs-center>
  <v-row class="pt-10 pl-0" justify="center">
    <v-col cols="2" class="pa-0">
      <v-text-field
        dark
        label="Например ZCash"
        v-model.trim="ticker"
        @keydown.enter="addTicker"
      />
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
</v-container>
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
      this.$store.commit('SET_PRICE_ARHIVE_EMPTY');
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

<style scoped>
</style>
