<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import Button from 'comps/Button.vue'
const prefixCls = useNamespace('account')
const tests = () => {
  console.log(66666)
}
</script>

<template>
  <div :class="prefixCls.multiPrefixCls">
    <div class="account">
      <div class="avatar"></div>
      <span>0x21d21d…3d5vg</span>
    </div>
    <div class="currency-content">
      <div class="currency">
        <div class="balance">200.00</div>
        <div class="caption">Game currency</div>
      </div>
      <Button @click="tests">Exchange</Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$moduleName: 'account';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';

.#{$prefix-cls} {
  height: 160px;
  background-image: url('src/assets/img/user/user-banner.webp');
  background-size: 100% 100%;
  padding: 46px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  .account {
    display: flex;
    align-items: center;
    .avatar {
      width: 68px;
      height: 68px;
      background: #a9e1f2;
      border-radius: 50%;
    }
    span {
      font-size: 18px;
      color: #8d5513;
      margin-left: 20px;
    }
  }
  .currency-content {
    display: flex;
    align-items: center;
    .currency {
      text-align: right;
      font-size: 14px;
      margin-right: 20px;
      .caption {
        color: #8d5513;
      }
      .balance {
        color: #ee9314;
      }
    }
  }
}
</style>
