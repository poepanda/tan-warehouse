<template lang="html">
  <div class="contact-me">
    <h6>Having something to say? Reach out to me!</h6>
    <div class="contact-container container">
      <a :href="info.facebook">
        <icon name="facebook" scale="2"></icon>
      </a>
      </a>
      <a :href="info.github">
        <icon name="github" scale="2"></icon>
      </a>
      <a :href="info.linkedin">
        <icon name="linkedin" scale="2"></icon>
      </a>
      <a :href="info.twitter">
        <icon name="twitter" scale="2"></icon>
      </a>
      </a>
      <a :href="info.instagram">
        <icon name="instagram" scale="2"></icon>
      </a>
      </a>
      <a :href="info.mail">
        <icon name="inbox" scale="2"></icon>
      </a>
    </div>
  </div>
</template>

<script>
import 'vue-awesome/icons/facebook';
import 'vue-awesome/icons/twitter';
import 'vue-awesome/icons/linkedin';
import 'vue-awesome/icons/instagram';
import 'vue-awesome/icons/github';
import 'vue-awesome/icons/inbox';

export default {
  props: {
    info: Object,
  },
};
</script>

<style lang="less" scoped>
@import (reference) '../theme.less';
@import (reference) '../base.less';

h6 {
  font-size: 0.8em;
  text-align: center;
  padding-top: 12px;
}
.contact-me {
  background-color: @orange_light;
}
.contact-container {
  padding: 12px;
  text-align: center;
}
a {
  display: inline-block;
  color: @dark;
  margin: 4px 9px;
  &:hover { color: black }
}
</style>
