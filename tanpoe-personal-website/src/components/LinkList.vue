<template lang="html">
  <div class="link-badges">
    <div class="container">
      <h2 class="title">{{ title }}</h2>
      <div class="list-wrapper image" v-if="type === 'image'">
        <a class="image-item" v-for="item in list" :href="item.url">
          <img :src="item.image" :alt="item.name" :title="item.name">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    type: String,
    list: Array,
  },
};
</script>

<style lang="less">
.list-wrapper {
  text-align: center;
  display: block;
  position: relative;
  padding-bottom: 20px;
}
.image-item {
  display: inline;
  img { width: 72px; margin: 8px;}
}
</style>
