export default {
  state: {
    priceArchive: [],
  },
  mutations: {
    UPDATE_PRICE_ARHIVE(state, payload) {
      state.priceArchive.push(payload);
    }
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
  },
};
