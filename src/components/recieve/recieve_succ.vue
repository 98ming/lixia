<template>
    <div>
        <home-header :info="'我的礼品'"></home-header>
        <div class="succ-container">
          <div class="confirm-gift">
            <img src="../../assets/recieve_gift.png" alt="">
            <p>获得小米电动牙刷*1</p>
          </div>
          <div class="info-header">
            <p>收货信息</p>
          </div>
          <div class="info-input">
            <ul>
              <li>
                <span>联系人</span>
                <span>拉布丶</span>
              </li>
              <li>
                <span>手机号</span>
                <span>15938833799</span>
              </li>
              <li>
                <span class="detail">收货地址</span>
                <span>北京市 北京 通州区 物资学院路新建村三期底层一单元 113</span>
              </li>
            </ul>
          </div>
          <div class="info-header">
            <p>物流信息</p>
          </div>
          <div class="info-input">
            <ul>
              <li>
                <span>发货状态</span>
                <span style="color: #09bb07">已发货</span>
              </li>
              <li>
                <span>物流公司</span>
                <span>顺风快递</span>
              </li>
              <li>
                <span>运单单号</span>
                <span>1231456892656</span>
              </li>
            </ul>
          </div>
          <div class="submit-button">
            <button @click="gogogo">完成</button>
          </div>
          <div class="aboutus">
            <router-link to="/about">联系客服</router-link>
          </div>
        </div>
    </div>
</template>
<script>
  import homeHeader from '../subcomponents/home_header'
    export default {
        data() {
            return {};
        },
        methods: {
          gogogo(){
            this.$router.push('/recieve')
          }
        },
      components:{
          homeHeader
      }
    }
</script>
<style lang="scss" scoped>
  .succ-container{
    .confirm-gift{
      text-align: center;
      padding-top: .32rem;
      img{
        height: 3.6rem;
      }
      p{
        font-size: .3rem;
        color: #333;
        padding: .29rem 0 .4rem;
      }
    }
    .info-header{
      background: rgb(248,248,248);
      padding: 0 .6rem;
      p{
        color: #656565;
        font-size: .24rem;
        line-height: .42rem;
      }
    }
    .info-input{
      ul{
        width: 100%;
        li{
          display: flex;
          justify-content: space-between;
          padding: .4rem  .6rem .24rem;
          span{
            /*display: inline-block;*/
            font-size: .28rem;
            color: #656565;
          }
          .detail{
            display: inline-block;
            width: 4.5rem;
          }
        }
      }
    }
    .submit-button{
      padding: .56rem .3rem .6rem;
      button{
        width: 100%;
        height: .88rem;
        border: none;
        border-radius: .1rem;
        color: white;
        background: rgb(9,187,7);
      }
    }
    .aboutus{
      text-align: center;
      margin-bottom: .7rem;
      a{
        color: #576b95;
        font-size: .26rem;
      }
    }
  }
</style>
