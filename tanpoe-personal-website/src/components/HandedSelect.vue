<template lang="html">
  <transition name="handed" v-if="display">
    <div class="handed-select">
      <h2>Which hand you're holding your phone</h2>
      <div class="handed-select__option" @click="selectHanded('left')" style="padding-right: 40%">
        <!------------ SVG LEFT HANDED -------->
        <svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 width="48px" height="48px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve">
        <g>
        	<path fill="#FFCC80" d="M31.081,18H16.04v24h15.041c3.247,0,5.878-2.686,5.878-5.997V24C36.959,20.685,34.328,18,31.081,18z"/>
        	<path fill="#FFCC80" d="M20.04,21c0,1.657-1.343,3-3,3h-12c-1.657,0-3-1.343-3-3l0,0c0-1.657,1.343-3,3-3h12
        		C18.697,18,20.04,19.343,20.04,21L20.04,21z"/>
        	<path fill="#FFCC80" d="M23.04,27c0,1.657-1.343,3-3,3h-6c-1.657,0-3-1.343-3-3l0,0c0-1.657,1.343-3,3-3h6
        		C21.697,24,23.04,25.343,23.04,27L23.04,27z"/>
        	<path fill="#FFCC80" d="M24.04,33c0,1.657-1.343,3-3,3h-6c-1.657,0-3-1.343-3-3l0,0c0-1.657,1.343-3,3-3h6
        		C22.697,30,24.04,31.343,24.04,33L24.04,33z"/>
        	<path fill="#FFCC80" d="M25.04,39c0,1.657-1.343,3-3,3h-6c-1.657,0-3-1.343-3-3l0,0c0-1.657,1.343-3,3-3h6
        		C23.697,36,25.04,37.343,25.04,39L25.04,39z"/>
        	<path fill="#FFCC80" d="M34.633,19.254l-8.193,4.266l-2.625-4.763C22.453,16.295,22,13.514,22,10.685V9.294C22,8,23.186,6,24.968,6
        		h0.675c0.582,0,1.092,0.402,1.231,0.981l0.724,2.954c0.334,1.354,0.99,2.601,1.916,3.631L34.633,19.254z"/>
        </g>
        <g>
        	<path fill="#F2A25A" d="M13.04,24h4c0.552,0,1,0.447,1,1s-0.448,1-1,1L13.04,24z"/>
        	<path fill="#F2A25A" d="M14.04,30h4c0.552,0,1,0.447,1,1s-0.448,1-1,1L14.04,30z"/>
        	<path fill="#F2A25A" d="M15.04,36h4c0.552,0,1,0.447,1,1s-0.448,1-1,1L15.04,36z"/>
        </g>
        <rect x="36" y="19" fill="#009688" width="10" height="22"/>
        <circle fill="#B2DFDB" cx="41" cy="36" r="2"/>
        </svg>
        <!------------ end of SVG LEFT HANDED -------->
        <label>Left handed</label>
      </div>

      <div class="handed-select__cross-line"></div>

      <div class="handed-select__option" @click="selectHanded('right')" style="padding-left: 40%  ">
        <!------------ SVG RIGHT HANDED -------->
        <svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 width="48px" height="48px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve">
        <g>
        	<path fill="#FFCC80" d="M16.959,18H32v24H16.959c-3.247,0-5.878-2.686-5.878-5.997V24C11.081,20.685,13.712,18,16.959,18z"/>
        	<path fill="#FFCC80" d="M28,21c0,1.657,1.343,3,3,3h12c1.657,0,3-1.343,3-3l0,0c0-1.657-1.343-3-3-3H31C29.343,18,28,19.343,28,21
        		L28,21z"/>
        	<path fill="#FFCC80" d="M25,27c0,1.657,1.343,3,3,3h6c1.657,0,3-1.343,3-3l0,0c0-1.657-1.343-3-3-3h-6C26.343,24,25,25.343,25,27
        		L25,27z"/>
        	<path fill="#FFCC80" d="M24,33c0,1.657,1.343,3,3,3h6c1.657,0,3-1.343,3-3l0,0c0-1.657-1.343-3-3-3h-6C25.343,30,24,31.343,24,33
        		L24,33z"/>
        	<path fill="#FFCC80" d="M23,39c0,1.657,1.343,3,3,3h6c1.657,0,3-1.343,3-3l0,0c0-1.657-1.343-3-3-3h-6C24.343,36,23,37.343,23,39
        		L23,39z"/>
        	<path fill="#FFCC80" d="M18.526,13.566c0.926-1.03,1.582-2.277,1.916-3.631l0.724-2.954C21.306,6.402,21.815,6,22.397,6h0.675
        		c1.782,0,2.968,2,2.968,3.294v1.391c0,2.829-0.453,5.61-1.814,8.072l-2.625,4.763l-8.193-4.266L18.526,13.566z"/>
        </g>
        <g>
        	<path fill="#F2A25A" d="M35,24h-4c-0.552,0-1,0.447-1,1s0.448,1,1,1L35,24z"/>
        	<path fill="#F2A25A" d="M34,30h-4c-0.552,0-1,0.447-1,1s0.448,1,1,1L34,30z"/>
        	<path fill="#F2A25A" d="M33,36h-4c-0.552,0-1,0.447-1,1s0.448,1,1,1L33,36z"/>
        </g>
        <rect x="2.04" y="19" fill="#009688" width="10" height="22"/>
        <circle fill="#B2DFDB" cx="7.04" cy="36" r="2"/>
        </svg>
        <!------------ end of SVG RIGHT HANDED -------->
        <label>Right handed</label>
      </diV>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex';
import MobileDetect from 'mobile-detect';

export default {
  computed: {
    ...mapState({
      handed: 'handed',
    }),
    display() {
      const md = new MobileDetect(navigator.userAgent);
      return !this.handed && md.mobile();
    },
  },
  methods: {
    selectHanded(selected) {
      this.$store.commit('selectHanded', selected);
    },
  },
};
</script>

<style lang="less">
@import (reference) '../theme';
@import (reference) '../base';

.handed-select {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: white;
  z-index: 121;
  transition: opacity 0.3s ease-out;
  padding: 5%;
  h2 {
    font-size: 1.5em;
    display: block;
    text-align: center;
    height: 14%;
  }
}
.handed-select__cross-line {
  width: 90%;
  border-top: 1px solid @dark_light;
  transform: rotate(-27deg);
  height: 3%;
  margin: auto;
  @media (min-width: @tablet) {
    height: 0%;
  }
}

.handed-select__option {
  display: block;
  height: 40%;
  text-align: center;
  padding: 6%;
  svg { width: 148px; height: 148px }
  label { display: block; }
  @media (min-width: @tablet) {
    svg { width: 256px; height: 256px; }
  }
  &:active {
    label { text-decoration: underline }
  }
}

.handed-enter { opacity: 0 }
.handed-leave-to { opacity: 0 }

</style>
