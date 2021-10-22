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
        class="hidden-sm-and-down ml-2"
        @click="clearError"
      >
        {{ item.title }}
        <v-icon right v-html="item.icon"></v-icon>
      </v-btn>
      <div class="hidden-md-and-up">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="transparent" v-bind="attrs" v-on="on" depressed>
              <i class="fas fa-bars"></i>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in menuItemsHome"
              :key="index"
              :to="item.route"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </template>

    <template v-if="isUserAuthenticated === true">
      <v-btn
        v-for="(item, index) in menuItemsUserAccount"
        :key="`menuItemsUserAccount${index}`"
        light
        rounded
        :to="item.route"
        class="hidden-md-and-down ml-3"
        @click="exitUserAccount($event)"
      >
        {{ item.title }}
        <v-icon right v-html="item.icon"></v-icon>
      </v-btn>

      <div class="hidden-lg-and-up">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="transparent" v-bind="attrs" v-on="on" depressed>
              <i class="fas fa-bars"></i>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in menuItemsUserAccount"
              :key="index"
              :to="item.route"
              @click="exitUserAccount($event)"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
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
          route: '/cryptocurrency-rate',
        },
        {
          icon: 'mdi-newspaper-variant-multiple',
          title: 'Новости',
          route: '/actual-news',
        },
        {
          icon: 'far fa-hdd',
          title: 'Данные по майнингу',
          route: '/mining',
        },
        {
          icon: 'mdi-domain',
          title: 'Биржи',
          route: '/information-exchanges',
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
