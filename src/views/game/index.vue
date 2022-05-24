<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import CommonHeader from './layout/CommonHeader.vue'
import { useNFT } from 'hooks/web3/useNFT'
import { useLoading } from 'src/hooks/useLoading'
import { onMounted, reactive, computed } from 'vue'
import { useWallet } from 'hooks/web3/useWallet'
import { useUserStore } from 'src/store/modules/user'
const { setLoading } = useLoading()
const { getNFTList } = useNFT()
const { onConnect, account } = useWallet()
const User = useUserStore()
const prefixCls = useNamespace('game')
const state = reactive({
  heroList: [] as any
})
const getNFTAssets = (async () => {
  setLoading(true)
  const result = await getNFTList()
  state.heroList = result
  await setLoading(false)
})
onMounted(() => {
  console.log(account.value)
  account.value && getNFTAssets()
})
const heroList = computed(() => {
  return User.heroList
})
</script>

<template>
  <div :class="prefixCls.multiPrefixCls">
    <template v-if="account || heroList !== 'null'">
      <CommonHeader></CommonHeader>
      <router-view></router-view>
    </template>
    <div v-else class="nodata">
      <el-button v-if="!account" @click="onConnect">Connect</el-button>
      <div v-else>
        To join the game, you need to hold primal's <br /> NFT assets <br />
        You can purchase hero assets through the <br /> <span>blind box activity</span> <br/>
        You can also buy hero assets sold by <br/> players in the <span>trading market</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$moduleName: 'game';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';

.#{$prefix-cls} {
  .nodata {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    top: 300px;
    line-height: 24px;
    min-height: 60vh;
    span {
      color: #FEC434;
    }
  }
}
</style>
