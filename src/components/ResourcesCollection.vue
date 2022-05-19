<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import { getSrc } from 'src/utils/utils'
import { computed } from 'vue'
import { useFormat} from 'hooks/useFormat'

const { amountFormat } = useFormat()
const prefixCls = useNamespace('resources-collection')
const props = defineProps({
  resourceInfo: {
    type: Object,
    required: true
  },
  takeReward: {
    type: Function,
    default: () => {}
  }
})
const resourceInfos = computed(() => Object.entries(props.resourceInfo).map(([key, value]) => ({
  name: key,
  img: getSrc(`game/${key}.webp`),
  value
})))

const onTakeReward = () => {
  props.takeReward()
}
</script>

<template>
  <div :class="prefixCls.multiPrefixCls">
    <div class="title">Reward resources</div>
    <div class="element">
      <div class="element-content">
        <div class="element-box" v-for="(item, index) in resourceInfos" :key="index">
          <div class="box-left">
            <img :src="item.img" alt="">
            <span>{{ item.name }}</span>
          </div>
          <div class="box-right">
            {{ amountFormat(item.value, { fractionDigits: 6 }) }}
          </div>
        </div>
      </div>
      <Button @click="onTakeReward" class="extract">
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
        padding: 0 20px;
        background-image: url("src/assets/img/game/element-box-back.webp");
        background-size: 100% 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        margin-bottom: 22px;
        .box-left {
          display: flex;
          align-items: center;
          span {
            margin-left: 10px;
            font-size: 16px;
            color: #8D5513;
          }
        }
        .box-right {
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
