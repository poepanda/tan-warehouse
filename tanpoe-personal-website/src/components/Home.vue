<template>
  <div class="Home">
    <HandedSelect></HandedSelect>
    <SingleRoundPic>
      <img src="../assets/profile-pic.jpg" :title="title">
    </SingleRoundPic>
    <WaveBigQuote></WaveBigQuote>
    <div class="container">
      <Timeline title="The past" :items="timeline"></Timeline>
    </div>
    <SkillBlocks title="Technical Skills" :skills="techSkills"></SkillBlocks>
    <SkillBlocks title="Languages" :skills="languages"></SkillBlocks>
  </div>
</template>

<script>
import WaveBigQuote from './WaveBigQuote';
import SingleRoundPic from './SingleRoundPic';
import Timeline from './Timeline';
import HandedSelect from './HandedSelect';
import SkillBlocks from './SkillBlocks';

// Temporary solution for multiple language content
// TODO: Integrate to API
import enContent from '../data/content.en.json';
import viContent from '../data/content.vi.json';

export default {
  name: 'home',
  data() {
    const content = (this.$store.state.lang === 'vi') ? viContent : enContent;
    return {
      timeline: content.timeline,
      techSkills: content.techSkills,
      languages: content.languages,
    };
  },
  components: {
    HandedSelect,
    WaveBigQuote,
    SingleRoundPic,
    Timeline,
    SkillBlocks,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import (reference) '../theme.less';

</style>
