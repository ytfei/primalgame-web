<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import CommonHeader from './layout/CommonHeader.vue'
import { onMounted, computed } from 'vue'
import { useWallet } from 'hooks/web3/useWallet'
import { useUserStore } from 'src/store/modules/user'
const { onConnect, account } = useWallet()
const User = useUserStore()
const prefixCls = useNamespace('game')
onMounted(() => {
  console.log(account.value)
})
const heroList = computed(() => {
  return User.heroList
})
</script>

<template>
  <div :class="prefixCls.multiPrefixCls">
    <template v-if="account">
      <CommonHeader></CommonHeader>
      <router-view></router-view>
      <div class="no-hero" v-if="heroList.length === 0">
        <div>
          To join the game, you need to hold primal's <br /> NFT assets <br />
          You can purchase hero assets through the <br /> <span>blind box activity</span> <br/>
          You can also buy hero assets sold by <br/> players in the <span>trading market</span>
        </div>
      </div>
    </template>
    <div v-else class="nodata">
      <el-button v-if="!account" @click="onConnect">Connect</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$moduleName: 'game';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';

.#{$prefix-cls} {
  position: relative;
  .nodata {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    top: 300px;
    line-height: 24px;
    min-height: 60vh;
  }
  .no-hero {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url("src/assets/img/layout/background.webp");
    color: #FFFFFF;
    z-index: 100;
    span {
      color: #FEC434;
    }
  }
}
</style>
