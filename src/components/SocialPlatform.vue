<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import { reactive, toRefs } from 'vue'

const prefixCls = useNamespace('social')
defineProps({
  size: {
    type: String,
    default: 'large'  // large, small
  }
})
const state = reactive({
  list: [
    { name: 'twitter', url: 'https://twitter.com/OxMetaease', iconPath: 'src/assets/img/home/twitter.webp' },
    { name: 'telegram', url: 'https://t.me/meta_ease', iconPath: 'src/assets/img/home/telegram.webp' },
    { name: 'email', url: 'https://medium.com/@oxmetaease', iconPath: 'src/assets/img/home/email.webp' },
    { name: 'discord', url: 'https://discord.gg/2x8XpHHYwU', iconPath: 'src/assets/img/home/discord.webp' },
  ]
})
const jump = (url: string) => {
  window.open(url, '_blank')
}
const { list } = toRefs(state)
</script>

<template>
  <div :class="[prefixCls.multiPrefixCls, $props.size]">
    <img
      v-for="(item, index) in list"
      :key="index"
      :src="item.iconPath"
      @click="jump(item.url)"
      alt="">
  </div>
</template>

<style lang="scss" scoped>
$moduleName: 'social';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';

.#{$prefix-cls} {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 20px;
  img {
    cursor: pointer;
  }
  &.large {
    img {
      width: 80px;
    }
  }
  &.small {
    img {
      width: 40px;
    }
  }
}
</style>
