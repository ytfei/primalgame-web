<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import { reactive, toRefs } from 'vue'
import NFTAssets from './NFTAssets.vue'
import BoxAssets from './BoxAssets.vue'
const prefixCls = useNamespace('assets')
const state = reactive({
  tabsValue: 'nft'
})
const { tabsValue } = toRefs(state)
</script>

<template>
  <div :class="prefixCls.multiPrefixCls">
    <div class="switch">
      <div
        class="nft-assets"
        @click="tabsValue = 'nft'"
        :class="tabsValue === 'nft' ? 'active' : ''"
      >
        NFT assets
      </div>
      <div
        class="box-assets"
        @click="tabsValue = 'box'"
        :class="tabsValue === 'box' ? 'active' : ''"
      >
        mystery box of assets
      </div>
    </div>
    <div class="assets-card">
      <NFTAssets v-if="tabsValue === 'nft'"></NFTAssets>
      <BoxAssets v-else></BoxAssets>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$moduleName: 'assets';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';

.#{$prefix-cls} {
  .switch {
    width: 390px;
    height: 64px;
    color: #b2b2b2;
    display: flex;
    align-items: center;
    text-align: center;
    margin: 0 auto 50px;
    background-image: url('src/assets/img/assets/switch-back.webp');
    .nft-assets {
      flex: 1;
      cursor: pointer;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: url('src/assets/img/assets/nft-switch.webp');
      background-size: 100% 100%;
      filter: grayscale(100%);
    }
    .box-assets {
      flex: 1;
      cursor: pointer;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: url('src/assets/img/assets/box-switch.webp');
      background-size: 100% 100%;
      filter: grayscale(100%);
    }
    .active {
      color: #ffffff;
      filter: grayscale(0%);
    }
  }
  .assets-card {
    margin-top: 30px;
    min-height: 50vh;
  }
}
</style>
