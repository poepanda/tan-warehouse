<template>
  <div id="app">
    <TopBar></TopBar>
    <router-view></router-view>
  </div>
</template>

<script>
import TopBar from './components/TopBar';

export default {
  name: 'app',
  components: {
    TopBar,
  },
};
</script>

<style lang="less">
@import './theme.less';
@import './base.less';

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body, html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  font-family: @default_font_family;
  color: #2c3e50;
}

</style>
