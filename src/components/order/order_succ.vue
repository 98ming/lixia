<template>
    <div>
      <home-header :info="'购买礼盒'"></home-header>
      <div class="succ-container">
        <div class="succ-logo">
          <img src="../../assets/succ.png" alt="">
        </div>
        <div class="succ-info">
          <p>赠送成功</p>
        </div>
        <div class="succ-footer">
          <p>您可以在“我赠送的”查看好友获得的物品，物品最好在好友填写收货信息后1个工作日内发出</p>
          <router-link to="/" tag="button">完成</router-link>
        </div>
        <div class="succ-router">
          <router-link to="/recieve">我收到的</router-link>
          <router-link to="/give">我赠送的</router-link>
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
        methods: {},
      components:{
          homeHeader
      }
    }
</script>
<style lang="scss" scoped>
  .succ-container{
    padding: .95rem .3rem .5rem;
    .succ-logo{
      text-align: center;
      img{
        width: 2rem;
      }
    }
    .succ-info{
      text-align: center;
      padding: .6rem 0 2rem;
      p{
        font-size: .4rem;
        color: #333;
        font-weight: bold;
      };
    }
    .succ-footer{
      text-align: center;
      margin-bottom: 3.55rem;
      p{
        color: #878787;
        font-size: .26rem;
        padding: 0 .47rem .24rem;
      }
      button{
        width: 100%;
        height: .88rem;
        border: none;
        border-radius: .1rem;
        color: white;
        background: rgb(9,187,7);
      }
    }
    /* 当手机屏幕小于321px 时 */
    @media screen and (max-width: 321px){
      .succ-router{
        padding: 0 1.2rem;
      }
    }
    @media screen and (min-width: 321px){
      .succ-router{
        padding: 0 2.2rem;
      }
    }
    .succ-router{
      display: flex;
      justify-content: space-between;
      /*padding: 0 2.2rem;*/
      a{
        font-size: .26rem;
        color: #576b95;
      }
    }
  }
</style>
