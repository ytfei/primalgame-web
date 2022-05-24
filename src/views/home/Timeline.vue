<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
const prefixCls = useNamespace('timeline')
</script>

<template>
  <div :class="prefixCls.multiPrefixCls">
    <div class="layout-1200">
      <div class="feature">
        <div class="feature-box-1">
          <h2>2022.Q3</h2>
          <p>
            Alpha version online in test net, including mining, PVE and dungeon scenario
          </p>
        </div>
        <div class="feature-box-2">
          <h2>2022.Q4</h2>
          <p>
            Beta version officially online. Add PVP mode--arena
          </p>
        </div>
        <div class="feature-box-3">
          <h2>2022.Q1</h2>
          <p>Add PVP mode--battle; Open hero combat skill module</p>
        </div>
        <div class="feature-box-4">
          <h2>2022.Q2</h2>
          <p>
            Open hero camp and introduce the world map to explore the world
          </p>
        </div>
        <div class="feature-box-5">
          <h2>2022.Q3</h2>
          <p>Team up & camp war online</p>
        </div>
        <div class="feature-box-6">
          <h2>2022.Q4</h2>
          <p>Guild system online Land NFT online</p>
        </div>
        <img
          class="roadline-1"
          src="../../assets/img/home/roadline_1.webp"
          alt=""
        />
        <img
          class="roadline-2"
          src="../../assets/img/home/roadline_2.webp"
          alt=""
        />
        <img
          class="roadline-3"
          src="../../assets/img/home/roadline_3.webp"
          alt=""
        />
        <img
          class="roadline-4"
          src="../../assets/img/home/roadline_4.webp"
          alt=""
        />
        <img
          class="roadline-5"
          src="../../assets/img/home/roadline_5.webp"
          alt=""
        />
      </div>
      <div class="img"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$moduleName: 'timeline';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';
.#{$prefix-cls} {
  height: 1250px;
  .feature {
    position: relative;
    div {
      width: 255px;
      height: 255px;
      background-image: url('src/assets/img/home/timeline-back.webp');
      background-size: contain;
      background-repeat: no-repeat;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      h2 {
        margin: 10px 16px;
        text-align: center;
        font-size: 18px;
        font-weight: normal;
        color: #8d5513;
        line-height: 21px;
      }
      p {
        margin: 10px 16px;
        text-align: center;
        font-size: 16px;
        font-weight: normal;
        color: #9b7242;
        line-height: 25px;
      }
    }
    .feature-box-1 {
      position: absolute;
      left: 200px;
    }
    .feature-box-2 {
      position: absolute;
      top: 106px;
      right: 200px;
    }
    .feature-box-3 {
      position: absolute;
      top: 397px;
      left: 200px;
    }
    .feature-box-4 {
      position: absolute;
      top: 541px;
      right: 200px;
    }
    .feature-box-5 {
      position: absolute;
      top: 846px;
      left: 200px;
    }
    .feature-box-6 {
      position: absolute;
      top: 929px;
      right: 200px;
    }
    .roadline-1 {
      width: 294px;
      height: 160px;
      position: absolute;
      left: 456px;
      top: 96px;
    }
    .roadline-2 {
      width: 421px;
      height: 150px;
      position: absolute;
      left: 456px;
      top: 354px;
    }
    .roadline-3 {
      width: 463px;
      height: 64px;
      position: absolute;
      left: 285px;
      top: 634px;
    }
    .roadline-4 {
      width: 440px;
      height: 184px;
      position: absolute;
      left: 456px;
      top: 790px;
    }
    .roadline-5 {
      width: 412px;
      height: 78px;
      position: absolute;
      left: 334px;
      top: 1074px;
    }
  }

  .feature-box0 .feature-box2 .feature-box4 {
    position: absolute;
    left: 200px;
  }

  .feature-box1 .feature-box3 .feature-box5 {
    position: absolute;
    right: 200px;
  }
}
</style>
