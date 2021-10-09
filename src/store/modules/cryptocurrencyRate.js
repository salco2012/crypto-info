export default {
  state: {
    priceArchive: [],
    nameTickerAdd: null,
    currentClickTicker: null,
    newTicker: {
      name: null,
      price: 0,
    },
    tickersCards: [{ name: 'DEMO1', price: 15 }],
  },
  mutations: {
    UPDATE_PRICE_ARHIVE(state, payload) {
      state.priceArchive.push(payload);
    },
    UPDATE_NAME_TICKER_ADD(state, payload) {
      state.nameTickerAdd = payload;
    },
    SET_CURRENT_CLIENT_TICKER(state, payload) {
      state.currentClickTicker = payload;
    },
    DELETE_TICKER_CARD(state, payload) {
      state.tickersCards = state.tickersCards.filter((t) => t !== payload);
      state.currentClickTicker = null;
    }
    // UPDATE_NEW_TICKER(state, payload) {
    //   state.newTicker = payload;
    // },
  },
  actions: {
    getApiСryptoPrice({ commit }) {
      setInterval(async () => {
        const response = await fetch(
          `https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD&api_key=4b9a4ab5d678d62a4f000c38fafcdbee2fde445e9e3bd06f875e46b6a4ae53ff`
        );
        const result = await response.json();
        commit('UPDATE_PRICE_ARHIVE', result.USD);
      }, 5000);
    },
  },
  getters: {
    getPriceArchive(state) {
      return state.priceArchive;
    },
    getTickersCards(state) {
      return state.tickersCards;
    },
    getCurrentClickTicker(state) {
      return state.currentClickTicker;
    },
  },
};
