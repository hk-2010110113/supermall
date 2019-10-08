<template>
  <tabbar>
    <tabbaritem path="/home" activeColor="red">
      <img slot="item-subicon" src="~assets/img/n1.jpg" />
      <img slot="item-icon" src="~assets/img/1.jpg" />
      <div slot="item-text">首页</div>
    </tabbaritem>
    <tabbaritem path="/category" activeColor="blue">
      <img slot="item-subicon" src="~/assets/img/n2.jpg" />
      <img slot="item-icon" src="~/assets/img/2.jpg" />
      <div slot="item-text">分类</div>
    </tabbaritem>
    <tabbaritem path="/cart" activeColor="green">
      <img slot="item-subicon" src="~/assets/img/n3.jpg" />
      <img slot="item-icon" src="~/assets/img/3.jpg" />
      <div slot="item-text">购物车</div>
    </tabbaritem>
    <tabbaritem path="/profile" activeColor="pink">
      <img slot="item-subicon" src="~/assets/img/n4.jpg" />
      <img slot="item-icon" src="~/assets/img/4.jpg" />
      <div slot="item-text">我的</div>
    </tabbaritem>
  </tabbar>
</template>
<script>
import tabbar from "components/common/tabbar/tabbar";
import tabbaritem from 'components/common/tabbar/tabbarItem'
export default {
    components:{
       tabbar, tabbaritem
    }
};
</script>
<style scoped>
</style>