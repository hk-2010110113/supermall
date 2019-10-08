<template>
  <div id="home">
    <navbar class="home-nav">
      <div slot="content">购物街</div>
    </navbar>
  </div>
</template>
<script>
import navbar from "components/common/navbar/NavBar";
import { getHomeMultidata } from "network/home";
export default {
  data() {
    return {
      result: null
    };
  },
  created() {
    //请求多个数据
    getHomeMultidata().then(res => {
      this.result = res;
      console.log(res);
    });
  },
  components: {
    navbar
  }
};
</script>
<style scoped>
.home-nav {
  color: white;
  background-color: var(--color-tint);
}
</style>