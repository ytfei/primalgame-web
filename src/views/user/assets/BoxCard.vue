<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
const prefixCls = useNamespace('box-card')
</script>

<template>
  <div :class="prefixCls.multiPrefixCls"></div>
</template>

<style lang="scss" scoped>
$moduleName: 'box-card';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';

.#{$prefix-cls} {
}
</style>
