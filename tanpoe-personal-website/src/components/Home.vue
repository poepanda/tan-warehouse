<template>
  <div class="Home">
    <HandedSelect></HandedSelect>
    <SingleRoundPic>
      <img src="../assets/profile-pic.jpg" :title="title">
    </SingleRoundPic>
    <WaveBigQuote></WaveBigQuote>
    <Timeline id="my-past" title="My past" :items="timeline"></Timeline>
    <SkillBlocks id="technical-skills" title="Technical Skills" :skills="techSkills"></SkillBlocks>
    <SkillBlocks id="languages" title="Languages" :skills="languages"></SkillBlocks>
    <Cards id="doing" title="What I'm doing now" :cards="doing"></Cards>
    <Cards id="gonna-do" title="What I'm gonna do" :cards="gonnaDo"></Cards>
  </div>
</template>

<script>
import WaveBigQuote from './WaveBigQuote';
import SingleRoundPic from './SingleRoundPic';
import Timeline from './Timeline';
import HandedSelect from './HandedSelect';
import SkillBlocks from './SkillBlocks';
import Cards from './Cards';

// Temporary solution for multiple language content
// Temporary solution for multiple language content
// TODO: Integrate to API
import enContent from '../data/content.en.json';
import viContent from '../data/content.vi.json';

export default {
  name: 'home',
  data() {
    const content = (this.$store.state.lang === 'vi') ? viContent : enContent;
    return {
      title: content.title,
      timeline: content.timeline,
      techSkills: content.techSkills,
      languages: content.languages,
      doing: content.doing,
      gonnaDo: content.gonnaDo,
    };
  },
  components: {
    HandedSelect,
    WaveBigQuote,
    SingleRoundPic,
    Timeline,
    SkillBlocks,
    Cards,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import (reference) '../theme.less';

</style>
