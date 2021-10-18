<template>
  <v-btn
    :dark="dark"
    :color="color"
    :small="small"
    @click="click($event)"
    :disabled="disabled"
  >
    <v-icon left>
      {{ icon }}
    </v-icon>
    {{ title }}
  </v-btn>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    title: {
      type: String,
      default: 'Добавить',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: 'mdi-plus',
    },
    color: {
      type: String,
      default: 'green',
    },
    dark: {
      type: Boolean,
      default: true,
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    click($event) {
      this.$emit('click', $event);
    },
  },
};
</script>
