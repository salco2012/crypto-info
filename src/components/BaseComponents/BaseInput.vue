<template>
  <v-text-field
    :dark="dark"
    :type="type"
    :label="label"
    :value="value"
    @input="updateValue($event)"
    @keydown.enter="keydownEnter($event)"
  />
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    label: {
      type: String,
      default: 'Например ZCash',
    },
    dark: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: [String, Number],
      default: '',
    },
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event);
    },
    keydownEnter(event) {
      this.$emit('keydownEnter', event);
    },
  },
};
</script>

<style lang="scss" scoped></style>
