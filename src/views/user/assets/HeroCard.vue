<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import Heart from 'comps/Heart.vue'
import { getSrc } from 'src/utils/utils'
import { toRefs } from 'vue'
const prefixCls = useNamespace('hero-card')

const props = defineProps({
  mining: {
    type: String,
    default: 'stop' // stop, start
  },
  data: {
    type: Object as any,
    required: true
  },
})
console.log(props.data)
const { data } = toRefs(props)
</script>

<template>
  <div :class="prefixCls.multiPrefixCls">
    <div class="img-content">
      <div class="nft-img"></div>
      <div class="heart">
        <Heart :quantity="data.stamina"></Heart>
      </div>
      <div class="element">
        <img :src="getSrc(`assets/element/${data.element}.webp`)" alt="" />
      </div>
      <div class="attack"><span>{{data.attrs.attack}}</span></div>
      <div class="life"><span>{{data.attrs.hp}}</span></div>
    </div>
    <div class="text-content">
      <div class="names">
        <div class="name-label">Hero names</div>
        <span>{{ data.rarity }}</span>
      </div>
      <div class="token">
        <div class="token-label">Token id</div>
        <span>{{ data.tokenId }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$moduleName: 'hero-card';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';

.#{$prefix-cls} {
  width: 370px;
  height: 456px;
  background-image: url('src/assets/img/assets/nft-back.webp');
  background-size: 100% 100%;
  padding: 50px 38px;
  box-sizing: border-box;
  margin-bottom: 40px;
  position: relative;
  cursor: pointer;
  &:hover:after {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    content: 'View NFT details';
    width: 100%;
    height: 100%;
    padding: 0 115px;
    box-sizing: border-box;
    text-align: center;
    color: #ffffff;
    background-image: url('src/assets/img/assets/nft-transparent-background.webp');
    background-size: 100% 100%;
  }
  .img-content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .nft-img {
      background-image: url('src/assets/img/assets/nft-img-back.webp');
      width: 270px;
      height: 270px;
    }
    .heart {
      position: absolute;
      top: 0;
      left: -24px;
    }
    .element {
      width: 45px;
      height: 45px;
      background-image: url('../../../assets/img/assets/attribute-background.webp');
      position: absolute;
      top: -8px;
      right: -6px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .attack {
      width: 50px;
      height: 48px;
      background-image: url('src/assets/img/assets/attack.webp');
      background-size: 100% 100%;
      text-align: center;
      line-height: 48px;
      position: absolute;
      left: -10px;
      bottom: -10px;
      color: #ffffff;
      font-size: 22px;
      span {
        margin-top: 8px;
      }
    }
    .life {
      width: 50px;
      height: 54px;
      background-image: url('src/assets/img/assets/life.webp');
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      color: #ffffff;
      font-size: 22px;
      right: -6px;
      bottom: -12px;
    }
  }
  .text-content {
    padding-top: 30px;
    .names {
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .name-label {
        color: #8d5513;
      }
      span {
        color: #fec331;
        margin-left: 14px;
      }
    }
    .token {
      font-size: 18px;
      display: flex;
      align-items: center;
      margin-top: 14px;
      justify-content: space-between;
      .token-label {
        color: #b17c3e;
      }
      span {
        color: #fec331;
        margin-left: 14px;
      }
    }
  }
}
</style>
