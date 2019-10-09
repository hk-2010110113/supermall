<template>
  <div id="home">
    <!-- 这是导航 -->
    <navbar class="home-nav">
      <div slot="content">购物街</div>
    </navbar>
    <!-- 下面 -->
    <tabControl :titles='["流行","新款","精品"]'></tabControl>
  </div>
</template>
<script>
import navbar from "components/common/navbar/NavBar";
import { getHomeMultidata } from "network/home";

import tabControl from "components/content/tabControl/tabControl"
export default {
  data() {
    return {
      result: null
    };
  },
  created() {
    //请求多个数据
    getHomeMultidata().then(res => {
      this.result = res.data;
      console.log(res);
    });
  },
  components: {
    navbar,
    tabControl
  }
};
</script>
<style scoped>
.home-nav {
  color: white;
  background-color: var(--color-tint);
}
</style>