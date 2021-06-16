<template>
  <div id="app">
    <header>
      <div class="container">
        <j-menu horizontal>
          <j-menu-item link="/about">关于</j-menu-item>
          <j-menu-item link="/doc">组件</j-menu-item>
        </j-menu>
      </div>
    </header>
    <aside>
      <router-view/>
    </aside>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100%;
}
header{
  height: 60px;
  line-height: 60px;
  box-shadow: 0 0 8px 0 #eeeeee;
  margin-bottom: 30px;
  background: #fff;
  z-index: 99;
  position: sticky;
  top: 0;
  .container{
    width: 1200px;
    margin: 0 auto;
    text-align: right;
  }
}
aside{
  width: 1200px;
  margin: 0 auto;
  flex: 1;
  overflow: auto;
}
html,body{
  height: 100%;
  overflow: hidden;
}
*{
  margin: 0;
  padding: 0;
}
</style>
