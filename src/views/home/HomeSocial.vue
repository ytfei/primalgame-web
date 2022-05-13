<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import SocialPlatform from 'src/components/SocialPlatform.vue'

const prefixCls = useNamespace('home-social')
</script>


<template>
  <div :class="prefixCls.multiPrefixCls">
    <div class="layout-1200">
      <div class="social-back">
        <h2>Social media</h2>
        <div class="socialPlatfrom">
          <SocialPlatform></SocialPlatform>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$moduleName: 'home-social';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';

.#{$prefix-cls} {
  .social-back {
    width: 1088px;
    height: 239px;
    margin: 0px auto;
    background-image: url('../../assets/home/social_media.webp');
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    h2 {
      font-size: 24px;
      font-weight: normal;
      color: #439043;
      line-height: 26px;
      position: absolute;
      left: 460px;
      right: 18px;
    }
    .socialPlatfrom {
      display: flex;
      justify-content: space-between;
      width: 908px;
      height: 80px;
      position: absolute;
      left: 90px;
      right: 90px;
      bottom: 64px;
    }
  }
}
</style>