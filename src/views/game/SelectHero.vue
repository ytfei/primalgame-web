<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import { reactive, ref } from 'vue'
import HeroCard from './HeroCard.vue'

const prefixCls = useNamespace('select-hero')
defineProps({
  title: {
    type: String,
    required: true
  },
  enemyInfo: {
    type: Object,
  }
})
const state = reactive({
  dialog: true,
})
const radio1 = ref('1')
const { dialog } = state
</script>

<template>
  <div :class="prefixCls.multiPrefixCls">
    <el-dialog :width="enemyInfo ? '900px' : '620px'" v-model="dialog" :title="$props.title">
      <div class="container">
        <div v-if="enemyInfo" class="hero-card-wrapper">
          <div class="hero-card-title">xxxx</div>
          <HeroCard></HeroCard>
        </div>
        <div class="hero-card-wrapper">
          <div class="hero-card-title">xxxx</div>
          <HeroCard></HeroCard>
        </div>
        <div class="hero-list-wrapper">
          <div class="hero-list">
            <el-scrollbar height="320px">
              <el-radio class="hero-list-item" v-model="radio1" label="1" size="large" border>Option A</el-radio>
              <el-radio class="hero-list-item" v-model="radio1" label="2" size="large" border>Option B</el-radio>

            </el-scrollbar>
          </div>
          <el-button type="primary" size="large">ok</el-button>
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
