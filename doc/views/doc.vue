<template>
  <div class="container">
    <div class="left">
      <j-menu :current="current" @activeChange="change">
        <j-menu-item>
          基础组件
          <template v-slot:children>
            <j-menu-item link="/doc/button">按钮 Button</j-menu-item>
          </template>
        </j-menu-item>
        <j-menu-item>
          导航
          <template v-slot:children>
            <j-menu-item link="/doc/menu">菜单 Menu</j-menu-item>
          </template>
        </j-menu-item>
      </j-menu>
    </div>
    <div class="right">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: '',
    };
  },
  methods: {
    change(e) {
      this.current = e.link;
    },
  },
};
</script>

<style scoped>
.container{
  display: flex;
  overflow: hidden;
  height: 100%;
}
.left{
  flex: 1;
  margin-right: 30px;
  padding-top: 20px;
  border-right: solid 1px #eee;
  overflow: auto;
}
  .right{
    width: 900px;
    overflow: auto;
  }
</style>
