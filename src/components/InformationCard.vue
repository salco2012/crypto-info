<template>
  <v-container>
    <v-row class="mt-5">
      <v-col
        md="2"
        xs="6"
        v-for="(ticker, index) in cardsCurretnPage"
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
            <v-btn
              color="red"
              dark
              small
              @click.stop="deleteTickersCard(ticker)"
            >
              <span style="font-size: 16px; color: white;">
                <i class="far fa-trash-alt mr-1"></i>
              </span>
              Удалить</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <div class="pagination" v-if="getTickersCards.length > 12">
        <v-pagination
          v-model="pageNumber"
          :length="pages"
          total-visible="8"
          circle
        ></v-pagination>
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      cardsPerPage: 12,
      pageNumber: 1,
    };
  },
  computed: {
    pages() {
      return Math.ceil(this.getTickersCards.length / this.cardsPerPage);
    },
    cardsCurretnPage() {
      let from = (this.pageNumber - 1) * this.cardsPerPage;
      let to = from + this.cardsPerPage;
      return this.$store.getters.getTickersCards.slice(from, to);
    },
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
      this.$store.commit('SET_PRICE_ARHIVE_EMPTY'); // При выборе нового тикера, запускаем мутацию, которая сбрасывает архив цен для графика.
    },
    deleteTickersCard(ticker) {
      this.$store.commit('DELETE_TICKER_CARD', ticker);
    },
  },
};
</script>

<style scoped>
.border-card {
  border: 3px solid rgb(0, 0, 0);
}

.pagination {
  margin: 0 auto;
  cursor: pointer;
}
</style>
