<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import { getSrc } from 'src/utils/utils'
import { PropType } from 'vue'
import { HeroInfo } from 'types/store'
const prefixCls = useNamespace('hero-card')
defineProps({
  size: {
    type: String,
    default: 'small'  // small, large
  },
  hero: {
    type: Object as PropType<HeroInfo>,
    default: () => ({})
  },
  lowStaminaTips: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div :class="[prefixCls.multiPrefixCls, $props.size]">
    <div class="img-wrapper">
      <div class="card-health">
        <img
          class="card-health-img"
          v-for="i in 5" :key="i"
          :src="getSrc(`assets/heart-${i > Number.parseInt(hero.stamina) ? 'hollow' : 'solid'}.webp`)"
          alt=""
        >
      </div>
      <div class="card-attribute">
        <img v-if="hero.element" :src="`/src/assets/img/assets/element/${hero.element}.webp`" alt="">
      </div>
      <div class="card-attack">{{ hero?.attrs?.attack }}</div>
      <div class="card-spirit">{{ hero?.attrs?.hp }}</div>
      <img class="card-img" src="" alt="">
      <div
        v-if="lowStaminaTips && hero.stamina <= 1"
        class="card-tips"
      >Low tolerance value and risk of loss</div>
    </div>
    <div class="card-name">
      {{ hero.rarity }} <span class="card-quality">{{ hero.tokenId }}</span>
    </div>
    <div class="card-info">
      <div class="card-info-item">Critical：{{ hero?.attrs?.crit }}</div>
      <div class="card-info-item">Speed：{{ hero?.attrs?.speed }}</div>
      <div class="card-info-item">Dodge：{{ hero?.attrs?.dodge }}</div>
      <div class="card-info-item">Defense：{{ hero?.attrs?.defense }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$moduleName: 'hero-card';
$prefix-cls: '#{$namespace}-#{$moduleName}';

.#{$prefix-cls} {
  padding: 28px 36px 20px 36px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 270px;
  box-sizing: border-box;
  background-image: url("src/assets/img/game/card-background.webp");
  font-family: 'FZHPJW--GB1', serif;
  @extend .background-img-basic;
  .background-img-basic {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    width: 32px;
    height: 32px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .position-basic {
    position: absolute;
    z-index: 1;
  }
  .img-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    transform: rotate(-1deg);
    background-color: #FFF6D8;
    .card-img {
      width: 194px;
      transform: rotate(1deg);
      object-fit: cover;
    }
    .card-health {
      @extend .position-basic;
      top: -4px;
      left: -20px;
      .card-health-img {
        width: 18px;
      }
    }
    .card-attribute {
      @extend .position-basic;
      @extend .background-img-basic;
      top: -4px;
      right: -10px;
      background-image: url("src/assets/img/assets/attribute-background.webp");
      img {
        width: 18px;
      }
    }
    .card-attack {
      @extend .position-basic;
      @extend .background-img-basic;
      left: -6px;
      bottom: -6px;
      background-image: url("src/assets/img/assets/attack.webp");
    }
    .card-spirit {
      @extend .position-basic;
      @extend .background-img-basic;
      right: -10px;
      bottom: -10px;
      background-image: url("src/assets/img/assets/life.webp");
      width: 36px;
      height: 36px;
    }
    .card-tips {
      position: absolute;
      width: 70%;
      padding: 4px 10px;
      border-radius: 4px;
      background: rgba(5, 5, 5, 0.25);
      font-size: 12px;
      text-align: center;
      color: #fff;
      line-height: 14px;
    }
  }
  .card-name {
    color: $textColor;
    margin-top: 14px;
    margin-bottom: 8px;
    margin-right: auto;
    .card-quality {
      margin-left: 6px;
      color: #EE9314;
    }
  }
  .card-info {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-gap: 8px;
    width: 100%;
    font-size: 10px;
    .card-info-item {
      padding: 3px 2px;
      border: 1px solid #A46C1D;
      text-align: center;
      color: $textColor;
      background: linear-gradient(180deg, #FFF153 0%, #F3BE07 100%);
      box-shadow: inset 0 1px 2px 0 #F4C30E;
      border-radius: 2px;
    }
  }

  &.large {
    padding: 42px 48px 26px 48px;
    width: 370px;
    .img-wrapper {
      width: 270px;
      height: 270px;
      .card-img {
        width: 264px;
      }
    }
    .card-name {
      margin-top: 22px;
      margin-bottom: 12px;
    }
  }
}
</style>
