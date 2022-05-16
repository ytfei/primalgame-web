<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
const prefixCls = useNamespace('element-card')
</script>

<template>
  <div :class="prefixCls.multiPrefixCls">
    <div class="nft-img"></div>
    <div class="title">Element name* 20</div>
  </div>
</template>

<style lang="scss" scoped>
$moduleName: 'element-card';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';

.#{$prefix-cls} {
  width: 370px;
  height: 456px;
  background-image: url('src/assets/img/assets/nft-back.webp');
  background-size: 100% 100%;
  padding: 50px 38px;
  box-sizing: border-box;
  position: relative;
  &:hover:after {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    content: 'Exchange for other elements';
    padding: 0 115px;
    text-align: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    color: #ffffff;
    background-image: url('src/assets/img/assets/nft-transparent-background.webp');
    background-size: 100% 100%;
  }
  .nft-img {
    background-image: url('src/assets/img/assets/nft-img-back.webp');
    background-size: 100% 100%;
    width: 100%;
    height: 297px;
  }
  .title {
    font-size: 18px;
    color: #8d5513;
    margin-top: 24px;
  }
}
</style>
