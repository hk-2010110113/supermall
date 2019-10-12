<template>
  <div class="wrapper" ref="wrapper">
    <ul class="content">
      <button @click="alert">点击</button>
      <li>1.花副经理</li>
      <li>2.出现扣分的</li>
      <li>3.放假哦哦额</li>
      <li>4.家里佛尔</li>
      <li>5.分物品VR哦</li>
      <li>1.花副经理</li>
      <li>2.出现扣分的</li>
      <li>3.放假哦哦额</li>
      <li>4.家里佛尔</li>
      <li>5.分物品VR哦</li>
      <li>1.花副经理</li>
      <li>2.出现扣分的</li>
      <li>3.放假哦哦额</li>
      <li>4.家里佛尔</li>
      <li>5.分物品VR哦</li>
      <li>1.花副经理</li>
      <li>2.出现扣分的</li>
      <li>3.放假哦哦额</li>
      <li>4.家里佛尔</li>
      <li>5.分物品VR哦</li>
      <li>1.花副经理</li>
      <li>2.出现扣分的</li>
      <li>3.放假哦哦额</li>
      <li>4.家里佛尔</li>
      <li>5.分物品VR哦</li>
      <li>1.花副经理</li>
      <li>2.出现扣分的</li>
      <li>3.放假哦哦额</li>
      <li>4.家里佛尔</li>
      <li>5.分物品VR哦</li>
      <li>1.花副经理</li>
      <li>2.出现扣分的</li>
      <li>3.放假哦哦额</li>
      <li>4.家里佛尔</li>
      <li>5.分物品VR哦</li>
      <li>1.花副经理</li>
      <li>2.出现扣分的</li>
      <li>3.放假哦哦额</li>
      <li>4.家里佛尔</li>
      <li>5.分物品VR哦</li>
      <li>1.花副经理</li>
      <li>2.出现扣分的</li>
      <li>3.放假哦哦额</li>
      <li>4.家里佛尔</li>
      <li>5.分物品VR哦</li>
      <li>1.花副经理</li>
      <li>2.出现扣分的</li>
      <li>3.放假哦哦额</li>
      <li>4.家里佛尔</li>
      <li>5.分物品VR哦</li>
    </ul>
  </div>
</template>
<script>
import BScroll from '@better-scroll/core';
export default {
  data() {
    return {
      scroll:''
    };
  },
  mounted() {
    this.scroll = new BScroll('.wrapper',{
    })
  },
  methods:{
    alert(){
      console.log("1")
    }
  }
};
</script>
<style scoped>
.wrapper {
  height: 400px;
  background-color: pink;
  overflow: hidden;
}
</style>
