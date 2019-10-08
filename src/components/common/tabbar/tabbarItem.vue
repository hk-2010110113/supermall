<template>
  <div class="bar-item" @click="itemClick">
    <div v-if="isshow">
      <slot name="item-subicon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon"></slot>
    </div>
    <!-- <div :class="{'active':isshow}">
      <slot name="item-text"></slot>
    </div>-->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    path: {
      type: String
    },
    activeColor: {
      type: String,
      default: "red"
    }
  },
  data() {
    return {};
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    }
  },
  computed: {
    isshow() {
      return this.$route.path.indexOf(this.path) > -1 ? true : false;
    },
    activeStyle() {
      return this.isshow ? { color: this.activeColor } : {};
    }
  }
};
</script>
<style scoped>
#tab-bar .bar-item {
  flex: 1;
  height: 49px;
  font-size: 14px;
  text-align: center;
}
.bar-item img {
  width: 18px;
  height: 18px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>