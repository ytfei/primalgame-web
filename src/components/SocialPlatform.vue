<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import { reactive, toRefs } from 'vue'

const prefixCls = useNamespace('social')
defineProps({
  size: {
    type: String,
    default: 'large' // large, small
  }
})
const state = reactive({
  list: [
    {
      name: 'twitter',
      url: 'https://twitter.com/OxMetaease',
      iconPath: 'src/assets/img/home/twitter.webp'
    },
    {
      name: 'telegram',
      url: 'https://t.me/meta_ease',
      iconPath: 'src/assets/img/home/telegram.webp'
    },
    {
      name: 'email',
      url: 'https://medium.com/@oxmetaease',
      iconPath: 'src/assets/img/home/email.webp'
    },
    {
      name: 'discord',
      url: 'https://discord.gg/2x8XpHHYwU',
      iconPath: 'src/assets/img/home/discord.webp'
    }
  ]
})
const jump = (url: string) => {
  window.open(url, '_blank')
}
const { list } = toRefs(state)
</script>

<template>
  <div :class="[prefixCls.multiPrefixCls, $props.size]">
    <div class="layout-1200">
      <div class="social-back">
        <h2>Social media</h2>
        <div class="socialPlatfrom">
          <img
            v-for="(item, index) in list"
            :key="index"
            :src="item.iconPath"
            @click="jump(item.url)"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$moduleName: 'social';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';

.#{$prefix-cls} {
  .social-back {
    width: 1088px;
    height: 239px;
    margin: 0px auto;
    background-image: url('../assets/home/social_media.webp');
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    h2 {
      font-size: 24px;
      font-weight: normal;
      color: #439043;
      line-height: 26px;
      position: absolute;
      left: 460px;
      right: 18px;
    }
  }
  .socialPlatfrom {
    display: flex;
    justify-content: space-between;
    width: 908px;
    height: 80px;
    position: absolute;
    left: 90px;
    right: 90px;
    bottom: 64px;
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
}
</style>
