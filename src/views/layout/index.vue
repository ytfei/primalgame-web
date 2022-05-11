<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import Header from './CommonHeader.vue'
import Footer from './CommonFooter.vue'
const prefixCls = useNamespace('layout')
</script>

<template>
  <div :class="prefixCls.multiPrefixCls">
    <Header></Header>
    <main>
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
  main {
    min-height: calc(100vh - 412px);
    background: #cccccc;
  }
}
</style>
