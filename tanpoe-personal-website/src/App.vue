<template>
  <div id="app">
    <TopBar :nav-list="nav"></TopBar>
    <router-view></router-view>
    <footer>
      <Contact id="contact" :info="contactInfo"></Contact>
    </footer>
  </div>
</template>

<script>
import TopBar from './components/TopBar';
import Contact from './components/Contact';
import enContent from './data/content.en.json';
import viContent from './data/content.vi.json';

export default {
  name: 'app',
  data() {
    const content = (this.$store.state.lang === 'vi') ? viContent : enContent;
    return {
      nav: content.nav,
      contactInfo: content.contactInfo,
    };
  },
  components: {
    TopBar,
    Contact,
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
