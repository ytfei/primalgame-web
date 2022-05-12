<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import AccountInfo from './AccountInfo.vue'
import Assets from './assets/index.vue'
const prefixCls = useNamespace('user')
</script>

<template>
  <div :class="prefixCls.multiPrefixCls">
    <div class="layout-1200">
      <AccountInfo></AccountInfo>
      <Assets class="assets"></Assets>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$moduleName: 'user';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';

.#{$prefix-cls} {
  .layout-1200 {
    padding-top: 74px;
    .assets {
      margin-top: 30px;
    }
  }
}
</style>
