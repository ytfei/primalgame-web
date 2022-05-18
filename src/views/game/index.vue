<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import CommonHeader from './layout/CommonHeader.vue'
import { useNFT } from 'hooks/web3/useNFT'
import { useLoading } from 'src/hooks/useLoading'
import { onMounted, reactive, toRefs } from 'vue'
const { setLoading } = useLoading()
const { getNFTList } = useNFT()
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
  getNFTAssets()
})
const { heroList } = toRefs(state)
</script>

<template>
  <div :class="prefixCls.multiPrefixCls">
    <template v-if="heroList.length > 0">
      <CommonHeader></CommonHeader>
      <router-view></router-view>
    </template>
    <div v-else class="nodata">
      To join the game, you need to hold primal's <br /> NFT assets <br />
      You can purchase hero assets through the <br /> <span>blind box activity</span> <br/>
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
