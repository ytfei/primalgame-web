<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import { computed } from 'vue'

const prefixCls = useNamespace('mining-card')

const props = defineProps<{
  type: string // stop, start
}>()
</script>

<template>
  <div :class="prefixCls.multiPrefixCls">
    <div class="min-card">
      <div class="box-img"></div>
      <div class="box-title">
        <h2>Earth element mine</h2>
      </div>
      <div class="box-production">
        <p>Based on production</p>
        <h3>10/h</h3>
      </div>
      <div class="box-number">
        <p>The number of mining</p>
        <h3>12，234，567</h3>
      </div>
      <div class="box-btn">
        <div class="attack-button">Attack</div>
        <div class="mining-button">Mining</div>
      </div>
      <div class="stop-img" v-if="type === 'start'">
        <div class="stop-msg">
          <h2>Water element mining area</h2>
          <p>Output: 20/h</p>
        </div>
        <div class="stop-btn">
          <div class="stop-button">End mining</div>
        </div>
      </div>
    </div>
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
  padding: 50px 36px;
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
      margin: 4px 0px;
      font-size: 16px;
      font-weight: normal;
      color: #8d5513;
      line-height: 18px;
    }
  }
  .box-production,
  .box-number {
    margin: 2px 0px;
    display: flex;
    justify-content: start;

    h3 {
      margin: 0px 10px;
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

  .stop-img {
    width: 370px;
    height: 456px;
    background-image: url('src/assets/img/assets/nft-back-holder.webp');
    background-size: 100% 100%;
    position: absolute;
    left: 0px;
    top: 0px;
  }
  .stop-msg {
    width: 200px;
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
</style>