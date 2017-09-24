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
.single-round-pic {
  text-align: center;
  display: block;
  width: 100vw;
  padding: 20px;
  img {
    border-radius: 100%;
    width: 200px;
  }
}
</style>
