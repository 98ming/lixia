<template>
    <div>
      <home-header :info="'我赠送的'"></home-header>
      <div class="give-box">
        <div class="give-panel">
          <panel-three :img-path="'./static/img/journal.png'" :info="'送礼总价值(元)'" :number="950"></panel-three>
          <div class="give-bill">
              <div class="bill-left">
                <p class="number">1000</p>
                <p>赠送数量(个)</p>
              </div>
              <div class="bill-right">
                <p class="number">15935</p>
                <p>购买费用(元)</p>
              </div>
          </div>
        </div>
        <div class="gift-panel">
          <div @click="routerlink(1)">
            <gift-box :price="999" :name="'拉布丶'" :status="1"></gift-box>
          </div>
          <div @click="routerlink(0)">
            <gift-box :price="666" :name="'拉布丶等32人'" :status="0" ></gift-box>
          </div>
          <div @click="routerlink(0)">
            <gift-box :price="222" :name="'拉布丶等32人'" :status="0" ></gift-box>
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
          routerlink(i){
            if(i == 1){
              this.$router.push({name:'surplus'})
            }
            else{
              this.$router.push({name:'over'})
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
  .give-box{
    padding-left: .45rem;
    padding-right: .45rem;
    padding-top: .32rem;
    .give-panel{
      /*margin-left: .2rem;*/
      box-shadow: 0 0 .1rem #ccc;
      border-radius: .1rem;
      border: 1px solid #ccc;
      padding-top: .4rem;
      padding-bottom: .45rem;
      margin-bottom: .3rem;
      .give-bill{
        padding: 0 1.04rem;
        /*29 26*/
        color: #656565;
        font-size: .24rem;
        display: flex;
        justify-content: space-between;
        .bill-left p:first-child{
          margin-left: .25rem;
        }
        .bill-right p:last-child{
          margin-right: .14rem;
        }
        .number{
          margin: .29rem 0 .26rem;
          font-size: .36rem;
        }
      }
    }
    .gift-panel{
      /*margin-left: .2rem;*/
    }
    .aboutus{
      text-align: center;
      padding: .5rem 0;
      a{
        font-size: .26rem;
        color: #576b95;
      }
    }
  }
</style>
