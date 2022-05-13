<script lang="ts" setup>
import { useNamespace } from '../hooks/useCommon'

const prefixCls = useNamespace('buttons')

defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  gray: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div :class="prefixCls.prefixCls">
    <el-button
      :disabled="$props.disabled"
      :class="$props.disabled || $props.gray ? 'disabled' : ''"
      style="
        --n-border: none;
        --n-border-pressed: none;
        --n-ripple-color: none;
        --n-border-disabled: none;
      "
      class="button"
    >
      <slot></slot>
    </el-button>
  </div>
</template>

<style lang="scss" scoped>
$moduleName: 'buttons';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';
.#{$prefix-cls} {
  height: 100%;
  .button {
    width: 100%;
    background-image: url('src/assets/img/button/button.webp');
    color: #b9720c;
    height: 100%;
    background-size: 100% 100%;
    border: none;
    background-color: rgba(0,0,0,0);
    font-family: FZHPJW--GB1-0, FZHPJW--GB1;
  }
  .disabled {
    background-image: url('src/assets/img/button/disabled.webp');
    color: #ffffff;
  }
}
</style>
