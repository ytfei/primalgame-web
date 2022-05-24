<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import { computed, reactive, toRefs } from 'vue'
import { useWallet } from 'hooks/web3/useWallet'
import { useTools } from 'hooks/useTools'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from 'src/store/modules/user'
const User = useUserStore()
const router = useRouter()
const route = useRoute()
const { hideSensitive } = useTools()
const { onConnect, resetWallet, account } = useWallet()
const isConnected = JSON.parse(localStorage.getItem('WEB3_CONNECT_CACHED_PROVIDER') || 'null')
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
    // {
    //   name: 'Market',
    //   routerName: ''
    // },
    // {
    //   name: 'Earn',
    //   routerName: ''
    // },
    // {
    //   name: 'Activity',
    //   routerName: ''
    // }
  ]
})
const classes = computed(() => {
  return route.path.includes('/game')
})

const goToUserCenter = () => {
  router.push({ name: 'User' })
}
const connect = async () => {
  await onConnect()
}
const unConnect = async () => {
  User.setHeroList([])
  await resetWallet()
  router.push({ name: 'Home' })
}
isConnected === 'injected' && connect()

const { menuList } = toRefs(state)
</script>

<template>
  <header :class="prefixCls.multiPrefixCls">
    <div class="header-content">
      <img class="logo" src="#" alt="" />
      <nav class="header-menu">
        <ul>
          <li v-for="(item, index) in menuList" :key="index">
            <router-link :to="{ name: item.routerName }">
              <span :class="item.name === 'Game' && classes ? 'active' : ''" >{{ item.name }}</span>
            </router-link>
          </li>
        </ul>
      </nav>
      <div>
        <img v-if="!account" @click="connect" class="wallet" src="../../assets/img/layout/wallet.webp" alt="" />
        <template v-else>
          <el-button @click="goToUserCenter">
            {{ hideSensitive(account, 4, 4) }}
          </el-button>
          <el-button @click="unConnect" type="primary">Disconnect Wallet</el-button>
        </template>
      </div>
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
    justify-content: space-between;
    position: relative;
    .header-menu {
      li {
        display: inline-block;
        cursor: pointer;
        a {
          display: block;
          color: #a3a3a3;
          margin: 0 36px;
        }
        .router-link-exact-active {
          color: #8d5513;
        }
        .active {
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
    }
  }
}
</style>
