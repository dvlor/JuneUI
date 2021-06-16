<template>
  <div :class="{'j-menu-item': true, on, active, children}">
    <div class="item" :style="{paddingLeft: deep * 20 + 20 + 'px'}">
      <router-link @click.native="change" :to="link" class="j-menu-link"><slot/></router-link>
    </div>
    <div :class="{'j-menu-children': true, fold}" v-if="$slots.children">
      <slot name="children"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      fold: false,
      now: '',
    };
  },
  computed: {
    on() {
      return this.link && this.link === this.current;
    },
    current() {
      return this.$parent.current;
    },
    children() {
      return !!this.$slots.children;
    },
    deep() {
      return this.$parent.deep + 1;
    },
    active() {
      return !!this.now && this.now === this.current;
    },
  },
  created() {
    this.$on('change', (e) => {
      this.now = e.link;
      this.$parent.$emit('change', e);
    });
    this.fold = this.$parent.fold;
  },
  methods: {
    change() {
      if (!this.children) {
        this.$parent.$emit('change', { link: this.link });
      } else {
        this.fold = !this.fold;
      }
    },
  },
};
</script>

<style scoped>

</style>
