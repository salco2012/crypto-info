export default {
  state: {
    priceArchive: [0, 0],
  },
  mutations: {
    SET_PRICE_ARHIVE_EMPTY(state) {
      state.priceArchive = [0, 0];
    },

    CARD_ARHIVE_UPDATE_PRICE(state, payload) {
      state.priceArchive.push(payload);
    },
  },
  actions: {
    getApiСryptoPrice({ commit, rootState }, currentTicker) {
      commit('SET_TICKERS_CARDS', currentTicker);
      try {
        setInterval(async () => {
          const response = await fetch(
            `https://min-api.cryptocompare.com/data/price?fsym=${currentTicker.name}&tsyms=USD&api_key=4b9a4ab5d678d62a4f000c38fafcdbee2fde445e9e3bd06f875e46b6a4ae53ff`
          );
          const result = await response.json();

          if (result.USD) {
            commit('SET_PRICE_CARDS', {
              currentTicker,
              result,
            });
          }
          if (
            rootState.informationCard.currentClickTicker?.name ===
            currentTicker.name
          ) {
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
  },
};
