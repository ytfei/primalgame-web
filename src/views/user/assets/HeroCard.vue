<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import Heart from 'comps/Heart.vue'
const prefixCls = useNamespace('hero-card')
</script>

<template>
  <div :class="prefixCls.multiPrefixCls">
    <div class="img-content">
      <img class="nft-img" src="#" alt="" />
      <div class="heart">
        <Heart :quantity="4"></Heart>
      </div>
      <div class="element">
        <img src="#" alt="" />
      </div>
      <div class="attack">5</div>
      <div class="life">8</div>
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
  background: #f2dea2;
  padding: 50px 38px;
  box-sizing: border-box;
  margin-bottom: 40px;
  .img-content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .nft-img {
      background: #fdb321;
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
      background: greenyellow;
      position: absolute;
      top: -8px;
      right: -6px;
    }
    .attack {
      width: 50px;
      height: 48px;
      background: deepskyblue;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      left: -10px;
      bottom: -10px;
    }
    .life {
      width: 50px;
      height: 54px;
      background: yellow;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
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
