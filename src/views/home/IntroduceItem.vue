<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import { computed, PropType } from 'vue'
const prefixCls = useNamespace('introduce-item')

type PositionType = 'right' | 'left'
const props = defineProps({
  position: {
    type: String as PropType<PositionType>,
    default: 'left'
  },
  title: String,
  text: String,
  img: String,
  styleType: String as PropType<'home' | 'dao'>
})
const classes = computed(() => {
  return [prefixCls.multiPrefixCls, props.position, props.styleType]
})
</script>

<template>
  <section :class="classes">
    <div class="introduce">
      <slot>
        <div class="img-container">
          <img src="#" alt="" />
        </div>
      </slot>
      <article class="introduce-content">
        <h4 class="introduce-content-title">
          <slot v-if="title || $slots.title" name="title">{{ title }}</slot>
        </h4>
        <p class="introduce-content-text">
          <slot v-if="text || $slots.text" name="text">{{ text }}</slot>
        </p>
      </article>
    </div>
  </section>
</template>

<style lang="scss" scoped>
$moduleName: 'introduce-item';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';
.#{$prefix-cls} {
  width: 1200px;
  height: 342px;
  margin: 0px auto 19px;
  display: flex;
  background-image: url('src/assets/home/systemBack.webp');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;

  .introduce {
    width: 1030px;
    margin: auto;
    display: flex;

    .img-container {
      margin-top: auto;
      margin-bottom: auto;
    }
    img {
      width: 463px;
      height: 243px;
      background-color: #935000;
    }
    .introduce-content {
      flex: 1;
      display: flex;
      justify-content: center;
      flex-direction: column;
      &-title {
        margin: 0;
        padding-bottom: 11px;
        font-size: 20px;
        line-height: 23px;
        color: #fff;
      }
      &-text {
        color: #935000;
        font-size: 16px;
        line-height: 18px;
      }
    }
  }
  &.left {
    .introduce-content {
      padding-left: 38px;
    }
  }
  &.right {
    .introduce {
      flex-direction: row-reverse;
    }
    .introduce-content {
      padding-right: 51px;
      &-title {
        text-align: right;
      }
    }
  }
}
</style>