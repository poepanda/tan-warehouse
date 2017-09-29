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
      icon: ['calendar'],
      time: 'Now',
      title: 'Training myself to be a better engineer',
      description: 'My target right now is to master both Backend and Frontend',
    },
    {
      icon: ['language'],
      time: 'Middle of 2017',
      title: 'Start learning Korean',
      description: 'I have been interested in korean for a long time, now I started to have a look at it and learn it',
    },
    {
      icon: ['mobile'],
      time: 'Early of 2017',
      title: 'I started develop Mobile App using React Native',
      description: 'I got a great opportunity to have a real project with it',
    },
    {
      icon: ['plane', 'users', 'terminal', 'rocket'],
      time: 'End of 2015',
      title: 'My first on-site job in Malaysia as Fullstack Developer',
      description: 'I have been learning a lots during this time, not only Technical stuffs like React/Redux, Angular, Advance NodeJS but also Agile, business point of view, etc',
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
    {
      icon: ['university'],
      time: '2010',
      title: 'Went to University and aimed to be a Network Engineer in the future',
      description: 'What I gain: I knew about programming which I had not been really interested in before that, ',
    },
    {
      icon: ['plug'],
      time: '2005',
      title: 'My interests in information technologies and programming started',
      description: 'I developed my first program using Pascal and join a Competition, I gained A Certificates on MS Words, Excel with very good grades, I lead my class at school in term of Using Computer',
    },
    {
      icon: ['keyboard-o', 'windows'],
      time: '2002',
      title: 'My dad bought a computer (Win98)',
      description: 'I know how to use Windows basically ;) I Know how to play Warcraft 2, Counter Strike and some Microsoft softwares',
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
