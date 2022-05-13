<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import { getSrc } from 'src/utils/utils'
const prefixCls = useNamespace('hero-card')
const health = 3
</script>

<template>
  <div :class="prefixCls.multiPrefixCls">
    <div class="img-wrapper">
      <div class="card-health">
        <img
          class="card-health-img"
          v-for="i in 5" :key="i"
          :src="getSrc(`assets/heart-${i > health ? 'hollow' : 'solid'}.webp`)"
          alt=""
        >
      </div>
      <div class="card-attribute"></div>
      <div class="card-attack">1</div>
      <div class="card-spirit">1</div>
      <img class="card-img" src="" alt="">
    </div>
    <div class="card-name">
      XXXXX <span class="card-quality">xxx</span>
    </div>
    <div class="card-info">
      <div class="card-info-item">Critical：</div>
      <div class="card-info-item">Critical：</div>
      <div class="card-info-item">Critical：</div>
      <div class="card-info-item">Critical：</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$moduleName: 'hero-card';
$prefix-cls: '#{$namespace}-#{$moduleName}';

.#{$prefix-cls} {
  padding: 28px 36px 20px 36px;
  width: 270px;
  height: 334px;
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
      height: 194px;
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
  }
  .card-name {
    color: $textColor;
    margin-top: 14px;
    margin-bottom: 8px;
    .card-quality {
      margin-left: 6px;
      color: #EE9314;
    }
  }
  .card-info {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-gap: 8px;
    font-size: 10px;
    .card-info-item {
      padding: 3px 14px;
      border: 1px solid #A46C1D;
      color: $textColor;
      background: linear-gradient(180deg, #FFF153 0%, #F3BE07 100%);
      box-shadow: inset 0 1px 2px 0 #F4C30E;
      border-radius: 2px;
    }
  }
}
</style>
