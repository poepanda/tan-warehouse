<template lang="html">
  <div class="single-round-pic">
    <slot></slot>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="less">
@import (reference) '../base.less';
.single-round-pic {
  text-align: center;
  display: block;
  width: 100%;
  padding: 20px;
  img {
    border-radius: 100%;
    width: 200px;
    @media (min-width: @tablet) { width: 230px }
    @media (min-width: @desktop) { width: 250px; margin: 20px }
  }
}
</style>
