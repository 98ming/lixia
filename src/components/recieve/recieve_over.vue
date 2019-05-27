<template>
  <div>
    <div class="title">
      <p>礼吓</p>
    </div>
    <div class="surplus-container">
      <div class="surplus-img">
        <gift-status :img="'./static/img/gift_back_opacity.png'" :info="'./static/img/pic_wanle.png'" :status="0" :detail="1"></gift-status>
      </div>
      <div class="surplus-info">
        <gift-detail :info="'赠礼好友'" :detail="'拉布丶'" :touxiang="'./static/img/gift_back.png'"></gift-detail>
        <gift-detail :info="'赠礼时间'" :detail="'2018-01-05 23:59'" :time="1"></gift-detail>
        <gift-detail :info="'盒内礼品'" :detail="'99件'"></gift-detail>
        <gift-detail :info="'礼品总价值'" :detail="'30000元'"></gift-detail>
      </div>
      <div class="surplus-lucky">
        <gift-lucky></gift-lucky>
      </div>
      <div class="home" @click="home">
        <img src="../../assets/button_home.png" alt="">
      </div>
    </div>
    <div class="surplus-person">
      <gift-person :status="0"></gift-person>
    </div>
  </div>
</template>
<script>
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
      giftStatus,
      giftDetail,
      giftLucky,
      giftPerson
    }
  }
</script>
<style lang="scss" scoped>
  .title{
    /*height: 80px;*/
    text-align: center;
    p{
      display: inline-block;
      font-size: .36rem;
      padding-top: .6rem;
      padding-bottom: .3rem;
      font-weight: bold;
    }
  }
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
    .home{
      position: absolute;
      top: 30%;
      right: 0;
      border-top-left-radius: 50%;
      border-bottom-left-radius: 50%;
      box-shadow: 0 0 5px #ccc;
      img{
        width: 1.66rem;
      }
    }
    .surplus-person{
    }
  }
</style>
