<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import { reactive, toRefs } from 'vue'

const prefixCls = useNamespace('timeline')

const state = reactive({
  list: [
    {
      title: '2022.Q3',
      content:
        'Alpha test online game, including mining, PVE single player and dungeon modes'
    },
    {
      title: '2022.Q4',
      content:
        'Official online online game beta version, join PVP module - arena'
    },
    {
      title: '2022.Q1',
      content: 'PVP- Duel opens the hero combat skill module'
    },
    {
      title: '2022.Q2',
      content: 'Introduce the world map and open the way to explore the world'
    },
    {
      title: '2022.Q3',
      content: 'Platoon function online camp war online'
    },
    {
      title: '2022.Q4',
      content: 'Guild system online Land NFT online'
    }
  ]
})
const { list } = toRefs(state)
</script>

<template>
  <div :class="prefixCls.multiPrefixCls">
    <div class="layout-1200">
      <div class="feature">
        <div
          :class="'feature-box' + index"
          v-for="(item, index) in list"
          :key="index"
        >
          <h2>{{ item.title }}</h2>
          <p>{{ item.content }}</p>
        </div>
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
  .feature {
    position: relative;
    div {
      width: 255px;
      height: 255px;
      background-image: url('src/assets/home/timeline-back.webp');
      background-size: contain;
      background-repeat: no-repeat;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      h2,
      p {
        margin: 10px 16px;
        text-align: center;
        line-height: 25px;
      }
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