<template>
    <div class="document">
      <div class="content"><slot/></div>
      <div class="line">{{title}}</div>
      <div class="word">
        <slot name="word"></slot>
      </div>
    </div>
</template>

<script>
export default {
  props: ['title'],
};
</script>

<style lang="less" scoped>
.document{
  border: solid 1px #f1f1f1;
  border-radius: 5px;
  width: 50%;
  text-align: left;
  position: relative;
}
.content{
  padding: 30px 24px;
}
  .word{
    padding: 20px 24px;
    border-top: solid 1px #f1f1f1;
  }
  .line{
    position: absolute;
    background: #fff;
    padding: 0 10px;
    margin: -12px 0 0 15px;
  }
</style>
