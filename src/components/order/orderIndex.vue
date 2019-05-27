<template>
    <div style="position: relative">
        <home-header :info="'购买礼盒'"></home-header>
        <div class="order-container">
          <div class="order-header">
              <div class="header">
                <div class="header-left">
                  <img src="../../assets/cin_lihe.png" alt="">
                  <span>礼盒包装</span>
                </div>
                <div class="header-right">
                  <span>赠礼须知</span>
                </div>
              </div>
              <div class="header-gift">
                  <div class="gift-top">
                    <img src="../../assets/gift_purple.png" alt="">
                  </div>
                  <div class="gift-bottom">
                    <img src="../../assets/icon_shuaxin.png" alt="">
                  </div>
              </div>
          </div>
          <div class="order-select">
            <div class="select-header">
              <div class="header">
                <div class="header-left">
                  <img src="../../assets/cin_lihe.png" alt="">
                  <span>盒内礼品</span>
                </div>
              </div>
              <div class="footer">
                <span>已选数量：{{num}}</span>
                <span>幸运礼品：iphone&nbsp;X&nbsp;<img src="../../assets/icon_green.png" alt=""></span>
              </div>
            </div>
            <div class="select-evel">
              <order-panel :evel="'./static/img/icon_evel_1.png'" :vip="'./static/img/icon_vip_1.png'" :price="18" :value1="10" :value2="30" @change="numChange"></order-panel>
              <order-panel :evel="'./static/img/icon_evel_2.png'" :vip="'./static/img/icon_vip_2.png'" :price="38" :value1="10" :value2="30" @change="numChange"></order-panel>
              <order-panel :evel="'./static/img/icon_evel_3.png'" :vip="'./static/img/icon_vip_3.png'" :price="68" :value1="40" :value2="80" @change="numChange"></order-panel>
              <order-panel :evel="'./static/img/icon_evel_4.png'" :vip="'./static/img/icon_vip_4.png'" :price="98" :value1="80" :value2="120" @change="numChange"></order-panel>
              <order-panel :evel="'./static/img/icon_evel_5.png'" :vip="'./static/img/icon_vip_7.png'" :price="128" :value1="380" :value2="500" @change="numChange"></order-panel>
              <order-panel :evel="'./static/img/icon_evel_6.png'" :vip="'./static/img/icon_vip_8.png'" :price="268" :value1="580" :value2="1000" @change="numChange"></order-panel>
              <order-panel :evel="'./static/img/icon_evel_7.png'" :vip="'./static/img/icon_vip_9.png'" :price="388" :value1="980" :value2="1500" @change="numChange"></order-panel>
              <order-panel :evel="'./static/img/icon_evel_8.png'" :vip="'./static/img/icon_vip_10.png'" :price="2018" :value1="1999" :value2="9999" @change="numChange"></order-panel>
            </div>
            <p>*暂不支持的收货地区：新疆、西藏、青海、港澳台</p>
          </div>
        </div>
      <div class="bill">
        <div class="bill-left">
          <p>共{{num}}件商品</p>
          <h2>￥{{price}}.00</h2>
        </div>
        <div class="bill-right">
          <button @click="lucky">购买</button>
        </div>
      </div>
      <div class="lucky-container">
        <transition>
          <div class="lucky" v-if="show">
            <div class="lucky-info">
              <p class="title">幸运礼品</p>
              <div class="lucky-img"></div>
              <p class="info">每个品质的礼品都有可能升级为幸运礼品</p>
            </div>
            <div class="lucky-router">
              <router-link to="/order/prepare">知道了</router-link>
            </div>
          </div>
        </transition>
      </div>

    </div>
</template>
<script>
  import homeHeader from '../subcomponents/home_header'
  import orderPanel from './order_evel'
    export default {
        data() {
            return {
              num: 0,
              price: 0,
              show: false
            };
        },
        methods: {
          numChange(item){
            // console.log(item)
            this.num += item.num;
            this.price += item.price
          },
          lucky(){
            if(this.num == 0){
              this.$message('请选择要赠送的礼物🎁哦');
              return
            }
            else{
              this.show = true
            }
          }
        },
        components:{
          homeHeader,
          orderPanel
        }
    }
</script>
<style lang="scss" scoped>
  .bill{
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: .3rem .63rem .4rem .63rem;
    .bill-left{
      p{
        font-size: .22rem;
        color: #878787;
        margin-bottom: .13rem;
      }
      h2{
        font-size: .42rem;
        color: #333;
      }
    }
    .bill-right{
       button{
         width: 1.5rem;
         height: .66rem;
         background-color: rgb(105,190,73);
         color: white;
         border: none;
         border-radius: .1rem;
       }
    }
  }
  .lucky-container{
    .v-enter{
      opacity: 0;
      transform: translateY(100%);
    }
    .v-leave-to{
      opacity: 0;
      transform: translateY(-100%);
      position: absolute;
    }
    .v-enter-active,.v-leave-active{
      transition: all 0.5s ease;
    }
    .lucky{
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0,0,0,0.3);
      .lucky-info{
        margin: 3.1rem .95rem 0;
        padding: .6rem .35rem 0;
        background: white;
        text-align: center;
        .title{
          font-size: .42rem;
          color: #333;
          margin-bottom: .33rem;
        }
        .info{
          color: rgb(160,160,160);
          font-size: .24rem;
          padding: .3rem 0 .4rem;
        }
        @media screen and (max-width: 321px){
          .lucky-img{
            width: 3.9rem;
          }
        }
        @media screen and (min-width: 321px){
          .lucky-img{
            width: 4.9rem;
          }
        }
        .lucky-img{
          height: 3.3rem;
          background: rgb(235,235,235);
          margin: 0 auto;
        }
      }
      .lucky-router{
        margin: 0 .95rem;
        background-color: white;
        text-align: center;
        padding: .35rem 0;
        border-top: 1px solid #ccc;
        a{
          font-size: .35rem;
          color: rgb(0,194,0);
        }
      }
    }
  }
  .order-container{
    padding: .4rem .3rem 0rem .5rem;
    .order-header{
      .header{
        display: flex;
        justify-content: space-between;
        .header-left{
          img{
            width: .34rem;
          }
          span{
            display: inline-block;
            margin-left: .2rem;
            font-size: .28rem;
            font-weight: bold;
            color: #656565;
          }
        }
        .header-right{
          span{
            font-size: .24rem;
            color: #656565;
          }
        }
      }
      .header-gift{
        text-align: center;
        .gift-top{
          margin: .36rem 0 .45rem;
          img{
            height: 2.55rem;
          }
        }
        .gift-bottom{
          margin: .45rem 0;
          img{
            width: .66rem;
          }
        }
      }
    }
    .order-select{
      padding-right: .2rem;
      text-align: center;
      .select-header{
        .header{
          display: flex;
          justify-content: space-between;
          .header-left{
            img{
              width: .34rem;
            }
            span{
              display: inline-block;
              margin-left: .2rem;
              font-size: .28rem;
              font-weight: bold;
              color: #656565;
            }
          }
        }
      }
      .footer{
        display: flex;
        justify-content: space-between;
        margin: .31rem 0 .43rem;
        span{
          font-size: .24rem;
          color: #878787;
          line-height: .24rem;
          img{
            width: .24rem;
            position: relative;
            top: -0.04rem;
          }
        }
      }
      .select-evel{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
      p{
        font-size: .22rem;
        font-weight: bold;
        color: #878787;
        margin: .3rem 0;
      }
    }
  }
</style>
