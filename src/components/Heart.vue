<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
const prefixCls = useNamespace('heart')
const props = defineProps<{
  quantity: string
}>()
</script>

<template>
  <div :class="prefixCls.multiPrefixCls">
    <img
      class="solid"
      v-for="item in parseInt(props.quantity)"
      :key="item"
      src="src/assets/img/assets/heart-solid.webp"
      alt=""
    />
    <img
      class="hollow"
      v-for="item in 5 - parseInt(props.quantity)"
      :key="item"
      src="src/assets/img/assets/heart-hollow.webp"
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
  }
  .hollow {
  }
}
</style>
