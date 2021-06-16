<template>
  <div :class="{'j-menu': true, horizontal}" @change="change">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    defaultCurrent: {
      type: String,
      default: '',
    },
    horizontal: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      deep: 0,
      fold: this.horizontal,
      current: this.defaultCurrent,
    };
  },
  created() {
    this.$on('change', (e) => this.change(e));
  },
  methods: {
    change(e) {
      this.current = e.link;
      this.$emit('activeChange', e);
    },
  },
};
</script>

<style scoped>

</style>
