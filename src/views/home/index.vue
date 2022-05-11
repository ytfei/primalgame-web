<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import CommonTitle from './CommonTitle.vue'
import IntroduceItem from './IntroduceItem.vue'

const prefixCls = useNamespace('home')
</script>

<template>
  <div :class="prefixCls.multiPrefixCls">
    <div class="layout-1200">
      <section class="banner"></section>
      <CommonTitle :title="'Hero system'"></CommonTitle>
      <CommonTitle :title="'Hero system'"></CommonTitle>
      <div class="introduce">
        <IntroduceItem
          :img="''"
          :title="'PVE'"
          :text="'home.introduce.content4.text'"
          position="left"
        />
        <IntroduceItem />
        <IntroduceItem />
        <IntroduceItem />
      </div>
      <CommonTitle :title="'Timeline'"></CommonTitle>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$moduleName: 'home';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';
.#{$prefix-cls} {
  background-image: url('src/assets/home/home_back.webp');
  .banner {
    height: 375px;
    width: 100%;
    background: pink;
  }
  .social_media {
    width: 680px;
    margin: 0 auto;
  }
  .introduce {
    height: 986px;
  }
  .CommonTitle {
    width: 100%;
    height: 60px;
  }
}
</style>
