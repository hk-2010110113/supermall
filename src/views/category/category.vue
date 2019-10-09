<template>
  <div>
    <navbar>
      <div slot="icon-left"></div>
      <div slot="content">
        <div class="content-container">
          <router-link to="/category/comments" tag="span">评价</router-link>
          <span>1</span>
          <span>1</span>
          <span>1</span>
        </div>
      </div>
      <div slot="icon-right">></div>
    </navbar>
    <router-view />
  </div>
</template>
<script>
import navbar from "components/common/navbar/NavBar";
export default {
  components: {
    navbar
  }
};
</script>
<style scoped>
.content-container {
  display: flex;
}
.content-container span {
  flex: 1;
}
</style>