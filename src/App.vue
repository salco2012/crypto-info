<template>
  <div id="app">
    <v-app>
      <headerTop />

      <v-main>
        <router-view></router-view>
      </v-main>

      <footerBottom />
    </v-app>
  </div>
</template>

<script>
import headerTop from '@/components/HeaderTop.vue';
import footerBottom from '@/components/FooterBottom.vue';

export default {
  name: 'App',
  components: {
    headerTop,
    footerBottom,
  },
  data: () => ({}),
};
</script>

<style>
#app {
  background-color: #ab47bc;
}
</style>
