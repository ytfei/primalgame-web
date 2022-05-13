<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
const prefixCls = useNamespace('box-card')
</script>

<template>
  <div :class="prefixCls.multiPrefixCls">
    <div class="box-img"></div>
    <div class="box-button">Open</div>
  </div>
</template>

<style lang="scss" scoped>
$moduleName: 'box-card';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';

.#{$prefix-cls} {
  width: 370px;
  height: 456px;
  background-image: url('src/assets/img/assets/nft-back.webp');
  background-size: 100% 100%;
  padding: 50px 36px;
  box-sizing: border-box;
  .box-img {
    width: 100%;
    height: 298px;
    background-image: url('src/assets/img/assets/nft-img-back.webp');
    background-size: 100% 100%;
  }
  .box-button {
    width: 168px;
    height: 44px;
    background-image: url('src/assets/img/assets/open-box.webp');
    font-size: 16px;
    color: #ffffff;
    margin: 23px auto 0;
    text-align: center;
    line-height: 44px;
    cursor: pointer;
  }
}
</style>
