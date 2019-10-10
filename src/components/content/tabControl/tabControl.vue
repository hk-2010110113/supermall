<template>
  <div class="tab-control">
    <div
      @click="tabClick(index)"
      class="tab-control-item"
      v-for="(title,index) in titles"
      :key="index"
      :class="{'active':currentIndex===index}"
    >
      <span>{{title}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  computed: {},
  methods: {
    tabClick(index) {
      this.currentIndex = index;
    }
  }
};
</script>
<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>