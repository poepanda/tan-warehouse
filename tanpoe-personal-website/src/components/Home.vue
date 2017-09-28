<template>
  <div class="Home">
    <SingleRoundPic>
      <img src="../assets/profile-pic.jpg" :title="title">
    </SingleRoundPic>
    <WaveBigQuote></WaveBigQuote>
    <div class="container">
      <Timeline title="The past" :items="timeline"></Timeline>
    </div>
  </div>
</template>

<script>
import WaveBigQuote from './WaveBigQuote';
import SingleRoundPic from './SingleRoundPic';
import Timeline from './Timeline';

// Sample data
// TODO: Fetching it from API and REMOVE this
const sampleData = {
  timeline: [
    {
      icon: ['plane'],
      time: 'End of 2015',
      title: 'My first on-site job in Malaysia as Fullstack Developer',
      description: 'What I gain: ',
    },
    {
      icon: ['vcard', 'github'],
      time: 'Start of 2015',
      title: 'My first job as a Javascript Frontend Developer',
      description: 'What I gain: Work as a team, Javascript pattern/templates/rules, get to know Git ...',
    },
    {
      icon: ['graduation-cap'],
      time: '2015',
      title: 'I graduated from University',
      description: 'What I gain: Basic Web Development (HTML, CSS, PHP), programming foundation, Math (not that much), blah blah blah',
    },
  ],
};

export default {
  name: 'home',
  data() {
    return {
      title: 'Hi! My name is Tan',
      timeline: sampleData.timeline,
    };
  },
  components: {
    WaveBigQuote,
    SingleRoundPic,
    Timeline,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import (reference) '../theme.less';

</style>
