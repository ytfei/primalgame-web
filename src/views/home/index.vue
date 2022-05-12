<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import CommonTitle from 'comps/CommonTitle.vue'
import IntroduceItem from './IntroduceItem.vue'
import IntroduceHero from './IntroduceHero.vue'
import SocialPlatform from 'comps/SocialPlatform.vue'
import Timeline from './Timeline.vue'
const prefixCls = useNamespace('home')
</script>

<template>
  <div :class="prefixCls.multiPrefixCls">
    <!-- <div class="layout-1200"> -->
    <section class="banner"></section>
    <SocialPlatform></SocialPlatform>
    <CommonTitle :title="'Hero system'"></CommonTitle>
    <div class="hero_system">
      <IntroduceHero class="IntroduceHero"></IntroduceHero>
    </div>
    <CommonTitle :title="'Restraint relationship'"></CommonTitle>
    <div class="restraint">
      <img src="src/assets/home/restraint.webp" alt="" class="restraint_img" />
    </div>
    <CommonTitle :title="'Hero system'"></CommonTitle>
    <div class="introduce">
      <IntroduceItem
        :img="''"
        :title="'PVE'"
        :text="'home.introduce.content4.text'"
        position="left"
      />
      <IntroduceItem
        :img="''"
        :title="'PVE'"
        :text="'home.introduce.content4.text'"
        position="right"
      />
      <IntroduceItem
        :img="''"
        :title="'PVE'"
        :text="'home.introduce.content4.text'"
        position="left"
      />
      <IntroduceItem
        :img="''"
        :title="'PVE'"
        :text="'home.introduce.content4.text'"
        position="right"
      />
    </div>
    <CommonTitle :title="'Timeline'"></CommonTitle>
    <Timeline></Timeline>
  </div>
  <!-- </div> -->
</template>

<style lang="scss" scoped>
$moduleName: 'home';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';
.#{$prefix-cls} {
  height: 5600px;
  background-image: url('src/assets/home/home_back.webp');
  .banner {
    height: 600px;
    width: 100%;
    background: pink;
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
}
</style>
