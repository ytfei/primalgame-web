<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import BoxCard from './BoxCard.vue'
const prefixCls = useNamespace('box-assets')
</script>

<template>
  <div :class="prefixCls.multiPrefixCls">
    <BoxCard></BoxCard>
  </div>
</template>

<style lang="scss" scoped>
$moduleName: 'box-assets';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';

.#{$prefix-cls} {
}
</style>
