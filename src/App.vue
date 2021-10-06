<template>
  <div id="app">
    <v-app>
      <headerTop/>
      <v-content>
        <router-view />
      </v-content>
    </v-app>
  </div>
</template>

<script>
import headerTop from './components/header-top.vue'

export default {
  name: 'App',
  components: {
    headerTop
  },
  data: () => ({
    //
  }),
};
</script>

<style scoped></style>
