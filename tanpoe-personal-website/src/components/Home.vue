<template>
  <div class="Home">
    <SingleRoundPic>
      <img src="../assets/profile-pic.jpg" :title="title">
    </SingleRoundPic>
    <WaveBigQuote></WaveBigQuote>
  </div>
</template>

<script>
import WaveBigQuote from './WaveBigQuote';
import SingleRoundPic from './SingleRoundPic';

export default {
  name: 'home',
  data() {
    return {
      title: 'Hi! My name is Tan',
    };
  },
  components: {
    WaveBigQuote,
    SingleRoundPic,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import (reference) '../theme.less';

</style>
