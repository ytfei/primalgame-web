<script setup lang="ts">
import { useNamespace } from 'hooks/useCommon'
import CommonTitle from 'comps/CommonTitle.vue'
import MiningCard from './MiningCard.vue'
import ResourcesCollection from 'comps/ResourcesCollection.vue'
import SelectHero from '../SelectHero.vue'
import { useNFT } from 'src/hooks/web3/useNFT'
import { reactive, toRefs } from 'vue'
import { HeroInfo } from 'types/store'

const { getNFTList } = useNFT()
const minePool = [
  { type: 'wind', value: 0 },
  { type: 'life', value: 1 },
  { type: 'water', value: 2 },
  { type: 'fire', value: 3 },
  { type: 'Earth', value: 4 },
  { type: 'Source', value: 5 },
]
const prefixCls = useNamespace('mining-home')
const state = reactive({
  heroList: [] as HeroInfo[],
  dialogVisible: false,
})
const getHeroList = async () => {
  state.heroList = await getNFTList()
  console.log(state.heroList)
}
getHeroList()
const confirm = (value) => {
  console.log(value)
}
const { heroList, dialogVisible } = toRefs(state)
</script>

<template>
  <div :class="prefixCls.multiPrefixCls">
    <div class="layout-1200"><button @click="dialogVisible = !dialogVisible">xxx</button>
      <div class="resources">
        <ResourcesCollection></ResourcesCollection>
      </div>
      <CommonTitle>Diggings</CommonTitle>
      <div class="mining-area">
        <MiningCard class="mining-card" v-for="(item, index) in minePool" :key="index"></MiningCard>
      </div>
      <CommonTitle>Mine NFT</CommonTitle>
      <div class="nft-mining">
<!--        <HeroCard class="owner-mining" :mining="'start'"></HeroCard>-->
      </div>
    </div>
    <select-hero :dialog-visible="dialogVisible" :hero-list="heroList" @confirm="confirm" title="Select the hero NFT that can dig XXX resources"></select-hero>
  </div>
</template>

<style lang="scss" scoped>
$moduleName: 'mining-home';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';
.#{$prefix-cls} {
  .resources {
    margin: 5px auto 49px;
  }
  .mining-area {
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    align-items: center;
    margin: 40px 0 70px;
    .mining-card {
      margin-bottom: 23px;
    }
  }
  .nft-mining {
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    align-items: center;
    margin: 40px 0px 70px;
  }
}
</style>
