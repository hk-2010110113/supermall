<template>
  <div id="app">
    <router-view></router-view>
    <maintabbar></maintabbar>
  </div>
</template>

<script>
import maintabbar from 'components/content/mainTabbar/MainTabBar'
export default {
  name: "app",
  components: {
    maintabbar
  }
};
</script>

<style>
@import './assets/css/base.css';
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
