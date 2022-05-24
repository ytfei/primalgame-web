<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import CommonTitle from 'comps/CommonTitle.vue'
import IntroduceItem from './IntroduceItem.vue'
import IntroduceHero from './IntroduceHero.vue'
import Timeline from './Timeline.vue'
import HomeSocial from './HomeSocial.vue'
const prefixCls = useNamespace('home')
</script>

<template>
  <div :class="prefixCls.multiPrefixCls">
    <!-- <div class="layout-1200"> -->
    <section class="banner"></section>
    <div class="SocialPlatform">
      <HomeSocial></HomeSocial>
    </div>
    <CommonTitle>Hero system</CommonTitle>
    <div class="hero_system">
      <IntroduceHero class="IntroduceHero"></IntroduceHero>
    </div>
    <CommonTitle>Restraint relationship</CommonTitle>
    <div class="restraint">
      <img src="../../assets/img/home/restraint.webp" alt="" class="restraint_img" />
    </div>
    <CommonTitle>Hero system</CommonTitle>
    <div class="introduce">
      <IntroduceItem
        :img="''"
        :title="'PVE'"
        :text="`Single wild monsterBy selecting heroes to fight system heroes, you can obtain corresponding resource rewards. When the enemy hero's patience = 0, you have a chance to capture and change NFT. Of course, if your hero's patience is 0, you may also be captured by the enemy Dungeons When fighting in a team, select 3 heroes to fight with 3 heroes of the enemy. If the winning field is greater than 2, it will be judged as a battle victory. It is also possible to capture or be captured`"
        position="left"
      />
      <IntroduceItem
        :img="''"
        :title="'Mining'"
        :text="`According to the professional skills carried by heroes, you can mine different resources. Heroes with different qualities will have different income bonuses. Of course, in mining, you should also pay attention to the attack from players with plundering skills. They will randomly select a player in mining to attack. After the attack is successful, they will plunder part of the player's undrawn income. If the opponent's hero's patience is 0, it is possible to plunder the hero's NFT. Of course, if it fails, it is also possible to be captured by the opponent`"
        position="right"
      />
      <IntroduceItem
        :img="''"
        :title="'Synthesis'"
        :text="`A new hero has more powerful attributes by melting and synthesizing multiple heroes. You can invest up to 4 Heroes at a time. The higher the level, the more difficult it is to synthesize`"
        position="left"
      />
      <IntroduceItem
        :img="''"
        :title="'Trimming'"
        :text="`The lost patience of the hero can be restored by trimming. You need to pay the corresponding elemental power and source power`"
        position="right"
      />
    </div>
    <div class="title-box">
      <CommonTitle>Timeline</CommonTitle>
    </div>
    <div class="timeline">
      <Timeline></Timeline>
    </div>
  </div>
  <!-- </div> -->
</template>

<style lang="scss" scoped>
$moduleName: 'home';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';
.#{$prefix-cls} {
  background-image: url('src/assets/img/home/home_back.webp');
  .banner {
    height: 600px;
    width: 100%;
    background: pink;
  }
  .SocialPlatform {
    margin-top: 69px;
    margin-bottom: 70px;
  }
  .introduce {
    margin-top: 31px;
  }
  .IntroduceHero {
    margin-top: 68px;
    margin-bottom: 110px;
  }
  .CommonTitle {
    width: 100%;
    height: 60px;
  }
  .restraint {
    margin: 49px auto 98px;
    display: flex;
    justify-content: center;
  }
  .restraint_img {
    width: 538px;
    height: 519px;
  }
  .title-box {
    margin-top: 60px;
  }
  .timeline {
    margin-top: 53px;
  }
}
</style>
