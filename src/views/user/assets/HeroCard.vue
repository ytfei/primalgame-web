<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import Heart from 'comps/Heart.vue'
const prefixCls = useNamespace('hero-card')
</script>

<template>
  <div :class="prefixCls.multiPrefixCls">
    <div class="img-content">
      <div class="nft-img"></div>
      <div class="heart">
        <Heart :quantity="4"></Heart>
      </div>
      <div class="element">
        <img src="src/assets/img/assets/fire.webp" alt="" />
      </div>
      <div class="attack"><span>5</span></div>
      <div class="life"><span>8</span></div>
    </div>
    <div class="text-content">
      <div class="names">
        <div class="name-label">Hero names</div>
        <span>common</span>
      </div>
      <div class="token">
        <div class="token-label">Token id</div>
        <span>0x22222222222</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$moduleName: 'hero-card';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';

.#{$prefix-cls} {
  width: 370px;
  height: 456px;
  background-image: url('src/assets/img/assets/nft-back.webp');
  background-size: 100% 100%;
  padding: 50px 38px;
  box-sizing: border-box;
  margin-bottom: 40px;
  .img-content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .nft-img {
      background-image: url('src/assets/img/assets/nft-img-back.webp');
      width: 270px;
      height: 270px;
    }
    .heart {
      position: absolute;
      top: 0;
      left: -24px;
    }
    .element {
      width: 45px;
      height: 45px;
      background-image: url('../../../assets/img/assets/attribute-background.webp');
      position: absolute;
      top: -8px;
      right: -6px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .attack {
      width: 50px;
      height: 48px;
      background-image: url('src/assets/img/assets/attack.webp');
      display: flex;
      background-size: 100% 100%;
      justify-content: center;
      position: absolute;
      left: -10px;
      bottom: -10px;
      color: #ffffff;
      font-size: 22px;
      span {
        margin-top: 8px;
      }
    }
    .life {
      width: 50px;
      height: 54px;
      background-image: url('src/assets/img/assets/life.webp');
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      color: #ffffff;
      font-size: 22px;
      right: -6px;
      bottom: -12px;
    }
  }
  .text-content {
    padding-top: 30px;
    .names {
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .name-label {
        color: #8d5513;
      }
      span {
        color: #fec331;
        margin-left: 14px;
      }
    }
    .token {
      font-size: 18px;
      display: flex;
      align-items: center;
      margin-top: 14px;
      justify-content: space-between;
      .token-label {
        color: #b17c3e;
      }
      span {
        color: #fec331;
        margin-left: 14px;
      }
    }
  }
}
</style>
