<template>
  <v-row class="pt-10 pl-12">
    <v-col cols="2" class="pa-0">
      <v-text-field dark label="Например ZCash" v-model.trim="ticker" />
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
      this.$store.dispatch('getApiСryptoPrice')
      this.$store.commit('UPDATE_NAME_TICKER_ADD', this.ticker);
      this.ticker = '';
    },
  },
};
</script>
