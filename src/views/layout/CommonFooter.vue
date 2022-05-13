<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import SocialPlatform from 'comps/SocialPlatform.vue'
const prefixCls = useNamespace('footer')
</script>

<template>
  <footer :class="prefixCls.multiPrefixCls">
    <div class="layout-1200">
      <div class="footer-content">
        <div class="footer-flex">
          <div class="footer-title">About</div>
          <div class="footer-describe">Alpha test online game</div>
          <div class="footer-describe">Alpha test online game</div>
          <div class="footer-describe">Alpha test online game</div>
        </div>
        <div class="footer-flex">
          <div class="footer-title">About</div>
          <div class="footer-describe">Alpha test online game</div>
          <div class="footer-describe">Alpha test online game</div>
          <div class="footer-describe">Alpha test online game</div>
        </div>
        <div class="footer-flex">
          <div class="footer-title">Social Media</div>
          <SocialPlatform class="social-platform" size="small"></SocialPlatform>
        </div>
      </div>
      <div class="footer-copyright">
        @2021～2022 Metaease All Right Reserved METACONSENSUSPTE.LTD.<br />UEN:
        202131738K
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
$moduleName: 'footer';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';
.#{$prefix-cls} {
  height: 322px;
  background: #dcb172;
  display: flex;
  bottom: 0;
  font-family: FZLTCHJW--GB1-0, FZLTCHJW--GB1;
  .layout-1200 {
    padding-top: 80px;
    .footer-content {
      display: flex;
      .footer-flex {
        flex: 1;
        .social-platform {
          width: 220px;
        }
      }
      .footer-title {
        font-size: 16px;
        font-weight: bold;
        color: #8d5513;
        margin-bottom: 20px;
      }
      .footer-describe {
        font-size: 16px;
        color: #9b7242;
      }
    }
    .footer-copyright {
      font-size: 14px;
      font-weight: normal;
      color: #9b7242;
      text-align: center;
      margin-top: 60px;
    }
  }
}
</style>
