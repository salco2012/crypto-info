<template>
  <v-row class="mt-5">
    <v-col
      md="2"
      xs="6"
      v-for="(ticker, index) in getTickersCards"
      :key="index"
    >
      <v-card
        @click="selectTicker(ticker)"
        :class="{
          'border-card': currentClickTicker === ticker,
        }"
      >
        <v-card-text class="text-center mb-n4">
          {{ ticker.name }}
        </v-card-text>
        <v-card-title class="justify-center mb-n2">
          {{ ticker.price }}
        </v-card-title>
        <v-card-actions class="justify-center pb-3">
          <v-btn color="red" dark small @click.stop="deleteTickersCard(ticker)">
            <span style="font-size: 16px; color: white;">
              <i class="far fa-trash-alt mr-1"></i>
            </span>
            Удалить</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  computed: {
    getTickersCards() {
      return this.$store.getters.getTickersCards;
    },
    currentClickTicker() {
      return this.$store.getters.getCurrentClickTicker;
    },
  },
  methods: {
    selectTicker(ticker) {
      this.$store.commit('SET_CURRENT_CLIENT_TICKER', ticker);
      this.$store.commit('SET_PRICE_ARHIVE_EMPTY') // При выборе нового тикера, запускаем мутацию, которая сбрасывает архив цен для графика.
    },
    deleteTickersCard(ticker) {
      this.$store.commit('DELETE_TICKER_CARD', ticker)
    }
  },
};
</script>

<style scoped>
.border-card {
  border: 3px solid rgb(0, 0, 0);
}
</style>
