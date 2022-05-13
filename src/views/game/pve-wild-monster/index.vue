<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import CommonTitle from 'comps/CommonTitle.vue'
import ResourcesCollection from 'comps/ResourcesCollection.vue'
import BattlefieldReport from 'comps/BattlefieldReport.vue'
const prefixCls = useNamespace('pve-wild-monster')
</script>

<template>
  <div :class="prefixCls.multiPrefixCls" class="layout-1200">
    <ResourcesCollection></ResourcesCollection>
    <div class="title">
      <CommonTitle>Current enemy</CommonTitle>
    </div>
    <div class="wild-monster-content"></div>
    <div class="title">
      <CommonTitle>War report</CommonTitle>
    </div>
    <div class="battlefield-report">
      <BattlefieldReport></BattlefieldReport>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$moduleName: 'pve-wild-monster';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';

.#{$prefix-cls} {
  .title {
    margin: 50px 0 60px 0;
  }
  .battlefield-report {
    padding-bottom: 104px;
  }
}
</style>
