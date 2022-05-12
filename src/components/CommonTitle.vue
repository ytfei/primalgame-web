<script lang="ts" setup>
import { defineProps } from 'vue'
import { useNamespace } from 'src/hooks/useCommon'
const prefixCls = useNamespace('common-title')

defineProps<{
  title?: string
  subtitle?: string
}>()
</script>

<template>
  <div :class="prefixCls.prefixCls">
    <h2 v-if="title || $slots.default">
      <slot>{{ title }}</slot>
    </h2>
  </div>
</template>

<style lang="scss" scoped>
$prefix-cls: '#{$namespace}-common-title';
.#{$prefix-cls} {
  text-align: center;
  width: 301px;
  height: 61px;
  margin: 0 auto;
  background-image: url('src/assets/home/common_title.webp');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  h2 {
    margin: 0;
    display: inline;
    font-size: 15px;
    line-height: 61px;
    color: #fffdf5;
  }
}
</style>
