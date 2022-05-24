<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import BoxCard from './BoxCard.vue'
const prefixCls = useNamespace('box-assets')
</script>

<template>
  <div :class="prefixCls.multiPrefixCls">
    <div class="box-card-content" v-if="false">
      <BoxCard></BoxCard>
      <BoxCard></BoxCard>
      <BoxCard></BoxCard>
      <BoxCard></BoxCard>
    </div>
    <div v-else class="box-nodata">
      No mystery box assets, can be purchased from <br/> the <span>campaign</span> page
    </div>
  </div>
</template>

<style lang="scss" scoped>
$moduleName: 'box-assets';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';

.#{$prefix-cls} {
  .box-card-content {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    &::after {
      content: '';
      width: 370px;
      height: 456px;
    }
  }
  .box-nodata {
    text-align: center;
    font-size: 18px;
    color: #FFFFFF;
    margin-top: 150px;
    span {
      color: #FEC434;
    }
  }
}
</style>
