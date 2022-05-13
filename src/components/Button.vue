<script lang="ts" setup>
import { useNamespace } from '../hooks/useCommon'
import { NButton } from 'naive-ui'

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
    <NButton
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
    </NButton>
  </div>
</template>

<style lang="scss" scoped>
$moduleName: 'buttons';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';
.#{$prefix-cls} {
  ::v-deep(.n-button) {
  }
  .button {
    width: 100%;
    background-image: url('src/assets/img/button/button.webp');
    color: #b9720c;
    background-size: 100% 100%;
  }
  .disabled {
    background-image: url('src/assets/img/button/disabled.webp');
    color: #ffffff;
  }
}
</style>
