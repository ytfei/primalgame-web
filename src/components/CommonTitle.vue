<script lang="ts" setup>
import { useNamespace } from 'src/hooks/useCommon'
const prefixCls = useNamespace('common-title')
</script>

<template>
  <div :class="prefixCls.prefixCls">
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<style lang="scss" scoped>
$moduleName: 'common-title';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';
.#{$prefix-cls} {
  text-align: center;
  span {
    height: 61px;
    margin: 0 auto;
    background-image: url('src/assets/home/common_title.webp');
    background-size: 100% 100%;
    padding: 18px 94px;
    color: #fffdf5;
  }
}
</style>
