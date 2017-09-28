<template>
  <header>
    <div @click="toggleMenu" v-bind:class="[{open: menuOpen}, 'burder-menu-wrapper']" style="visibility: visible;">
			<svg width="1000px" height="1000px">
				<path class="path1" d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"></path>
				<path class="path2" d="M 300 500 L 700 500"></path>
				<path class="path3" d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"></path>
			</svg>
		</div>

    <transition name="nav">
      <nav v-show="menuOpen" class="burger-nav-wrapper">
        <a href="#">My past</a>
        <a href="#">Technical level</a>
        <a href="#">Language Status</a>
        <a href="#">What's I'm doing</a>
        <a href="#">What I'm gonna do</a>
        <hr></hr>
      </nav>
    </transition>

    <div class="logo-wrapper">
      <span class="t">T</span>
      <span class="p">P</span>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
      navDisplay: false,
    };
  },
  methods: {
    toggleMenu() {
      return (this.menuOpen) ? this.closeMenu() : this.openMenu();
    },
    openMenu() {
      this.menuOpen = true;
      this.navDisplay = true;
    },
    closeMenu() {
      this.navDisplay = false;
      this.menuOpen = false;
    },
  },
};
</script>

<style scoped lang="less">
@import (reference) '../theme.less';

header {
  height: 110px;
  line-height: 110px;
  padding-right: 55px;

  .logo-wrapper { text-align: right; direction: rtl }
  span { font-weight: bold; font-size: 2.6em; display: inline; letter-spacing: -12px }
  .t { color: @orange_light }
  .p { color: @green_light }
}

/*
Burger menu SVG animation
Source: https://codepen.io/poepanda/pen/LzRwVd
*/
button {
  &:focus, &:active {
    outline: none;
  }
}
.burder-menu-wrapper {
  position: absolute;
  z-index: 54;
  top: 30px;
  left: 30px;
  width: 40px;
  height: 40px;
  transition: 0.1s;
  cursor: pointer;
  svg {
    position: absolute;
    top: -40px;
    left: -40px;
    transform: scale(0.12);
    transform-origin: 0 0;
    path {
      stroke: #333333;
      stroke-width: 30px;
      stroke-linecap: round;
      stroke-linejoin: round;
      fill: transparent;
      transition: stroke-dasharray 0.5s;
      &.path1 {
        stroke-dashoffset: 5803.15px;
        stroke-dasharray: 2901.57px, 2981.57px, 240px;
      }
      &.path2 {
        stroke-dashoffset: 800px;
        stroke-dasharray: 400px, 480px, 240px;
      }
      &.path3 {
        stroke-dashoffset: 6993.11px;
        stroke-dasharray: 3496.56px, 3576.56px, 240px;
      }
    }
  }
  &.open {
    svg {
      path {
        &.path1 {
          stroke-dasharray: 2901.57px, 5258.15px, 240px;
        }
        &.path2 {
          stroke-dasharray: 400px, 600px, 0px;
        }
        &.path3 {
          stroke-dasharray: 3496.56px, 6448.11px, 240px;
        }
      }
    }
  }
  .menu-icon-trigger {
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;
    pointer-events: auto;
    background: none;
    border: none;
    margin: 0;
    padding: 0;
  }
}

.burger-nav-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: white;
  z-index: 50;
  padding-top: 120px;
  transition: opacity 0.3s ease-out;
  padding-left: 36px;
  a {
    color: @dark;
    text-decoration: none;
    font-size: 2.2em;
    line-height: 2.2em;
    transition: transform 0.25s ease-out;
    display: block;
    &:hover {
      transform: translateX(20px);
    }
  }
  hr {
    border-top: 1px dashed @dark_light;
    width: 160px;
    margin-top: 20px;
  }
}
.nav-enter,
.nav-leave {
  opacity: 0
}
</style>
