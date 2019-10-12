<template>
  <div id="home">
    <!-- 这是导航 -->
    <navbar class="home-nav">
      <div slot="content">购物街</div>
    </navbar>
    <div style="padding-top:44px;">
      <p>哈哈哈哈哈</p>
      <p>哈哈哈哈哈</p>
      <p>哈哈哈哈哈</p>
      <p>哈哈哈哈哈</p>
      <p>哈哈哈哈哈</p>
      <p>哈哈哈哈哈</p>
      <p>哈哈哈哈哈</p>
      <p>哈哈哈哈哈</p>
      <p>哈哈哈哈哈</p>
      <p>哈哈哈哈哈</p>
      <p>哈哈哈哈哈</p>
      <p>哈哈哈哈哈</p>

      <!-- tab切换 -->
      <tabControl @tabClick="tabClick" class="tab-control" :titles="['流行','新款','精品']"></tabControl>
      <!-- tab切换时，下面显示的页面 -->
      <goodslist :goods="showGoods"></goodslist>
      <div>
        <p>哈哈哈哈哈</p>
        <p>哈哈哈哈哈</p>
        <p>哈哈哈哈哈</p>
        <p>哈哈哈哈哈</p>
        <p>哈哈哈哈哈</p>
        <p>哈哈哈哈哈</p>
        <p>哈哈哈哈哈</p>
        <p>哈哈哈哈哈</p>
        <p>哈哈哈哈哈</p>
        <p>哈哈哈哈哈</p>
        <p>哈哈哈哈哈</p>
        <p>哈哈哈哈哈</p>
        <p>哈哈哈哈哈</p>
        <p>哈哈哈哈哈</p>
        <p>哈哈哈哈哈</p>
        <p>哈哈哈哈哈</p>
        <p>哈哈哈哈哈</p>
        <p>哈哈哈哈哈</p>
        <p>哈哈哈哈哈</p>
        <p>哈哈哈哈哈</p>
        <p>哈哈哈哈哈</p>
        <p>哈哈哈哈哈</p>
        <p>哈哈哈哈哈</p>
        <p>哈哈哈哈哈</p>
        <p>哈哈哈哈哈</p>
        <p>哈哈哈哈哈</p>
        <p>哈哈哈哈哈</p>
        <p>哈哈哈哈哈</p>
        <p>哈哈哈哈哈</p>
        <p>哈哈哈哈哈</p>
        <p>哈哈哈哈哈</p>
        <p>哈哈哈哈哈</p>
        <p>哈哈哈哈哈</p>
        <p>哈哈哈哈哈</p>
        <p>哈哈哈哈哈</p>
        <p>哈哈哈哈哈</p>
        <p>哈哈哈哈哈</p>
        <p>哈哈哈哈哈</p>
        <p>哈哈哈哈哈</p>
        <p>哈哈哈哈哈</p>
        <p>哈哈哈哈哈</p>
      </div>
    </div>
  </div>
</template>
<script>
import navbar from "components/common/navbar/NavBar";
import { getHomeMultidata, getHomePopData } from "network/home";
import goodslist from "components/content/goods/goodsList";
import tabControl from "components/content/tabControl/tabControl";
export default {
  data() {
    return {
      result: null,
      goods: {
        pop: {
          page: 0,
          list: []
        },
        new: {
          page: 0,
          list: []
        },
        sell: {
          page: 0,
          list: []
        }
      },
      currentType: "pop"
    };
  },
  created() {
    //请求多个数据
    getHomeMultidata().then(res => {
      this.result = res.data;
      console.log(res);
    });
    this.getpopData("pop");
    // this.getpopData("news");
    // this.getpopData("pop");
  },
  components: {
    navbar,
    tabControl,
    goodslist
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  methods: {
    //流行的数据
    getpopData(type) {
      const page = this.goods[type].page + 1;
      getHomePopData(page, type).then(res => {
        this.goods[type].list.push(...res.top_search.words);
        this.goods[type].page += 1;
      });
    },
    //事件监听相关的方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
        default:
          break;
      }
    }
  }
};
</script>
<style scoped>
.home-nav {
  width: 100%;
  position: fixed;
  color: white;
  background-color: var(--color-tint);
}
.tab-control {
  position: sticky;
  top: 44px;
  background-color: #fff;
}
</style>