<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import { useNFT } from 'hooks/web3/useNFT'
import Button from 'comps/Button.vue'
import { reactive, toRefs } from 'vue'
import HeroCard from './HeroCard.vue'
import ElementCard from './ElementCard.vue'
const prefixCls = useNamespace('nft-assets')
const state = reactive({
  nftType: 'hero',
  nftStatus: 'Left'
})
const { getNFTList, getAttribute } = useNFT()

const { nftType, nftStatus } = toRefs(state)
</script>

<template>
  <div :class="prefixCls.multiPrefixCls"><button @click="getAttribute('7')">xxx</button>
    <div class="nft-type-content">
      <div class="nft-type">
        <Button
          class="button"
          @click="nftType = 'hero'"
          :gray="nftType !== 'hero'"
        >
          hero
        </Button>
        <Button
          class="button"
          @click="nftType = 'resource'"
          :gray="nftType !== 'resource'"
        >
          Element attribute
        </Button>
      </div>
      <div class="nft-status-content">
        <div class="nft-status">
          <div
            class="button"
            @click="nftStatus = 'Left'"
            :class="nftStatus === 'Left' ? 'active' : ''"
          >
            Left
          </div>
          <div
            class="button"
            @click="nftStatus = 'On Sale'"
            :class="nftStatus === 'On Sale' ? 'active' : ''"
          >
            On Sale
          </div>
        </div>
      </div>
    </div>
    <div class="nft-card-content" v-if="false">
      <HeroCard v-if="nftType === 'hero'"></HeroCard>
      <ElementCard v-else></ElementCard>
    </div>
    <div class="nft-no-data" v-else>
      No NFT assets,you can go to the <span>event</span> page to buy <br /> blind box,open NFT can also buy hero NFT through<br /><span>the trade market</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$moduleName: 'nft-assets';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';

.#{$prefix-cls} {
  .nft-type-content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    .nft-type {
      display: flex;
      .button {
        height: 38px;
        display: flex;
        align-items: center;
        margin-right: 10px;
        cursor: pointer;
      }
      .active {
        color: #b9720c;
        background: #fdb321;
      }
    }
    .nft-status-content {
      display: flex;
      justify-content: space-between;
      display: none;
      .nft-status {
        display: flex;
        .button {
          height: 38px;
          background: #e7e7e7;
          color: #b2b2b2;
          display: flex;
          align-items: center;
          margin-left: 10px;
          cursor: pointer;
        }
        .active {
          color: #b9720c;
          background: #fdb321;
        }
      }
    }
  }
  .nft-card-content {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    &::after {
      content: '';
      width: 370px;
      height: 456px;
    }
  }
  .nft-no-data {
    text-align: center;
    font-size: 18px;
    color: #FFFFFF;
    margin-top: 150px;
    span {
      color: #FEC434;
    }
  }
}
</style>
