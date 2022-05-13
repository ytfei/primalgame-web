<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import ResourcesCollection from 'comps/ResourcesCollection.vue'
const prefixCls = useNamespace('pve-wild-monster')
</script>

<template>
  <div :class="prefixCls.multiPrefixCls" class="layout-1200">
    <ResourcesCollection></ResourcesCollection>
  </div>
</template>

<style lang="scss" scoped>
$moduleName: 'pve-wild-monster';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';

.#{$prefix-cls} {
}
</style>
