<template>
  <v-app-bar app color="purple darken-2" dark>
    <v-toolbar-title>
      <router-link style="text-decoration: none; color: inherit;" to="/">
        <div class="d-flex align-center">
          <img
            class="mr-2"
            src="../assets/img/btc.png"
            alt="logo"
            height="35"
          />
          <p class="ma-0">Crypto-info</p>
        </div>
      </router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <template v-if="isUserAuthenticated === false">
      <v-btn
        v-for="(item, index) in menuItemsHome"
        :key="`menuItemsHome${index}`"
        light
        rounded
        :to="item.route"
        class="ml-2"
        @click="clearError"
      >
        {{ item.title }}
        <v-icon right v-html="item.icon"></v-icon> </v-btn
    ></template>

    <template v-if="isUserAuthenticated === true">
      <v-btn
        v-for="(item, index) in menuItemsUserAccount"
        :key="`menuItemsUserAccount${index}`"
        light
        rounded
        :to="item.route"
        class="ml-2"
        @click="exitUserAccount($event)"
      >
        {{ item.title }}
        <v-icon right v-html="item.icon"></v-icon>
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    clearError() {
      // Вызываю мутации которая очищает ошибки в хранилище.
      return this.$store.commit('CLEAR_ERROR');
    },
    exitUserAccount(event) {
      if (event.target.outerText.toLowerCase() === 'выйти') {
        this.$confirm('Может еще побудете с нами?').then((res) => {
          if (res) {
            this.$router.push('/'); 
            return this.$store.dispatch('exitUserAccount');
          }
        });
      }
    },
  },
  computed: {
    isUserAuthenticated() {
      return this.$store.getters.isUserAuthenticated;
    },
    menuItemsHome() {
      return [
        {
          icon: 'far fa-address-card',
          title: 'Регистрация',
          route: '/registration-form',
        },
        {
          icon: 'mdi-fingerprint',
          title: 'Авторизация',
          route: '/authorization',
        },
      ];
    },
    menuItemsUserAccount() {
      return [
        {
          icon: 'mdi-bitcoin',
          title: 'Курс криптовалют',
          route: '/сryptocurrency-rate',
        },
        {
          icon: 'mdi-newspaper-variant-multiple',
          title: 'Актуальные новости',
          route: '/actual-news',
        },
        {
          icon: 'mdi-account-circle',
          title: 'Выйти',
          route: null,
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped></style>
