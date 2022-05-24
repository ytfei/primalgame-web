<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import { reactive, PropType, toRefs, computed, toRaw } from 'vue'
import HeroCard from './HeroCard.vue'
import { HeroInfo } from 'types/store'

const prefixCls = useNamespace('select-hero')
const props = defineProps({
  dialogVisible: {
    type: Boolean,
    required: true
  },
  submitLoading: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    required: true
  },
  heroList: {
    type: Array as PropType<HeroInfo[]>,
    required: true
  },
  enemyInfo: {
    type: Object as PropType<HeroInfo>,
  },
  attrType: {
    type: String
  }
})
const emits = defineEmits(['confirm', 'update:dialog-visible'])
const state = reactive({
  dialog: true,
  selectedTokenId: ''
})
const selectedHero = computed(() => {
  return props.heroList.find((hero: HeroInfo) => hero.tokenId === state.selectedTokenId)
})
const filterHeroList = computed(() => {
  if (!props.attrType) {
    return props.heroList
  }
  return  props.heroList.filter((hero: HeroInfo) =>  {
    return hero.skills.some((skill: string) => skill.indexOf(props.attrType || 'null') !== -1)
  })
})
const onClick = () => {
  emits('confirm', toRaw(selectedHero.value))
}
const onClose = () => {
  emits('update:dialog-visible', false)
}
const { selectedTokenId } = toRefs(state)
</script>

<template>
  <div :class="prefixCls.multiPrefixCls">
    <el-dialog
      :width="enemyInfo ? '900px' : '620px'"
      :model-value="dialogVisible"
      :title="$props.title"
      @close="onClose"
    >
      <div class="container">
        <div v-if="enemyInfo" class="hero-card-wrapper">
          <div class="hero-card-title">Opposite enemy</div>
          <HeroCard :hero="enemyInfo"></HeroCard>
        </div>
        <div class="hero-card-wrapper">
          <div class="hero-card-title">War hero</div>
          <HeroCard :hero="selectedHero" low-stamina-tips></HeroCard>
        </div>
        <div class="hero-list-wrapper">
          <div class="hero-list">
            <el-scrollbar v-if="filterHeroList.length > 0" height="320px">
              <el-radio
                v-for="item in filterHeroList" :key="item.tokenId"
                class="hero-list-item"
                v-model="selectedTokenId"
                :label="item.tokenId"
                size="large"
                border
              >{{ item.rarity }} {{ item.tokenId }}</el-radio>
            </el-scrollbar>
            <div v-else class="hero-list-empty">No more NFT to play</div>
          </div>
          <el-button
            :loading="submitLoading"
            :disabled="!selectedTokenId"
            type="primary"
            @click="onClick"
            size="large"
          >ok</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
$moduleName: 'select-hero';
$prefix-cls: '#{$namespace}-#{$moduleName}';

.#{$prefix-cls} {
  font-family: 'FZHPJW--GB1', serif;
  .container {
    display: flex;
  }
  .hero-card-wrapper {
    .hero-card-title {
      padding-bottom: 14px;
      text-align: center;
      font-size: 16px;
      line-height: 18px;
      color: $textColor;
    }
  }
  .hero-card-wrapper + .hero-card-wrapper {
    margin-left: 10px;
  }
  .hero-list-wrapper {
    margin-left: 20px;
    .hero-list {
      height: 320px;
      padding-bottom: 10px;
      .hero-list-empty {
        padding-top: 140px;
        text-align: center;
        font-size: 16px;
        line-height: 18px;
        color: #aaa;
      }
      .hero-list-item {
        margin-right: 24px;
        padding: 10px 16px;
        border-radius: 6px;
        width: 260px;
        color: #fff;
        background: #e7e7e7;
        margin-bottom: 10px;
        border: none;
        ::v-deep(.el-radio__input .el-radio__inner) {
          border-color: #fff;
        }
        ::v-deep(.el-radio__label) {
          color: #999;
        }
        &.is-checked {
          background: $themeColor;
          ::v-deep(.el-radio__input.is-checked .el-radio__inner) {
            border-color: #fff;
          }
          ::v-deep(.el-radio__label) {
            color: #fff;
          }
        }
      }
    }
    .el-button {
      font-family: 'FZHPJW--GB1', serif;
      width: 260px;
    }
  }
}
</style>
