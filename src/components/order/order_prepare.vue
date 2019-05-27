<template>
    <div>
      <home-header :info="'购买礼盒'"></home-header>
      <div class="prepare-container">
        <div class="prepare-img">
          <gift-status :img="'./static/img/gift_back.png'" :info="'./static/img/pic_wanbi.png'" :status="1" :detail="0"></gift-status>
        </div>
        <div class="prepare-datail">
          <gift-detail :info="'礼盒价格'" :detail="'198元'"></gift-detail>
          <gift-detail :info="'盒内物品'" :detail="'52件'"></gift-detail>
          <gift-detail :info="'礼品总价值'" :detail="'3000~5000元'"></gift-detail>
        </div>
        <div class="prepare-input">
          <p>你的赠言</p>
          <textarea v-model="input"></textarea>
          <span>{{num}}/30</span>
          <button v-if="show">赠送</button>
          <button class="button-active" v-else="show" @click="succ">赠送</button>
        </div>
      </div>
    </div>
</template>
<script>
  import homeHeader from '../subcomponents/home_header'
  import giftStatus from '../subcomponents/gift_status'
  import giftDetail from '../subcomponents/gift_detail'
    export default {
        data() {
            return {
              input:'美女，一起吃个早饭~',
              num : 10,
              show : false
            };
        },
        methods: {
          succ(){
            this.$router.push('/order/succ')
          }
        },
      components:{
          homeHeader,
        giftStatus,
        giftDetail
      },
      watch:{
          input(cur,old){
            this.num = cur.length
          },
        num(cur){
            if(cur > 0)
              this.show = false
          if(cur == 0)
            this.show = true
        }
      }
    }
</script>
<style lang="scss" scoped>
  .prepare-container{
    padding: 0 .3rem;
    .prepare-img{
      margin: .55rem 0 .4rem;
    }
    .prepare-datail{
      padding: .4rem .4rem 0;
      border: 1px solid #ccc;
      border-radius: .1rem;
    }
    .prepare-input{
      width: 100%;
      position: relative;
      .button-active{
        color: white;
        background: green;
      }
      p{
        font-size: .24rem;
        color: #576b95;
        padding: .27rem 0 .15rem;
      }
      textarea{
        width: 100%;
        height: 2.4rem;
        border-radius: .1rem;
        border: none;
        background-color: rgb(248,248,248);
        padding: .34rem .26rem;
        font-size: .3rem;
        color: #656565;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        margin-bottom: .75rem;
      }
      button{
        width: 100%;
        height: .88rem;
        background-color: rgb(157,228,156);
        border-radius: .1rem;
        border: none;
        margin-bottom: .59rem;
        color: rgb(219,244,219);
      }
      span{
        position: absolute;
        font-size: .24rem;
        color: #e0e0e0;
        right: .45rem;
        top: 2.6rem;
      }
    }
  }
</style>
