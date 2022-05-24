<script setup lang="ts">
import { useNamespace } from 'hooks/useCommon'
import SelectHero from '../SelectHero.vue'
import { reactive, toRefs, PropType, watch } from 'vue'
import { HeroInfo } from 'types/store'
import { useNFT } from 'hooks/web3/useNFT'
import { usePledge } from 'hooks/web3/usePledge'
import { ElMessageBox } from 'element-plus'

const pledgeAddress = import.meta.env.VITE_PLEDGE_CONTRACT_ADDRESS as string
const { getApprovedAll, approveForAll } = useNFT()
const { stake, getPoolAttr, plunder } = usePledge()
const prefixCls = useNamespace('mining-card')
const emits = defineEmits(['reload'])
const props = defineProps({
  info: {
    type: Object as PropType<{ type: string, value: number }>,
    required: true,
  },
  heroList: {
    type: Array as PropType<HeroInfo[]>,
    required: true
  }
})
const state = reactive({
  dialogVisible: false,
  isAttack: false,
  loading: false,
  poolInfo: { yield: '', amount: '' }
})
const onAttack = () => {
  state.isAttack = true
  state.dialogVisible = true
}
const stakePool = async (tokenId: string, poolType: number) => {
  await stake(tokenId, poolType).catch((error: string) => {
    state.loading = false
    throw new Error(error)
  })
}
const plunderPool = async (tokenId: string, poolType: number) => {
  const result = await plunder(tokenId, poolType).catch((error: string) => {
    state.loading = false
    throw new Error(error)
  })
  if (result.battleReport) {
    ElMessageBox.confirm('success!', 'Tips', {
      confirmButtonText: 'ok',
      cancelButtonText: 'cancel',
    })
  } else {
    ElMessageBox.confirm('failed', 'Tips', {
      confirmButtonText: 'ok',
      cancelButtonText: 'cancel',
    })
  }
}
const confirm = async (value: HeroInfo) => {
  state.loading = true
  const isApproved = await getApprovedAll(pledgeAddress)
  if (!isApproved) {
    await approveForAll(pledgeAddress).catch((error: string) => {
      state.loading = false
      throw new Error(error)
    })
  }
  if (!state.isAttack) {
    stakePool(value.tokenId, props.info.value)
  } else {
    plunderPool(value.tokenId, props.info.value)
  }
  getPoolInfo()
  emits('reload')
  state.loading = false
  state.dialogVisible = false
}

const getPoolInfo = async () => {
  getPoolAttr(props.info.value).then((res:{ yield: string, amount: string }) => {
    state.poolInfo = res
  })
}
getPoolInfo()
watch(() => state.dialogVisible, (val: boolean) => {
  if (!val) {
    state.isAttack = false
  }
})
const { dialogVisible, isAttack, poolInfo, loading } = toRefs(state)
</script>

<template>
  <div :class="prefixCls.multiPrefixCls">
    <div class="min-card">
      <div class="box-img"></div>
      <div class="box-title">
        <h2>{{ $props.info.type }}</h2>
      </div>
      <div class="box-production">
        <p>Based on production</p>
        <h3>{{ poolInfo.yield }}/h</h3>
      </div>
      <div class="box-number">
        <p>The number of mining</p>
        <h3>{{ poolInfo.amount }}</h3>
      </div>
      <div class="box-btn">
        <div class="attack-button" @click="onAttack">Attack</div>
        <div class="mining-button" @click="dialogVisible = true">Mining</div>
      </div>
    </div>
    <select-hero
      v-model:dialog-visible="dialogVisible"
      :hero-list="heroList"
      @confirm="confirm"
      :submit-loading="loading"
      title="Select the hero NFT that can dig XXX resources"
      :attr-type="isAttack ? 'plunder' : $props.info?.type"
    ></select-hero>
  </div>
</template>

<style lang="scss" scoped>
$moduleName: 'mining-card';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';
.#{$prefix-cls} {
  width: 370px;
  height: 456px;
  background-image: url('src/assets/img/assets/nft-back.webp');
  background-size: 100% 100%;
  padding: 26px 36px;
  box-sizing: border-box;
  position: relative;
  .box-img {
    width: 100%;
    height: 298px;
    background-image: url('src/assets/img/assets/nft-img-back.webp');
    background-size: 100% 100%;
  }

  .box-title {
    margin: 0;
    h2 {
      margin: 10px 0px;
      font-size: 16px;
      font-weight: normal;
      color: #8d5513;
      line-height: 18px;
    }
  }
  .box-production,
  .box-number {
    margin: 9px 0;
    display: flex;
    justify-content: start;

    h3 {
      margin: 0 10px;
      font-size: 12px;
      font-weight: normal;
      color: #8d5513;
      line-height: 14px;
    }
    p {
      margin: 0;
      font-size: 12px;
      font-weight: normal;
      color: #b17c3e;
      line-height: 14px;
    }
  }

  .box-btn {
    display: flex;
    justify-content: space-between;
    height: 35px;
  }
  .attack-button {
    width: 130px;
    height: 35px;
    background-image: url('src/assets/img/button/attack-button.webp');
    font-size: 16px;
    color: #ffffff;
    text-align: center;
    line-height: 35px;
    cursor: pointer;
  }
  .mining-button {
    width: 130px;
    height: 35px;
    background-image: url('src/assets/img/button/mining-button.webp');
    font-size: 16px;
    color: #ffffff;
    text-align: center;
    line-height: 35px;
    cursor: pointer;
  }
}
</style>
