<script setup lang="ts">
import { useNamespace } from 'src/hooks/useCommon'
import { reactive, toRefs } from 'vue'
import Heart from 'src/components/Heart.vue'

const prefixCls = useNamespace('introduce-hero')

const state = reactive({
  list: [
    {
      title: 'Predatory skills',
      sub: 'You cannot participate in mining. You can only attack the mining hero set by other players and plunder 20% of their untapped resources'
    },
    {
      title: 'Wind skill',
      sub: "You can only participate in the mining of wind elements. You can't attack the mining heroes set by other players"
    },
    {
      title: 'Life skills',
      sub: "You can only participate in the mining of life elements. You can't attack the mining heroes set by other players"
    },
    {
      title: 'Fire skill',
      sub: "You can only participate in the mining of fire element. You can't attack the mining heroes set by other players"
    },
    {
      title: 'Water skills',
      sub: "You can only participate in water element mining. You can't attack other players to set up mining heroes"
    },
    {
      title: 'Soil skills',
      sub: "You can only participate in the mining of earth elements. You can't attack the mining heroes set by other players"
    },
    {
      title: 'Native skills',
      sub: "You can only participate in the mining of primary elements. You can't attack the mining heroes set by other players"
    }
  ],
  heroElement: [
    {
      title: 'Critical：50'
    },
    {
      title: 'Speed：50'
    },
    {
      title: 'Dodge：50'
    },
    {
      title: 'Defense：50'
    }
  ]
})
const { list, heroElement } = toRefs(state)
</script>

<template>
  <div :class="prefixCls.multiPrefixCls">
    <div class="layout-1200">
      <div class="heroSystem">
        <div class="hero_card">
          <div class="heroName">
            <img src="../../assets/img/home/socialmedia.webp" alt="" />
          </div>
          <div class="heroName">
            <h2>Hero name</h2>
          </div>
          <div class="heroAvatar">
            <img src="../../assets/img/home/hero_back.webp" alt="" />
          </div>
          <Heart class="healthIcon" :quantity="4"></Heart>
          <div class="heroElement">
            <img src="../../assets/img/home/element.webp" alt="" />
          </div>
          <div class="heroElement-el">
            <img src="../../assets/img/home/fire.webp" alt="" />
          </div>
          <div class="heroAttack">
            <img src="../../assets/img/home/lite_back.webp" alt="" />
          </div>
          <div class="heroAttack">
            <p>5</p>
          </div>
          <div class="heroHealth">
            <img src="../../assets/img/home/health.webp" alt="" />
          </div>
          <div class="heroHealth">
            <p>8</p>
          </div>
          <div class="heroMessage">
            <p
              class="hero-msg"
              v-for="(item, index) in heroElement"
              :key="index"
            >
              {{ item.title }}
            </p>
          </div>
          <div class="heroSkill">
            <img src="../../assets/img/home/skill-back.webp" alt="" />
          </div>
          <div class="heroSkill-icon">
            <img src="../../assets/img/home/fire.webp" alt="" />
          </div>
        </div>
        <div class="heroIntroduce">
          <div class="hero_describe">
            <div v-for="(item, index) in list" :key="index">
              <div class="hero_round"></div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.sub }}</p>
            </div>
          </div>
          <div class="attribute">
            <div class="underIntroduce">
              <img src="../../assets/img/home/loyal.webp" alt="" />
              <p>Loyalty points</p>
            </div>
            <div class="underIntroduce">
              <img src="../../assets/img/home/element.webp" alt="" />
              <p>Attribute element</p>
            </div>
            <div class="underIntroduce">
              <img src="../../assets/img/home/lite_back.webp" alt="" />
              <p>Attack</p>
            </div>
            <div class="underIntroduce">
              <img src="../../assets/img/home/health.webp" alt="" />
              <p>Health</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$moduleName: 'introduce-hero';
$prefix-cls: '#{$namespace}-#{$moduleName}';
$mobile-prefix-cls: '#{$namespace}-m-#{$moduleName}';
.#{$prefix-cls} {
  .heroSystem {
    display: flex;
    justify-content: space-between;
  }
  .hero_card {
    width: 453px;
    height: 560px;
    margin-top: 9px;
    margin-left: 2px;
    background-image: url('src/assets/img/home/small_back.webp');
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    .heroAvatar {
      position: absolute;
      top: 46px;
      left: 62px;
      img {
        width: 330px;
        height: 331px;
      }
    }
    .healthIcon {
      width: 150px;
      display: flex;
      justify-content: space-between;
      position: absolute;
      top: 46px;
      left: 20px;
    }
    .heroElement {
      position: absolute;
      top: 36px;
      right: 41px;
      img {
        width: 55px;
        height: 55px;
      }
    }
    .heroElement-el {
      position: absolute;
      top: 49px;
      right: 54px;
      img {
        width: 28px;
        height: 30px;
      }
    }
    .heroName {
      position: absolute;
      left: 82px;
      top: -37px;
      img {
        width: 289px;
        height: 73px;
      }
      h2 {
        position: absolute;
        left: 88px;
        top: 12px;
        width: 289px;
        height: 23px;
        font-size: 20px;
        margin: 0;
        color: #fff;
        line-height: 23px;
      }
    }
    .heroAttack {
      position: absolute;
      left: 38px;
      bottom: 173px;
      img {
        width: 61px;
        height: 59px;
      }
      p {
        margin: 0px;
        text-align: center;
        width: 61px;
        line-height: 59px;
        font-size: 22px;
        font-weight: normal;
        color: #fff;
      }
    }
    .heroHealth {
      position: absolute;
      right: 41px;
      bottom: 169px;
      img {
        width: 63px;
        height: 66px;
      }
      p {
        margin: 0px;
        text-align: center;
        width: 63px;
        line-height: 66px;
        font-size: 22px;
        font-weight: normal;
        color: #fff;
      }
    }
    .heroMessage {
      width: 330px;
      height: 80px;
      flex: 1;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      left: 70px;
      bottom: 86px;
      .hero-msg {
        width: 148px;
        height: 31px;
        margin: 0 0 10px;
        text-align: center;
        background: linear-gradient(180deg, #fff153 0%, #f3be07 100%);
        box-shadow: inset 0px 1px 3px 0px #f4c30e;
        border-radius: 4px;
        border: 2px solid #a46c1d;
        line-height: 31px;
        font-size: 12px;
        font-weight: normal;
        color: #8d5513;
      }
    }
    .heroSkill {
      position: absolute;
      left: 198px;
      bottom: 17px;
      img {
        width: 58px;
        height: 57px;
      }
    }
    .heroSkill-icon {
      position: absolute;
      left: 211px;
      bottom: 30px;
      img {
        width: 30px;
        height: 30px;
      }
    }
  }

  .heroIntroduce {
    width: 688px;
    height: 572px;
    background-image: url('src/assets/img/home/big_back.webp');
    background-size: contain;
    background-repeat: no-repeat;
  }
  .hero_describe {
    margin: 50px 0px 0px;
    div {
      margin: 0px;
      position: relative;
      .hero_round {
        width: 34px;
        height: 34px;
        border-radius: 17px;
        background-color: #d8d8d8;
        position: absolute;
        left: 40px;
      }
      h3 {
        margin: 0px 42px 0px 80px;
        font-size: 14px;
        color: #8d5513;
        line-height: 16px;
      }
      p {
        margin: 3px 42px 10px 80px;
        font-size: 14px;
        color: #bd7724;
        line-height: 16px;
      }
    }
  }
  .attribute {
    margin: 22px 50px 45px 37px;
    display: flex;
    justify-content: space-between;
    div {
      display: flex;
      justify-content: center;
      img {
        width: 36px;
        height: 34px;
      }
      p {
        font-size: 14px;
        font-weight: normal;
        color: #8d5513;
        margin-left: 6px;
      }
    }
  }
}
</style>
