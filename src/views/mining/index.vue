<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import CommonTitle from 'comps/CommonTitle.vue'
import HeroCard from '../user/assets/HeroCard.vue'
import MiningCard from './MiningCard.vue'
import ResourcesCollection from 'comps/ResourcesCollection.vue'

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
        <div class="card-min" v-for="(item, index) in 6" :key="index">
          <MiningCard></MiningCard>
        </div>
      </div>
      <CommonTitle>Mine NFT</CommonTitle>
      <div class="nft-mining">
        <HeroCard class="owner-mining" :mining="'start'"></HeroCard>
      </div>
    </div>
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