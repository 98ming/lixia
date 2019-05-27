<template>
  <div>
    <home-header :info="'我送出的'"></home-header>
    <div class="surplus-container">
      <div class="surplus-img">
        <gift-status :img="'./static/img/gift_back_opacity.png'" :info="'./static/img/pic_yilingwan.png'" :status="0" :detail="1"></gift-status>
      </div>
      <div class="surplus-info">
        <gift-detail :info="'赠礼时间'" :detail="'2018-01-05 23:59'" :time="1"></gift-detail>
        <gift-detail :info="'盒内礼品'" :detail="'99件'"></gift-detail>
        <gift-detail :info="'礼盒价值'" :detail="'3200元'"></gift-detail>
      </div>
      <div class="surplus-lucky">
        <gift-lucky></gift-lucky>
      </div>
    </div>
    <div class="surplus-person">
      <gift-person :status="0"></gift-person>
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
    methods: {},
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

    }
  }
</style>
