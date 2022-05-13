<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import { reactive, toRefs } from 'vue'
import { useWallet } from 'hooks/web3/useWallet'
const { onConnect, resetWallet, account } = useWallet()
const connect = async () => {
  await onConnect()
}
const prefixCls = useNamespace('header')
const state = reactive({
  menuList: [
    {
      name: 'Home',
      routerName: 'Home'
    },
    {
      name: 'Game',
      routerName: 'Game'
    },
    {
      name: 'Market',
      routerName: ''
    },
    {
      name: 'Earn',
      routerName: ''
    },
    {
      name: 'Activity',
      routerName: ''
    }
  ]
})
const { menuList } = toRefs(state)
</script>

<template>
  <header :class="prefixCls.multiPrefixCls">
    <div class="header-content">
      <img class="logo" src="#" alt="" />
      <div class="header-menu">
        <ul>
          <li v-for="(item, index) in menuList" :key="index">
            <router-link :to="{ name: item.routerName }">
              <span>{{ item.name }}</span>
            </router-link>
          </li>
        </ul>
      </div>
      <router-link :to="{ name: 'User' }">
        <img class="wallet" src="src/assets/img/layout/wallet.webp" alt="" />
      </router-link>
    </div>
  </header>
</template>

<style lang="scss" scoped>
$moduleName: 'header';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';
.#{$prefix-cls} {
  background: #ffffff;
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
          color: #a3a3a3;
          margin: 0 36px;
          text-decoration: none;
        }
        .router-link-exact-active {
          color: #8d5513;
        }
        span {
          position: relative;
        }
      }
    }
    .logo {
      width: 50px;
      height: 50px;
      background: pink;
      position: absolute;
      left: 50px;
      top: 50%;
      transform: translate(0, -50%);
    }
    .wallet {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(0, -50%);
    }
  }
}
</style>
