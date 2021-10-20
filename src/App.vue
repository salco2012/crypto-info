<template>
  <v-app>
    <headerTop />

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>

    <footerBottom />
  </v-app>
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
