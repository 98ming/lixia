<template>
  <div>
    <home-header :info="'礼吓'"></home-header>
    <div class="surplus-container">
      <div class="surplus-img">
        <gift-status :img="'./static/img/gift_back.png'"  :status="1" :detail="1" :circle="1"></gift-status>
      </div>
      <div class="surplus-info">
        <gift-detail :info="'赠礼好友'" :detail="'拉布丶'" :touxiang="'./static/img/gift_back.png'"></gift-detail>
        <gift-detail :info="'赠礼时间'" :detail="'2018-01-05 23:59'" :time="1"></gift-detail>
        <gift-detail :info="'盒内礼品'" :detail="'99件'"></gift-detail>
      </div>
      <div class="surplus-lucky">
        <gift-lucky></gift-lucky>
      </div>
      <div class="surplus-person">
        <router-link to="/recieve/confirm" tag="button">立即领取</router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import homeHeader from '../subcomponents/home_header'
  import giftStatus from '../subcomponents/gift_status'
  import giftDetail from '../subcomponents/gift_detail'
  import giftLucky from '../subcomponents/gift_lucky'
  import giftPerson from '../subcomponents/gift_person'
  export default {
    data() {
      return {};
    },
    methods: {
      home(){
        this.$router.push('/')
      }
    },
    components:{
      homeHeader,
      giftStatus,
      giftDetail,
      giftLucky,
      giftPerson
    }
  }
</script>
<style lang="scss" scoped>
  .surplus-container{
    padding: 0 .3rem;
    position: relative;
    .surplus-img{
      margin: .55rem 0 .4rem;
    }
    .surplus-info{
      border: 1px solid rgb(224,224,224);
      padding: .4rem .4rem 0;
    }
    .surplus-lucky{
      margin: .25rem 0 .62rem;
    }
    .surplus-person{
      padding: .83rem 0;
      button{
        width: 100%;
        height: .88rem;
        border: none;
        border-radius: .1rem;
        color: white;
        background: rgb(9,187,7);
      }
    }
  }
</style>
