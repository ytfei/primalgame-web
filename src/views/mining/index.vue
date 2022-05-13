<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import CommonTitle from 'comps/CommonTitle.vue'

const prefixCls = useNamespace('mining-home')
</script>

<template>
  <div :class="prefixCls.multiPrefixCls">
    <CommonTitle :title="'Diggings'"></CommonTitle>
    <CommonTitle :title="'Mine NFT'"></CommonTitle>
  </div>
</template>

<style lang="scss" scoped>
$moduleName: 'mining-home';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';
.#{$prefix-cls} {
}
</style>