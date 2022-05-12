<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import CommonHeader from './layout/CommonHeader.vue'
const prefixCls = useNamespace('game')
</script>

<template>
  <div :class="prefixCls.multiPrefixCls">
    <CommonHeader></CommonHeader>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
$moduleName: 'game';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';

.#{$prefix-cls} {
}
</style>
