<template lang="html">
  <div class="cards">
    <div class="container cards-container">
      <h2 class="title">{{ title }}</h2>
      <div class="cards-wrapper row">
        <div class="card-wrapper col-12" v-for="card in cards">
          <div class="card">
            <div class="card__img-wrapper"></div>
            <div class="card__inner">
              <h4 class="card__title">{{ card.title }}</h4>
              <div class="card__top-image" v-if="card.image">
                <img :src="card.image" :title="card.title" :alt="card.title">
              </div>
              <div class="card__content card__content--bullets" v-if="card.type === 'bullets'">
                <h5>{{ card.description }}</h5>
                <ul>
                  <li v-for="bullet in card.bullets">{{ bullet }}</li>
                </ul>
              </div>
              <div class="card__content card__content--poster" v-if="card.type === 'poster'">
                <h5>{{ card.description }}</h5>
                <img :src="card.posterImage" :alt="card.title" :title="card.title">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    cards: Array,
  },
};
</script>

<style lang="less" scoped>
@import (reference) '../theme.less';
@import (reference) '../base.less';

h2.title {
  margin-bottom: 12px;
}
.cards {
  background-color: @grey_bg;
  padding: 18px 0;
}
.cards-wrapper {
  padding: 12px 8px;
}
.card-wrapper {
  padding: 8px;
}
.card {
  padding: 18px;
  padding-top: 42px;
  margin: 18px 0;
  border: 1px solid @grey_super_light;
  border-radius: 8px;
  background-color: white;
  position: relative;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover { box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22); }
  h5 { font-size: 1.2em; font-weight: normal; padding-bottom: 4px }
}
.card__title {
  font-size: 1.5em;
  padding-bottom: 8px;
}
.card__top-image {
  position: absolute;
  top: -28px;
  right: -12px;
  width: 72px;
  height: 72px;
  padding: 12px;
  border-radius: 100%;
  background-color: white;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  img {
    max-width: 48px;
  }
  @media (min-width @tablet) {
    right: -24px;
  }
  @media (min-width: @desktop) {
    width: 88px;
    height: 88px;
    right: -30px;
    img {
      max-width: 64px;
    }
  }
}
.card__content--bullets {
  li {
    line-height: 1.8em;
    font-size: 1em;
    list-style: none;
  }

  @media (min-width: @desktop) {
    li { font-size: 1.2em }
  }
}
.card__content--poster {
  img {
    margin-top: 12px;
    border-radius: 4px;
    width: 100%;
    @media (min-width: @desktop) { max-width: 400px; }
  }
}
</style>
