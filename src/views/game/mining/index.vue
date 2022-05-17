<script setup lang="ts">
import { useNamespace } from 'hooks/useCommon'
import CommonTitle from 'comps/CommonTitle.vue'
import HeroCard from '../../user/assets/HeroCard.vue'
import MiningCard from './MiningCard.vue'
import ResourcesCollection from 'comps/ResourcesCollection.vue'
import SelectHero from '../SelectHero.vue'
import { getNFTList } from 'src/hooks/web3/useNFT'

const minePool = [
  { type: 'wind', value: 0 },
  { type: 'life', value: 1 },
  { type: 'water', value: 2 },
  { type: 'fire', value: 3 },
  { type: 'Earth', value: 4 },
  { type: 'Source', value: 5 },
]
const prefixCls = useNamespace('mining-home')
</script>

<template>
  <div :class="prefixCls.multiPrefixCls">
    <div class="layout-1200">
      <div class="resources">
        <ResourcesCollection></ResourcesCollection>
      </div>
      <CommonTitle>Diggings</CommonTitle>
      <div class="mining-area">
        <div class="card-min" v-for="(item, index) in minePool" :key="index">
          <MiningCard></MiningCard>
        </div>
      </div>
      <CommonTitle>Mine NFT</CommonTitle>
      <div class="nft-mining">
        <HeroCard class="owner-mining" :mining="'start'"></HeroCard>
      </div>
    </div>
    <select-hero title="Select the hero NFT that can dig XXX resources"></select-hero>
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
    margin: 40px 0px 70px;
    .card-min {
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
