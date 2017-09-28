<template lang="html">
  <div class="timeline">
    <h2 class="timeline__title">{{ title }}</h2>

    <div class="timeline__content">
      <div class="timeline__pipe"></div>
      <div class="timeline-item" v-for="item in items">
        <p class="timeline-item__icon">
          <icon v-for="icon in item.icon" v-bind:name="icon" scale="1.6"></icon>
        </p>
        <p class="timeline-item__time">{{ item.time }}</p>
        <p class="timeline-item__title">{{ item.title }}</p>
        <p class="timeline-item__desc">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// available icons
// Only import used ones to reduce the size of bundle
import 'vue-awesome/icons/graduation-cap';
import 'vue-awesome/icons/vcard';
import 'vue-awesome/icons/github';
import 'vue-awesome/icons/plane';

export default {
  props: {
    items: Array,
    title: String,
  },
  mounted() {
    console.log(this.items);
  },
};
</script>

<style lang="less" scoped>
  @import (reference) "../theme.less";
  .timeline {
    padding: 20px;
    padding-left: 60px;
    position: relative;
  }
  h2 {
    text-align: right;
    font-size: 1.7em;
    padding-right: 20px;
    color: @dark;
  }

  .timeline__content {
    padding-top: 20px;
    background-color: white;
  }
  .timeline__pipe {
    position: absolute;
    left: 40px;
    height: 100%;
    border-left: 1px solid @dark_super_light;
  }
  .timeline-item {
    position: relative;
    padding: 8px;
    padding-left: 12px;
    margin-bottom: 40px;
  }
  .timeline-item__time {
    font-size: 1.2em;
  }
  .timeline-item__title {
    font-size: 1.4em
  }
  .timeline-item__icon {
    position: absolute;
    background-color: white;
    left: -36px;
    width: 32px;
    top: 0;
    text-align: center;
    color: @green_light;
    padding-top: 8px;
    svg {
      display: block;
      margin: auto;
      margin-bottom: 8px;
    }
  }
</style>
