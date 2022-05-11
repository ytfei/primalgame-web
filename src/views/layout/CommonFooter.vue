<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
const prefixCls = useNamespace('footer')
</script>

<template>
  <footer :class="prefixCls.multiPrefixCls">432</footer>
</template>

<style lang="scss" scoped>
$moduleName: 'footer';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';
.#{$prefix-cls} {
  height: 322px;
  background: #dcb172;
  display: flex;
  bottom: 0;
}
</style>
