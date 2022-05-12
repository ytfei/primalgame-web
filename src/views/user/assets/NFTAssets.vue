<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import { reactive, toRefs } from 'vue'
import HeroCard from './HeroCard.vue'
import ElementCard from './ElementCard.vue'
const prefixCls = useNamespace('nft-assets')
const state = reactive({
  nftType: 'hero',
  nftStatus: 'Left'
})
const { nftType, nftStatus } = toRefs(state)
</script>

<template>
  <div :class="prefixCls.multiPrefixCls">
    <div class="nft-type-content">
      <div class="nft-type">
        <div
          class="button"
          @click="nftType = 'hero'"
          :class="nftType === 'hero' ? 'active' : ''"
        >
          hero
        </div>
        <div
          class="button"
          @click="nftType = 'resource'"
          :class="nftType === 'resource' ? 'active' : ''"
        >
          Element attribute
        </div>
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
    <div class="nft-card-content">
      <HeroCard v-if="nftType === 'hero'"></HeroCard>
      <HeroCard v-if="nftType === 'hero'"></HeroCard>
      <HeroCard v-if="nftType === 'hero'"></HeroCard>
      <HeroCard v-if="nftType === 'hero'"></HeroCard>
      <HeroCard v-if="nftType === 'hero'"></HeroCard>
      <ElementCard v-else></ElementCard>
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
        background: #e7e7e7;
        color: #b2b2b2;
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
      .nft-status {
        display: flex;
        .button {
          height: 38px;
          background: #e7e7e7;
          color: #b2b2b2;
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
    }
  }
  .nft-card-content {
    padding-bottom: 140px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
