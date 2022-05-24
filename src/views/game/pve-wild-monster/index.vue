<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import { getSrc } from 'src/utils/utils'
import { useWallet } from "src/hooks/web3/useWallet";
import { useBattle } from 'hooks/web3/useBattle'
import { useNFT } from 'hooks/web3/useNFT'
import { useLoading } from 'src/hooks/useLoading'
import CommonTitle from 'comps/CommonTitle.vue'
import ResourcesCollection from 'comps/ResourcesCollection.vue'
import BattlefieldReport from 'comps/BattlefieldReport.vue'
import HeroCard from '../HeroCard.vue'
import SelectHero from '../SelectHero.vue'
import { ElMessageBox } from 'element-plus'
import type { Action } from 'element-plus'
import { HeroInfo, ResourceInfo } from 'types/store'
import { onMounted, reactive, toRefs } from 'vue'
import { useERC20 } from 'hooks/web3/useErc20'
const battleAddress = import.meta.env.VITE_BATTLE_CONTRACT_ADDRESS as string
const { approve, allowance } = useERC20('currency')
const { account } = useWallet()
const state = reactive({
  heroList: [] as HeroInfo[],
  enemyList: [] as HeroInfo[],
  dialogVisible: false,
  enemyInfo: {} as HeroInfo,
  resourceInfo: {} as ResourceInfo,
  freeStatus: true as unknown,
})
const { setLoading } = useLoading()
const { getNFTList, getApprovedAll, approveForAll } = useNFT()
const { get1V1Enemies, refresh1V1, battle1V1, getRewardInfo, get1V1ForFree, takeReward } = useBattle()
const prefixCls = useNamespace('pve-wild-monster')
const get1V1EnemiesList = (async () => {
  await setLoading(true)
  const data: any = await get1V1Enemies()
  state.enemyList = data
  await setLoading(false)
})
const getNFTAssets = (async () => {
  setLoading(true)
  const result = await getNFTList()
  console.log(result)
  state.heroList = result
  await get1V1ForFreeStatus()
  await getPendingReward()
  await get1V1EnemiesList()
  await setLoading(false)
})
const refresh1v1 = (async () => {
  setLoading(true)
  if (!account.value) {
    return
  }
  const price = await allowance(battleAddress)
  if (parseInt(price) < 1) {
    await approve(battleAddress, 10000000000)
  }
  if (!state.freeStatus) {
    await ElMessageBox.alert('You will get a chance to refresh enemy every 24:00 UTC. And extra refresh operation will cost ***game currency that day.', 'Remind：', {
      confirmButtonText: 'Pay',
      callback: async (action: Action) => {
        console.log(action)
        if (action === 'confirm') {
          await refresh1V1().then(async () => {
            await getNFTAssets()
          })
        }
        await setLoading(false)
      }
    })
  } else {
    await refresh1V1().then(async () => {
      await getNFTAssets()
    })
  }
  await setLoading(false)
})
const getPendingReward = (async () => {
  const data: any = await getRewardInfo()
  state.resourceInfo = data
})
const get1V1ForFreeStatus = (async () => {
  const status: boolean | unknown = await get1V1ForFree()
  state.freeStatus = status
  console.log(status)
  if (!status) {
    await get1V1EnemiesList()
  }
})
const attack = ((enemyInfo: HeroInfo) => {
  console.log(enemyInfo)
  if (enemyInfo.status === '0') {
    state.dialogVisible = true
    console.log(state.dialogVisible)
    state.enemyInfo = enemyInfo
  }
})
const isBelowThreshold = (currentValue: any) => currentValue.value !== '0';
const onClick = (async (selectedHero: HeroInfo) => {
  await setLoading(true)
  const isApproved = await getApprovedAll(battleAddress)
  if (!isApproved) {
    await approveForAll(battleAddress).catch((error: string) => {
      throw new Error(error)
    })
  }
  const result: any = await battle1V1(selectedHero.tokenId, state.enemyInfo.tokenId)
  await setLoading(false)
  console.log(result)
  if (result.success) {
    let str = ''
    for (const item in result.battleResources) {
      str += item+':'+result.battleResources[item]+' '
    }
    await ElMessageBox.alert(`Congratulations on your victory in battle. Defeat the enemy this time and get ${str}`, 'Battle victory', {
      confirmButtonText: 'OK',
      callback: async (action: Action) => {
        console.log(action)
        await getNFTAssets()
        state.dialogVisible = false
      }
    })
  } else {
    let message = ''
    if (result.captureEnemieId === '0') {
      message = 'You are failed to defeat enemy, try to improve your combat effectiveness~ You can obtain high level NFT by synthesizing low level NFT on my hero page; or buy high level NFT directly in the market.'
    } else {
      message = 'You are failed to defeat your enemy and NFT was captured. qaq'
    }
    await ElMessageBox.alert(message, 'Battle failed', {
      confirmButtonText: 'OK',
      callback: async (action: Action) => {
        console.log(action)
        await getNFTAssets()
        state.dialogVisible = false
      }
    })
  }
  state.dialogVisible = false
  await get1V1EnemiesList()
})
const takeRewards = (async () => {
  const arr = Object.values(state.resourceInfo)
  if (arr.every(isBelowThreshold)) {
    setLoading(true)
    await takeReward().then(async (res: any) => {
      if (res) {
        await getNFTAssets()
      }
    })
  }
  setLoading(false)
})
onMounted(async () => {
  await getNFTAssets()
})
const { heroList, enemyList, dialogVisible, enemyInfo, resourceInfo } = toRefs(state)
</script>

<template>
  <div :class="prefixCls.multiPrefixCls" class="layout-1200">
    <ResourcesCollection :resourceInfo="resourceInfo" :take-reward="takeRewards"></ResourcesCollection>
    <div class="title">
      <CommonTitle>Current enemy</CommonTitle>
      <img @click="refresh1v1" class="refresh" :src="getSrc('game/refresh.webp')" alt="">
    </div>
    <div class="wild-monster-content">
      <div v-for="(item, index) in enemyList" :key="index" class="wild-monster-box">
        <HeroCard size="large" :hero="item"></HeroCard>
        <div class="wild-monster-tips">Water element may fall * 2000</div>
        <div class="attack">
          <Button :disabled="item.status === '1'" @click="attack(item)">Attack</Button>
        </div>
      </div>
    </div>
    <div class="title">
      <CommonTitle>War report</CommonTitle>
    </div>
    <div class="battlefield-report">
      <BattlefieldReport></BattlefieldReport>
    </div>
    <select-hero @confirm="onClick" v-model:dialog-visible="dialogVisible" :heroList="heroList" :enemyInfo="enemyInfo" title="Select the hero NFT that can be plundered by random ore pool"></select-hero>
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
