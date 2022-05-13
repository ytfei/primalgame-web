<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import { toRefs } from 'vue'
const prefixCls = useNamespace('resources-collection')
const state = {
  elementList: [
    {
      name: 'Life',
      img: '../assets/img/game/life.webp',
      value: 123
    },
    {
      name: 'Fire',
      img: '../assets/img/game/fire.webp',
      value: 123
    },
    {
      name: 'Earth',
      img: '../assets/img/game/earth.webp',
      value: 123
    },
    {
      name: 'Wind',
      img: '../assets/img/game/wind.webp',
      value: 123
    },
    {
      name: 'Water',
      img: '../assets/img/game/water.webp',
      value: 123
    },
    {
      name: 'Native skills',
      img: '../assets/img/game/native-skills.webp',
      value: 123
    }
  ]
}
const { elementList } = toRefs(state)
</script>

<template>
  <div :class="prefixCls.multiPrefixCls">
    <div class="title">Reward resources</div>
    <div class="element">
      <div class="element-content">
        <div class="element-box" v-for="(item, index) in elementList" :key="index">
          <div class="box-left">
            <img :src="item.img" alt="">
            <span>{{ item.name }}</span>
          </div>
          <div class="box-right">
            {{ item.value }}
          </div>
        </div>
      </div>
      <Button class="extract">
        Extract
      </Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$moduleName: 'resources-collection';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';

.#{$prefix-cls} {
  height: 290px;
  background-image: url("src/assets/img/game/resources-back.webp");
  padding: 40px 57px 0 70px;
  box-sizing: border-box;
  .title {
    font-size: 18px;
    color: #8D5513;
  }
  .element {
    display: flex;
    align-items: center;
    .element-content {
      margin-top: 12px;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      width: 880px;
      .element-box {
        width: 242px;
        height: 70px;
        background-image: url("src/assets/img/game/element-box-back.webp");
        background-size: 100% 100%;
        display: flex;
        align-items: center;
        padding-left: 26px;
        box-sizing: border-box;
        margin-bottom: 22px;
        .box-left {
          display: flex;
          align-items: center;
          span {
            margin-left: 10px;
            font-size: 16px;
            color: #8D5513;
            width: 63px;
          }
        }
        .box-right {
          margin-left: 46px;
          font-size: 18px;
          color: #8D5513;
        }
      }
    }
    .extract {
      width: 182px;
      height: 60px;
      margin-left: 62px;
      cursor: pointer;
      text-align: center;
      line-height: 60px;
      color: #ffffff;
      font-size: 18px;
    }
  }
}
</style>
