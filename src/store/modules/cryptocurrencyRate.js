export default {
  state: {
    priceArchive: [],
    nameTickerAdd: null,
    tickersCards: [],
    currentClickTicker: null,
  },
  mutations: {
    UPDATE_NAME_TICKER_ADD(state, payload) {
      state.nameTickerAdd = payload;
    },
    SET_CURRENT_CLIENT_TICKER(state, payload) {
      state.currentClickTicker = payload;
    },
    DELETE_TICKER_CARD(state, payload) {
      state.tickersCards = state.tickersCards.filter((t) => t !== payload);
      state.currentClickTicker = null;
    },
    SET_TICKERS_CARDS(state, payload) {
      state.tickersCards.push(payload);
    },
    CARD_ARHIVE_UPDATE_PRICE(state, payload) {
      let result = (state.tickersCards.find(
        (ticker) => ticker.name === state.currentClickTicker.name
      ).price = payload);
      state.priceArchive.push(result);
    },
    CURRENT_CLIENT_TICKER_iS_NULL(state) {
      state.currentClickTicker = null;
    },
    SET_PRICE_ARHIVE_EMPTY(state) {
      state.priceArchive = [];
    },
  },
  actions: {
    getApiСryptoPrice({ commit, state }, cryptoName) {
      setInterval(async () => {
        const response = await fetch(
          `https://min-api.cryptocompare.com/data/price?fsym=${cryptoName}&tsyms=USD&api_key=4b9a4ab5d678d62a4f000c38fafcdbee2fde445e9e3bd06f875e46b6a4ae53ff`
        );
        const result = await response.json();
        if (state.currentClickTicker?.name === cryptoName) {
          commit('CARD_ARHIVE_UPDATE_PRICE', result.USD);
        }
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
    getNameTickerAdd(state) {
      return state.nameTickerAdd;
    },
  },
};
