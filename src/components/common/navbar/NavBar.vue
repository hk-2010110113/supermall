<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="icon-left"></slot>
    </div>
    <div class="center">
      <slot name="content"></slot>
    </div>
    <div class="right">
      <slot name="icon-right"></slot>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.nav-bar {
  display: flex;
  text-align: center;
  height: 44px;
  line-height: 44px;
  box-shadow: 0 1px 1px rgba(100,100,100,.1);
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
}
</style>