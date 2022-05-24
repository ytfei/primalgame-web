<script setup lang="ts">
import { useNamespace } from 'hooks/useCommon'
import CommonTitle from 'comps/CommonTitle.vue'
import MiningCard from './MiningCard.vue'
import ResourcesCollection from 'comps/ResourcesCollection.vue'
import { useNFT } from 'src/hooks/web3/useNFT'
import { reactive, toRefs } from 'vue'
import { HeroInfo } from 'types/store'
import HeroCard from 'src/views/user/assets/HeroCard.vue'
import { usePledge } from 'hooks/web3/usePledge'
import { ElMessageBox } from 'element-plus'
import { useLoading } from 'hooks/useLoading'
import { PoolEnum } from 'src/enums/assetsEnum'

interface MinePoolItem { type: string; value: number }
interface StakeNftItem extends HeroInfo { poolType: number }

const { setLoading } = useLoading()
const { getStakeNFTList, unStake, pendingReward, takeReward } = usePledge()
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
  stakeNFTList: [] as StakeNftItem[],
  reward: {} as any
})
const cancelStake = async (item: StakeNftItem) => {
  ElMessageBox.confirm('Confirm End ?', 'Tips', {
    confirmButtonText: 'ok',
    cancelButtonText: 'cancel',
    type: 'warning'
  }).then(async () => {
    setLoading(true)
    await unStake(item.tokenId, item.poolType)
    load()
    setLoading(false)
    ElMessageBox({ title: 'End confirmation', message: 'success' })
  })
}
const getHeroList = async () => {
  state.heroList = await getNFTList()
}
const getReward = async () => {
  state.reward = await pendingReward()
}
const getStakeNFT = async () => {
  const requestArray = minePool.map((item: MinePoolItem) => getStakeNFTList(item.value))
  const result = await Promise.allSettled(requestArray)
  state.stakeNFTList = result
    .filter((item: any) => item.status === 'fulfilled' && item.value.length > 0)
    .map((item: any) => item.value)
    .flat()
}
const onTackReward = async () => {
  await takeReward()
  getReward()
}
const load = () => {
  getHeroList()
  getReward()
  getStakeNFT()
}
load()
const { heroList, stakeNFTList, reward } = toRefs(state)
</script>

<template>
  <div :class="prefixCls.multiPrefixCls">
    <div class="layout-1200">
      <div class="resources">
        <ResourcesCollection :resource-info="reward" :take-reward="onTackReward"></ResourcesCollection>
      </div>
      <CommonTitle>Diggings</CommonTitle>
      <div class="mining-area">
        <MiningCard :info="item" @reload="load" :hero-list="heroList" class="mining-card" v-for="(item, index) in minePool" :key="index"></MiningCard>
      </div>
      <CommonTitle>Mine NFT</CommonTitle>
      <el-empty v-if="stakeNFTList.length < 1" description="no data" />
      <div v-else class="nft-mining">
        <div class="card-wrapper" v-for="item in stakeNFTList" :key="item.tokenId">
          <HeroCard  :data="item" class="owner-mining" :mining="'start'"></HeroCard>
          <div class="stop-img">
            <div class="stop-msg">
              <h2>{{ PoolEnum[item.poolType] }} element mining area</h2>
<!--              <p>Output: 20/h</p>-->
            </div>
            <div class="stop-btn">
              <div @click="cancelStake(item)" class="stop-button">End mining</div>
            </div>
          </div>
        </div>
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
    margin: 40px 0 70px;
    .mining-card {
      margin-bottom: 23px;
    }
  }
  .nft-mining {
    display: grid;
    grid-template-columns: repeat(3, 370px);
    grid-gap: 46px;
    margin-top: 40px;
    .card-wrapper {
      position: relative;
      .stop-img {
        width: 370px;
        height: 456px;
        background-image: url('src/assets/img/assets/nft-back-holder.webp');
        background-size: 100% 100%;
        position: absolute;
        left: 0;
        top: 0;
      }
      .stop-msg {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        text-align: center;
        position: absolute;
        top: 130px;
        left: 107px;
        width: 150px;
        h2 {
          font-size: 16px;
          font-weight: normal;
          color: #ffffff;
          line-height: 18px;
          margin: 0;
        }
        p {
          font-size: 12px;
          font-weight: normal;
          color: #ee9314;
          line-height: 14px;
        }
      }
      .stop-btn {
        width: 139px;
        height: 38px;
        background-image: url('src/assets/img/button/button-red.webp');
        background-size: 100% 100%;
        font-size: 12px;
        color: #ffffff;
        text-align: center;
        line-height: 32px;
        cursor: pointer;
        position: absolute;
        left: 113px;
        top: 224px;
      }
    }
  }
}
</style>
