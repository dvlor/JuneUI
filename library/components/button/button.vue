<template>
  <div role="button" :class="className"><slot></slot></div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return ['default', 'primary', 'text', 'link'].indexOf(value) !== -1;
      },
    },
    size: {
      type: String,
      default: 'normal',
      validator(value) {
        return ['normal', 'mini', 'large'].indexOf(value) !== -1;
      },
    },
    shape: {
      type: String,
      default: '',
      validator(value) {
        return ['', 'circle', 'rectangle'].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    className() {
      const result = {
        'j-button': true,
      };

      result[`j-button-${this.size}`] = true;
      result[`j-button-${this.type}`] = true;
      if (this.shape) {
        result[`j-button-${this.shape}`] = true;
      }
      return result;
    },
  },
};
</script>

<style>

</style>
