<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
const prefixCls = useNamespace('resources-collection')
</script>

<template>
  <div :class="prefixCls.multiPrefixCls">
    <div class="title">Reward resources</div>
  </div>
</template>

<style lang="scss" scoped>
$moduleName: 'resources-collection';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';

.#{$prefix-cls} {
  height: 290px;
  background-image: url("src/assets/img/game/resources-back.webp");
  padding: 40px 57px 0 70px;
  box-sizing: border-box;
  .title {
    font-size: 18px;
    color: #8D5513;
  }
}
</style>
