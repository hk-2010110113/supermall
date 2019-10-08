<template>
  <div class="nav-item" v-show="ifshow">
    <slot name="icon-left"></slot>
    <slot name="content"></slot>
    <slot name="icon-right"></slot>
  </div>
</template>
<script>
export default {
  props: [
    'path'
  ],
  computed: {
    ifshow() {
      return this.$route.path === this.path ? true : false;
    }
  }
};
</script>
<style scoped>
</style>