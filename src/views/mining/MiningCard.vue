<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'

const prefixCls = useNamespace('mining-card')
</script>

<template>
  <div :class="prefixCls.multiPrefixCls">
    <div class="min-card">
      <div class="box-img"></div>
      <div class="box-title">
        <h2>Earth element mine</h2>
      </div>
      <div class="box-production">
        <p>Based on production</p>
        <h3>10/h</h3>
      </div>
      <div class="box-number">
        <p>The number of mining</p>
        <h3>12，234，567</h3>
      </div>
      <div class="box-btn">
        <div class="attack-button">Attack</div>
        <div class="mining-button">Mining</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$moduleName: 'mining-card';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';
.#{$prefix-cls} {
  width: 370px;
  height: 456px;
  background-image: url('src/assets/img/assets/nft-back.webp');
  background-size: 100% 100%;
  padding: 26px 36px;
  box-sizing: border-box;
  position: relative;
  .box-img {
    width: 100%;
    height: 298px;
    background-image: url('src/assets/img/assets/nft-img-back.webp');
    background-size: 100% 100%;
  }

  .box-title {
    margin: 0;
    h2 {
      margin: 10px 0px;
      font-size: 16px;
      font-weight: normal;
      color: #8d5513;
      line-height: 18px;
    }
  }
  .box-production,
  .box-number {
    margin: 9px 0px;
    display: flex;
    justify-content: start;

    h3 {
      margin: 0px 10px;
      font-size: 12px;
      font-weight: normal;
      color: #8d5513;
      line-height: 14px;
    }
    p {
      margin: 0;
      font-size: 12px;
      font-weight: normal;
      color: #b17c3e;
      line-height: 14px;
    }
  }

  .box-btn {
    display: flex;
    justify-content: space-between;
    height: 35px;
  }
  .attack-button {
    width: 130px;
    height: 35px;
    background-image: url('src/assets/img/button/attack-button.webp');
    font-size: 16px;
    color: #ffffff;
    text-align: center;
    line-height: 35px;
    cursor: pointer;
  }
  .mining-button {
    width: 130px;
    height: 35px;
    background-image: url('src/assets/img/button/mining-button.webp');
    font-size: 16px;
    color: #ffffff;
    text-align: center;
    line-height: 35px;
    cursor: pointer;
  }
}
</style>
