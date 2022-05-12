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
        :text="'PVE single-player wild monster can select a hero to fight against system heroes and get corresponding resource rewards. When the enemy hero\'s patience is 0, it is possible to capture the NFT. Of course, if your own hero\'s patience is 0, you may also be captured by the enemy. A victory of more than 2 is considered a victory in battle, and there is also a chance of capture or capture'"
        position="left"
      />
      <IntroduceItem
        :img="''"
        :title="'PVE'"
        :text="'PVE single-player wild monster can select a hero to fight against system heroes and get corresponding resource rewards. When the enemy hero\'s patience is 0, it is possible to capture the NFT. Of course, if your own hero\'s patience is 0, you may also be captured by the enemy. A victory of more than 2 is considered a victory in battle, and there is also a chance of capture or capture'"
        position="right"
      />
      <IntroduceItem
        :img="''"
        :title="'PVE'"
        :text="'PVE single-player wild monster can select a hero to fight against system heroes and get corresponding resource rewards. When the enemy hero\'s patience is 0, it is possible to capture the NFT. Of course, if your own hero\'s patience is 0, you may also be captured by the enemy. A victory of more than 2 is considered a victory in battle, and there is also a chance of capture or capture'"
        position="left"
      />
      <IntroduceItem
        :img="''"
        :title="'PVE'"
        :text="'PVE single-player wild monster can select a hero to fight against system heroes and get corresponding resource rewards. When the enemy hero\'s patience is 0, it is possible to capture the NFT. Of course, if your own hero\'s patience is 0, you may also be captured by the enemy. A victory of more than 2 is considered a victory in battle, and there is also a chance of capture or capture'"
        position="right"
      />
    </div>
    <CommonTitle :title="'Timeline'"></CommonTitle>
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
  .timeline {
    margin-top: 53px;
  }
}
</style>
