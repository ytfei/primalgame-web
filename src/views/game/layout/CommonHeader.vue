<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import { reactive, toRefs } from 'vue'
const prefixCls = useNamespace('game-layout')
const state = reactive({
  menuList: [
    {
      name: 'PVE-wild monster',
      routerName: 'PVE-WildMonster'
    },
    {
      name: 'PVE-underground city',
      routerName: ''
    },
    {
      name: 'Mining',
      routerName: 'Mining'
    },
    {
      name: 'My Heroes',
      routerName: ''
    }
  ]
})
const { menuList } = toRefs(state)
</script>

<template>
  <div :class="prefixCls.multiPrefixCls">
    <div class="layout-1200">
      <div class="header-content">
        <div class="header-menu">
          <ul>
            <li v-for="(item, index) in menuList" :key="index">
              <router-link :to="{ name: item.routerName }">
                <span>{{ item.name }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$moduleName: 'game-layout';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';

.#{$prefix-cls} {
  .layout-1200 {
    padding-top: 52px;
    text-align: center;
    .header-content {
      width: 1200px;
      margin: 0 auto;
      height: 90px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      .header-menu {
        li {
          display: inline-block;
          cursor: pointer;
          a {
            display: block;
            font-size: 20px;
            font-weight: normal;
            color: #fffdf5;
            line-height: 23px;
            margin: 0 36px;
            text-decoration: none;
            //font-family: FZHPJW--GB1-0, FZHPJW--GB1;
          }
          .router-link-exact-active {
            color: #8d5513;
          }
          span {
            position: relative;
          }
        }
      }
    }
  }
}
</style>
