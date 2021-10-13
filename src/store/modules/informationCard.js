export default {
  state: {
    tickersCards: [],
    currentClickTicker: null,
  },
  mutations: {
    RESET_CURRENT_CLICK_TICKER(state) {
      state.currentClickTicker = null;
    },
    SET_CURRENT_CLIENT_TICKER(state, payload) {
      state.currentClickTicker = payload;
    },
    SET_TICKERS_CARDS(state, payload) {
      state.tickersCards.push(payload);
    },
    SET_PRICE_CARDS(state, { currentTicker, result }) {
      if (state.currentClickTicker) {
        state.tickersCards.find(
          (ticker) => ticker.name === currentTicker.name
        ).price =
          result.USD > 1 ? +result.USD.toFixed(2) : +result.USD.toPrecision(2);
      }
    },
    DELETE_TICKER_CARD(state, payload) {
      state.tickersCards = state.tickersCards.filter((t) => t !== payload);
    },
  },
  actions: {},
  getters: {
    getTickersCards(state) {
      return state.tickersCards;
    },
    getCurrentClickTicker(state) {
      return state.currentClickTicker;
    },
  },
};
