<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
const prefixCls = useNamespace('heart')
const props = defineProps<{
  quantity: Number
}>()
</script>

<template>
  <div :class="prefixCls.multiPrefixCls">
    <img
      class="solid"
      v-for="item in props.quantity"
      :key="item"
      src="#"
      alt=""
    />
    <img
      class="hollow"
      v-for="item in 5 - props.quantity"
      :key="item"
      src="#"
      alt=""
    />
  </div>
</template>

<style lang="scss" scoped>
$moduleName: 'heart';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';

.#{$prefix-cls} {
  img {
    width: 27px;
    height: 24px;
  }
  .solid {
    background: red;
  }
  .hollow {
    background: #d8d8d8;
  }
}
</style>
