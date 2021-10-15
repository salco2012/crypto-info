export default {
  state: {
    tickersCards: [],
    currentClickTicker: null,
    priceArchive: [0, 0],
    intervalPrice: [],
  },
  mutations: {
    SET_INTERVAL_PRICE(state, payload) {
      state.intervalPrice.push(payload);
    },

    SET_PRICE_ARHIVE_EMPTY(state) {
      state.priceArchive = [0, 0];
    },
    CARD_ARHIVE_UPDATE_PRICE(state, payload) {
      state.priceArchive.push(payload);
    },

    SET_CURRENT_CLIENT_TICKER(state, payload) {
      state.currentClickTicker = payload;
    },
    SET_TICKERS_CARDS(state, payload) {
      state.tickersCards.push(payload);
    },
    SET_PRICE_CARDS(state, { currentTicker, result }) {
      state.tickersCards.find(
        (ticker) => ticker.name === currentTicker.name
      ).price =
        result.USD > 1 ? +result.USD.toFixed(2) : +result.USD.toPrecision(2);
    },
    RESET_CURRENT_CLICK_TICKER(state) {
      state.currentClickTicker = null;
    },
    DELETE_TICKER_CARD(state, payload) {
      //Находим индекс удаленной карточки
      let indexTicker = state.tickersCards.findIndex((el) => {
        return el.name === payload.name;
      });

      //Удаляем setInterval по найденному индексу
      clearInterval(state.intervalPrice[indexTicker]);

      //Удаляем элемент из массива интервалов
      state.intervalPrice.splice(indexTicker, 1);

      //Возвращаем отфильтрованные карточки
      state.tickersCards = state.tickersCards.filter((t) => t !== payload);

      //Ставим currentClickTicker в null для того, чтобы сбросить график
      state.currentClickTicker = null;
    },
  },
  actions: {
    getApiСryptoPrice({ state, commit }, currentTicker) {
      commit('SET_TICKERS_CARDS', currentTicker);

      let nameInterval = null;

      try {
        nameInterval = setInterval(async () => {
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

          if (state.currentClickTicker?.name === currentTicker.name) {
            commit('CARD_ARHIVE_UPDATE_PRICE', result.USD);
          }
        }, 5000);
      } catch (error) {
        console.error(error);
      }
      commit('SET_INTERVAL_PRICE', nameInterval);
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
