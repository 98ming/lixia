<template>
  <div>
    <home-header :info="'我收到的'"></home-header>
    <div class="receive-box">
      <div class="receive-panel">
        <panel-three :img-path="'./static/img/cin_lihe.png'" :info="'收礼总价值'" :number="10001"></panel-three>
        <div class="receive-bill">
          <p>收到礼盒数量<span>100个</span></p>
        </div>
      </div>
      <div class="gift-panel">
        <div @click="routerlink(2,0)">
          <gift-box  :name="'拉布丶'" :status="2" :address="0"></gift-box>
        </div>
        <div @click="routerlink(1,0)">
          <gift-box  :name="'拉布丶'" :status="1" :address="0"></gift-box>
        </div>
        <div @click="routerlink(1,1)">
          <gift-box  :name="'拉布丶'" :status="1" :address="1"></gift-box>
        </div>
        <div @click="routerlink(0,0)">
          <gift-box  :name="'拉布丶'" :status="0" :address="0"></gift-box>
        </div>
      </div>
      <div class="aboutus">
        <router-link to="/about">联系客服</router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import homeHeader from '../subcomponents/home_header'
  import panelThree from '../subcomponents/panel-three'
  import giftBox from './gift_box'
  export default {
    data() {
      return {};
    },
    methods: {
      getBetweenRound(min,max){
        return min + Math.floor(Math.random()*(max-min)+1);
      },
      routerlink(i,j){
        if(i == 1){
          if(j == 1)
            //  待发货未填地址
            this.$router.push('/recieve/confirm')
          else
            // 待发货已填地址，重复领取
            this.$router.push('/recieve/repeat')
        }
        if(i == 2){
          //  待领取
          var ran = this.getBetweenRound(1,10)
          if(ran <=5)
            this.$router.push('/recieve/allow')
          else
            this.$router.push('/recieve/over')
        }
        if(i == 0){
          // 已发货
          this.$router.push('/recieve/succ')
        }
      }
    },
    components:{
      homeHeader,
      panelThree,
      giftBox
    }
  }
</script>
<style lang="scss" scoped>
  .receive-box{
    padding-left: .45rem;
    padding-right: .45rem;
    padding-top: .32rem;
    .receive-panel{
      /*margin-left: .2rem;*/
      box-shadow: 0 0 .1rem #ccc;
      border-radius: .1rem;
      border: 1px solid #ccc;
      padding-top: .4rem;
      padding-bottom: .45rem;
      margin-bottom: .3rem;
      .receive-bill{
        text-align: center;
        padding-top: .4rem;
        p{
          font-size: .3rem;
          color: rgb(51,51,51);
          span{
            color: rgb(105,190,73);
          }
        }
      }
    }
    .gift-panel{
      /*margin-left: .2rem;*/
    }
    .aboutus{
      text-align: center;
      padding: .4rem 0;
      a{
        font-size: .26rem;
        color: #576b95;
      }
    }
  }
</style>
