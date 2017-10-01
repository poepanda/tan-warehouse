<template lang="html">
  <div class="skill-blocks container">
    <h2 class="skill-blocks__title">{{ title }}</h2>
    <div class="blocks-container">
      <div class="skill-block" v-for="skill in skills">
        <div class="skill-block__image">
          <img :src="skill.image" :title="skill.name" v-tooltip.right="skill.name" :alt="skill.name">
        </div>
        <div class="progress">
          <div class="progress__bar">
            <div class="progress__cover" :style="`width: ${skill.progress}%`"></div>
          </div>
          <div class="progress__info">
            <span class="progress__percentage">{{ skill.progress }}%</span>
            <div class="progress__badges">
              <icon v-for="badge in skill.badges" v-bind:name="badge.icon" v-tooltip.left="badge.title" scale="1.6" :title="badge.title"></icon>
            </div>
          </div>
        </div class="progress">
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-awesome/icons/child';
import 'vue-awesome/icons/id-card-o';
import 'vue-awesome/icons/plane';
import 'vue-awesome/icons/calendar-check-o';
import 'vue-awesome/icons/anchor';
import 'vue-awesome/icons/heart';
import 'vue-awesome/icons/heartbeat';
import 'vue-awesome/icons/globe';
import 'vue-awesome/icons/key';
import 'vue-awesome/icons/cog';
import 'vue-awesome/icons/cogs';
import 'vue-awesome/icons/thumbs-up';
import 'vue-awesome/icons/exclamation-triangle';
import 'vue-awesome/icons/laptop';
import 'vue-awesome/icons/users';
import 'vue-awesome/icons/cutlery';
import 'vue-awesome/icons/calendar-plus-o';

export default {
  props: {
    title: String,
    skills: Array,
  },
};
</script>

<style lang="less">
@import (reference) '../theme.less';
.skill-blocks__title {
  text-align: center;
  padding: 12px 18px;
  margin-bottom: 20px;
  margin-top: 30px;
  font-size: 2em;
}
.skill-block {
  position: relative;
  min-height: 80px;
  padding: 25px;
  padding-left: 80px;
}
.progress {

}
.progress__bar {
  width: 100%;
  height: 9px;
  margin-top: 4px;
  background-color: @grey_super_light;
  border-radius: 9px;
}
.progress__cover {
  height: 9px;
  background-color: @green_light;
  border-radius: 9px;
}
.progress__percentage {
  line-height: 30px;
  font-size: 1.2em;
  color: @dark;
}
.progress__info {
  padding: 6px;
}
.progress__badges {
  float: right;
  padding-top: 6px;
  svg { margin-left: 8px }
}

.skill-block__image {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 12px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;
  img { max-width: 48px; }
}

/* Tooltip styles */
.tooltip {
  z-index: 45;
  &[x-placement^="left"] {
    margin-right: 5px;
  }
  &[x-placement^="right"] {
    margin-left: 5px;
  }
  .tooltip-inner {
    background-color: @dark;
    font-family: @default_font_family;
    color: white;
    padding: 12px;
    border-radius: 6px;
  }
}

</style>
