<template>
  <div id="app">
    <v-app>
      <headerTop />
      <v-content>
        <router-view />
      </v-content>
      <footerBottom />
    </v-app>
  </div>
</template>

<script>
import headerTop from './components/header-top.vue';
import footerBottom from './components/footer-bottom.vue';

export default {
  name: 'App',
  components: {
    headerTop,
    footerBottom,
  },
  data: () => ({
    //
  }),
};
</script>

<style scoped>
#app {
  background-color: #ab47bc;
}
</style>
