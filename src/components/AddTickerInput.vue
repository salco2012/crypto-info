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
        <v-row justify="start" align="center" v-if="ticker">
          <v-chip
            draggable
            class="ma-1"
            style="cursor: pointer"
            v-for="(item, index) in searchTicker"
            :key="index"
            @click="addTicker($event)"
          >
            {{ item }}
          </v-chip>
          <p v-if="repeatStatusSymbol" class="repeatText">
            Такой тикер уже добавлен!
          </p>
        </v-row>
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
      allCtyptoSymbol: [],
      repeatStatusSymbol: false,
    };
  },
  methods: {
    addTicker(event) {
      if (event.target.innerText !== 'ДОБАВИТЬ' && event.type !== 'keydown') {
        this.ticker = event.target.innerText;
      }

      if (!this.ticker) {
        this.$store.commit('SET_PRICE_ARHIVE_EMPTY');
      }

      if (this.getTickersCardsName.includes(this.ticker.toUpperCase())) {
        this.repeatStatusSymbol = true;
        return;
      } else {
        this.$store.dispatch('getApiСryptoPrice', {
          name: this.ticker.toUpperCase(),
          price: '-',
        });

        this.ticker = '';
        this.repeatStatusSymbol = false;
      }
    },
    async getApiCtyptoSymbol() {
      try {
        const response = await fetch(
          'https://min-api.cryptocompare.com/data/all/coinlist?summary=true'
        );
        const result = await response.json();
        Object.keys(result.Data).map((key) => {
          this.allCtyptoSymbol.push(result.Data[key].Symbol);
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.getApiCtyptoSymbol();
  },
  computed: {
    searchTicker() {
      return this.allCtyptoSymbol
        .filter((el) => {
          return el.toLowerCase().includes(this.ticker.toLowerCase());
        })
        .slice(0, 4);
    },
    getTickersCardsName() {
      return this.$store.getters.getTickersCards.map((el) => el.name);
    },
  },
};
</script>

<style scoped>
.repeatText {
  color: red;
  background-color: #e0e0e0;
  padding: 5px;
  width: 100%;
  border-radius: 20px;
  text-align: center;
  margin: 5px 0 5px 5px;
}
</style>
