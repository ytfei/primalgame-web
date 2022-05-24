<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import CommonHeader from './layout/CommonHeader.vue'
import { computed, onMounted } from 'vue'
import { useUserStore } from 'src/store/modules/user'
const User = useUserStore()
const prefixCls = useNamespace('game')
onMounted(() => {
  // getNFTAssets()
})
const heroList = computed(() => {
  return User.heroList
})
</script>

<template>
  <div :class="prefixCls.multiPrefixCls">
    <template v-if="heroList !== 'null'">
      <CommonHeader></CommonHeader>
      <router-view></router-view>
    </template>
    <div v-else class="nodata">
      To join the game, you need to hold primal's <br /> NFT assets <br />
      You can purchase hero assets through the <br /> <span>mystery box activity</span> <br/>
      You can also buy hero assets sold by <br/> players in the <span>trading market</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$moduleName: 'game';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';

.#{$prefix-cls} {
  .nodata {
    text-align: center;
    color: #FFFFFF;
    position: relative;
    top: 300px;
    line-height: 24px;
    span {
      color: #FEC434;
    }
  }
}
</style>
