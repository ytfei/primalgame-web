<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import { useLoading } from 'src/hooks/useLoading'
import Header from './CommonHeader.vue'
import Footer from './CommonFooter.vue'
const { getLoading } = useLoading()
const prefixCls = useNamespace('layout')
</script>

<template>
  <div :class="prefixCls.multiPrefixCls">
    <Header></Header>
    <main v-loading="getLoading().value">
      <router-view></router-view>
    </main>
    <Footer></Footer>
  </div>
</template>

<style lang="scss" scoped>
$moduleName: 'layout';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';
.#{$prefix-cls} {
  font-family: FZHPJW--GB1-0, FZHPJW--GB1;
  main {
    min-height: calc(100vh - 412px);
    background: #a9e1f2;
    ::v-deep(.el-loading-mask) {
      display: none;
    }
  }
}
</style>
