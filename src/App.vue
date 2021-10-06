<template>
  <div id="app">
    <v-app>
      <v-btn
      width="300"
      class="ml-auto"
      rounded
      @click="$router.push('/authorization')">
      <v-icon class="mr-2">
        mdi-fingerprint
      </v-icon>
      Авториция</v-btn>
      <v-content>
        <router-view />
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style scoped></style>
