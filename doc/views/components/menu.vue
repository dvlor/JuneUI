<template>
  <div>
    <document>
      <j-menu>
        <j-menu-item link="">菜单一</j-menu-item>
        <j-menu-item link="">菜单二</j-menu-item>
        <j-menu-item link="">菜单三</j-menu-item>
        <j-menu-item link="">菜单四</j-menu-item>
      </j-menu>
    </document>
    <document>
      <j-menu horizontal>
        <j-menu-item link="">菜单一</j-menu-item>
        <j-menu-item link="">菜单二</j-menu-item>
        <j-menu-item link="">菜单三</j-menu-item>
        <j-menu-item link="">
          菜单四
          <template v-slot:children>
            <j-menu-item link="">菜单一</j-menu-item>
            <j-menu-item link="">菜单二</j-menu-item>
            <j-menu-item link="">菜单三</j-menu-item>
            <j-menu-item link="">
              菜单四
              <template v-slot:children>
                <j-menu-item link="">菜单一</j-menu-item>
                <j-menu-item link="">菜单二</j-menu-item>
                <j-menu-item link="">菜单三</j-menu-item>
                <j-menu-item link="">菜单四</j-menu-item>
              </template>
            </j-menu-item>
          </template>
        </j-menu-item>
      </j-menu>
    </document>
  </div>
</template>

<script>
import Document from '../../components/document.vue';

export default {
  components: { Document },
};
</script>

<style scoped>

</style>
