<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import SocialPlatform from 'comps/SocialPlatform.vue'
const prefixCls = useNamespace('home')
</script>

<template>
  <div :class="prefixCls.multiPrefixCls"><SocialPlatform></SocialPlatform></div>
</template>

<style lang="scss" scoped>
$moduleName: 'home';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';
.#{$prefix-cls} {
}
</style>
