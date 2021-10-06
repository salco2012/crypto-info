<template>
  <router-view>Авторизация</router-view>
</template>

<script>
import avtorizatsiyaForm from '../components/authorization-form.vue';

export default {
  name: 'Home',

  components: {
    avtorizatsiyaForm,
  },
};
</script>

<style scoped></style>
