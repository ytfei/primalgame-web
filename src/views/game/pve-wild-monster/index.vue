<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import { getSrc } from 'src/utils/utils'
import { useBattle } from 'hooks/web3/useBattle'
import CommonTitle from 'comps/CommonTitle.vue'
import ResourcesCollection from 'comps/ResourcesCollection.vue'
import BattlefieldReport from 'comps/BattlefieldReport.vue'
import HeroCard from '../HeroCard.vue'
const { get1V1Enemies } = useBattle()
const prefixCls = useNamespace('pve-wild-monster')
const get1V1EnemiesList = (() => {
  get1V1Enemies()
})
// get1V1EnemiesList()
</script>

<template>
  <div :class="prefixCls.multiPrefixCls" class="layout-1200">
    <ResourcesCollection></ResourcesCollection>
    <div class="title">
      <CommonTitle>Current enemy</CommonTitle>
      <img class="refresh" :src="getSrc('game/refresh.webp')" alt="">
    </div>
    <div class="wild-monster-content">
      <div v-for="item in 3" class="wild-monster-box">
        <HeroCard size="large"></HeroCard>
        <div class="wild-monster-tips">Water element may fall * 2000</div>
        <div class="attack">
          <Button>Attack</Button>
        </div>
      </div>
    </div>
    <div class="title">
      <CommonTitle>War report</CommonTitle>
    </div>
    <div class="battlefield-report">
      <BattlefieldReport></BattlefieldReport>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$moduleName: 'pve-wild-monster';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';

.#{$prefix-cls} {
  .title {
    position: relative;
    margin: 50px 0 60px 0;
    .refresh {
      position: absolute;
      right: 0;
      top: 0;
      cursor: pointer;
    }
  }
  .wild-monster-content {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    .wild-monster-box {
      width: 370px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .wild-monster-tips {
        font-size: 14px;
        color: #8D5513;
        text-align: center;
        margin-top: 15px;
      }
      .attack {
        width: 140px;
        height: 38px;
        margin-top: 16px;
      }
    }
  }
  .battlefield-report {
    padding-bottom: 104px;
  }
}
</style>
