<template>
    <div>
      <doc title="按钮类型">
        <j-button type="primary">Primary Button</j-button>
        <j-button>Default Button</j-button>
        <j-button type="text">Text Button</j-button>
        <j-button type="link">Link Button</j-button>
        <template v-slot:word>
          Button一共有四种类型，primary/default/text/link
        </template>
      </doc>
      <doc title="按钮尺寸">
        <j-button size="mini">mini</j-button>
        <j-button>normal</j-button>
        <j-button size="large">large</j-button>
        <template v-slot:word>
          Button 一共有三种尺寸mini/normal/large
        </template>
      </doc>
      <doc title="按钮形状">
        <j-button shape="circle">A</j-button>
        <j-button>radius</j-button>
        <j-button shape="rectangle">rectangle</j-button>
        <template slot="word">
          Button 一共有三种形状circle/default/rectangle
        </template>
      </doc>
    </div>
</template>

<script>
export default {
};
</script>

<style scoped>

</style>
