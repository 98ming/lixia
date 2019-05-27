<template>
    <div class="person-container">
        <div class="num" v-if="this.$props.status">
          <span class="info">已领取&nbsp;3/8</span>
          <span class="detail">
            未被领完可以<router-link to="/order/prepare">继续赠送</router-link>
          </span>
        </div>
      <div class="num" v-else="this.$props.status">
        <span class="info">已领取&nbsp;3/3</span>
      </div>
        <div class="person">
          <ul v-if="this.$props.me">
            <li style="font-weight: bold">
              <span>3</span>
              <div class="angle">
                <!--<img src="../../assets/pic_xiaohuangguan.png" alt="">-->
              </div>
              <span>&nbsp;&nbsp;&nbsp;我&nbsp;&nbsp;&nbsp;</span>
              <span>小米电动牙刷*1</span>
              <span>价值1200元</span>
              <img src="../../assets/icon_more_green.png" alt="" @click="getMore">
            </li>
            <li>
              <span>1</span>
              <div class="angle">
                <img src="../../assets/pic_xiaohuangguan.png" alt="">
              </div>
              <span>拉布丶</span>
              <span>小米电动牙刷*1</span>
              <span>价值1200元</span>
            </li>
            <li>
              <span>2</span>
              <div class="angle">
                <!--<img src="../../assets/pic_xiaohuangguan.png" alt="">-->
              </div>
              <span>拉布丶</span>
              <span>小米电动牙刷*1</span>
              <span>价值1200元</span>
            </li>
          </ul>
          <ul v-else="this.$props.me">
            <li>
              <span>1</span>
              <div class="angle">
                <img src="../../assets/pic_xiaohuangguan.png" alt="">
              </div>
              <span>拉布丶</span>
              <span>小米电动牙刷*1</span>
              <span>价值1200元</span>
            </li>
            <li>
              <span>2</span>
              <div class="angle">
                <!--<img src="../../assets/pic_xiaohuangguan.png" alt="">-->
              </div>
              <span>拉布丶</span>
              <span>小米电动牙刷*1</span>
              <span>价值1200元</span>
            </li>
            <li>
              <span>3</span>
              <div class="angle">
                <!--<img src="../../assets/pic_xiaohuangguan.png" alt="">-->
              </div>
              <span>拉布丶</span>
              <span>小米电动牙刷*1</span>
              <span>价值1200元</span>
            </li>
          </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {};
        },
        methods: {
          getMore(){
            this.$router.push('/recieve/succ')
          }
        },
      props:['status','me']
    }
</script>
<style lang="scss">
  .person-container{
    .num{
      background: rgb(248,248,248);
      padding: 0 .3rem;
      display: flex;
      justify-content: space-between;
      .info{
        font-size: .24rem;
        line-height: .42rem;
        color: #656565;
      }
      .detail{
        font-size: .24rem;
        line-height: .42rem;
        color: #878787;
        a{
          color: #09bb07;
          text-decoration: underline;
        }
      }
    }
    .person{
      padding: 0 .3rem;
      ul{
        padding-bottom: .58rem;
       li{
         display: flex;
         justify-content: space-around;
         margin-top: .4rem;
         position: relative;
         .angle{
           background: rgb(209,209,209);
           width: .44rem;
           height: .44rem;
           border-radius: .05rem;
           position: relative;
           img{
             position: absolute;
             right: -20%;
             top: -20%;
             width: .3rem;
           }
         }
         span{
           font-size: .26rem;
           line-height: .42rem;
           color: #656565;
         }
         img{
            position: absolute;
           right: -1%;
           top: 19%;
           height: .24rem;
         }
       }
      }
    }
  }
</style>
