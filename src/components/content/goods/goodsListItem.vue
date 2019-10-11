<template>
  <div class="goods-item">
    <ul>
      <li>{{goodsItem}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    goodsItem: {
      type: String,
      default() {
        return [];
      }
    }
  }
};
</script>
<style scoped>
</style>