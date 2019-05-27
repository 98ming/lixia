<template>
    <div>
      <div class="title">
        <p>礼吓</p>
      </div>
      <div class="logo">
        <img src="../assets/home_banner.png">
      </div>
      <div class="gift-container">
        <router-link to="/order"><img :src="require('../assets/girl.png')" alt=""></router-link>
        <router-link to="/order"><img src="../assets/home_seg.png" alt=""></router-link>
        <router-link to="/order"><img src="../assets/home_pic_tip1.png" alt=""></router-link>
        <router-link to="/order"><img src="../assets/home_pic_tip2.png" alt=""></router-link>
        <router-link to="/order"><img src="../assets/home_pic_tip3.png" alt=""></router-link>
        <router-link to="/order"><img src="../assets/home_pic_tip4.png" alt=""></router-link>
        <router-link to="/order"><img src="../assets/home_pic_tip5.png" alt=""></router-link>
        <router-link to="/order"><img src="../assets/home_pic_tip6.png" alt=""></router-link>
        <router-link to="/order"><img src="../assets/home_pic_tip7.png" alt=""></router-link>
        <router-link to="/order"><img src="../assets/home_pic_tip8.png" alt=""></router-link>
        <router-link to="/order"><img src="../assets/home_pic_tip9.png" alt=""></router-link>
        <router-link to="/order"><img src="../assets/home_pic_tip10.png" alt=""></router-link>
        <div class="router-link">
          <router-link to="/recieve" tag="span">我收到的</router-link>
          <span>|</span>
          <router-link to="/give" tag="span">我赠送的</router-link>
        </div>
      </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {};
        },
        methods: {},
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
  .logo{
    width: 100%;
    img{
      width: 100%;
    }
  }
  .gift-container{
    padding: .6rem .3rem;
    img{
      width: 100%;
      margin-bottom: .5rem;
    }
    .router-link{
      padding-top: .4rem;
      padding-bottom: .17rem;
      padding-left: 1.37rem;
      padding-right: 1.37rem;
      display: flex;
      justify-content: space-between;
      span{
        /*flex: 1;*/
        font-size: .28rem;
        font-weight: bold;
        color: #444444;
      }
    }
  }
</style>
