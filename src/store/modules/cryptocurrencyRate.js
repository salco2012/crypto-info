export default {
  state: {
    priceArchive: [],
    tickersCards: [],
    currentClickTicker: null,
  },
  mutations: {
    SET_TICKERS_CARDS(state, payload) {
      state.tickersCards.push(payload);
    },

    SET_CURRENT_CLIENT_TICKER(state, payload) {
      state.currentClickTicker = payload;
    },

    SET_PRICE_ARHIVE_EMPTY(state) {
      state.priceArchive = [];
    },

    SET_PRICE_CARDS(state, { currentTicker, result }) {
      state.tickersCards.find(
        (ticker) => ticker.name === currentTicker.name
      ).price =
        result.USD > 1 ? +result.USD.toFixed(2) : +result.USD.toPrecision(2);
    },

    CARD_ARHIVE_UPDATE_PRICE(state, payload) {
      state.priceArchive.push(payload);
    },

    DELETE_TICKER_CARD(state, payload) {
      state.tickersCards = state.tickersCards.filter((t) => t !== payload);
      state.currentClickTicker = null;
    },
  },
  actions: {
    getApiСryptoPrice({ commit, state }, currentTicker) {
      commit('SET_TICKERS_CARDS', currentTicker);
      try {
        setInterval(async () => {
          const response = await fetch(
            `https://min-api.cryptocompare.com/data/price?fsym=${currentTicker.name}&tsyms=USD&api_key=4b9a4ab5d678d62a4f000c38fafcdbee2fde445e9e3bd06f875e46b6a4ae53ff`
          );
          const result = await response.json();

          commit('SET_PRICE_CARDS', {
            currentTicker,
            result,
          });

          if (state.currentClickTicker?.name === currentTicker.name) {
            commit('CARD_ARHIVE_UPDATE_PRICE', result.USD);
          }
        }, 5000);
      } catch (error) {
        console.error(error);
      }
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
