<template>
  <div>
    <h1 class="titleText mb-6 mt-4 text-center">
      Курс криптовалют:
    </h1>
    <v-row class="pt-10 pl-3" justify="center">
      <v-col lg="2" md="3" sm="4" xs="6" class="pa-0">
        <BaseInput v-model="ticker" @keydownEnter.prevent="addTicker" />
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
      <v-col lg="10" md="9" sm="8" xs="6">
        <BaseButton @click="addTicker" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import BaseButton from './BaseComponents/BaseButton.vue';
import BaseInput from './BaseComponents/BaseInput.vue';

export default {
  components: {
    BaseButton,
    BaseInput,
  },
  data() {
    return {
      ticker: null,
      allCtyptoSymbol: [], // Сюда пушим список актуальных монеток с сервера
      repeatStatusSymbol: false, //Флаг который сообщает нам добавляли ли мы данный тикер ранее или нет.
    };
  },
  methods: {
    addTicker(event) {
      if (event.target.innerText !== 'ДОБАВИТЬ' && event.type !== 'keydown') {
        this.ticker = event.target.innerText;
      }

      // При остутствии Тикера, запускаем мутацию, которая сбрасывает архив цен для графика
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

      sessionStorage.setItem(
        'cryptonomicon-list',
        JSON.stringify(this.getTickersCards)
      );
    },

    async getApiCtyptoSymbol() {
      try {
        const response = await fetch(
          `https://min-api.cryptocompare.com/data/blockchain/list?api_key=4b9a4ab5d678d62a4f000c38fafcdbee2fde445e9e3bd06f875e46b6a4ae53ff`
        );
        const result = await response.json();
        Object.keys(result.Data).map((key) => {
          this.allCtyptoSymbol.push(result.Data[key].symbol);
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    // Загружаем список доступных монеток с сервера
    this.getApiCtyptoSymbol();
    //Сохраняем тикеры в SessionStotage и при их наличии диспатчим
    const tickersSessionStorage = sessionStorage.getItem('cryptonomicon-list');

    if (tickersSessionStorage) {
      let tickers = JSON.parse(tickersSessionStorage);

      if (this.getTickersCards.length === 0) {
        for (let ticker in tickers) {
          this.$store.dispatch('getApiСryptoPrice', tickers[ticker]);
        }
      }
    }
  },
  computed: {
    // Предлагаем пользователю 4 подходящих тикера для возможности быстрого выбора.
    searchTicker() {
      return this.allCtyptoSymbol
        .filter((el) => {
          return el.toUpperCase().includes(this.ticker.toUpperCase());
        })
        .slice(0, 4);
    },
    getTickersCardsName() {
      return this.$store.getters.getTickersCards.map((el) => el.name);
    },
    getTickersCards() {
      return this.$store.getters.getTickersCards;
    },
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
