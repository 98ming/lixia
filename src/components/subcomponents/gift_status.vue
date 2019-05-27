<template>
    <div class="gift-container">
      <div class="circle" v-if="!this.$props.circle">
        <img :src="this.$props.info" alt="" v-if="this.$props.row" class="row">
        <img :src="this.$props.info" alt="" v-else="this.$props.row">
      </div>
      <img :src="this.$props.img" alt="">
      <p class="box" v-if="this.$props.status">年会系列礼盒</p>
      <p class="box-inverse" v-else="this.$props.status">年会系列礼盒</p>
      <div v-if="this.$props.detail">
        <p class="bless" v-if="this.$props.status">祝大家新春快乐</p>
        <p class="bless-inverse" v-else="this.$props.status">祝大家新春快乐</p>
      </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {};
        },
        methods: {},
      props:['img','info','status','detail','row','circle']
    }
</script>
<style lang="scss" scoped>
  .gift-container{
    text-align: center;
    position: relative;
    img{
      height: 2.95rem;
    }
    .box{
      font-size: .3rem;
      color: #333;
      margin-top: .3rem;
      font-weight: bold;
    }
    .box-inverse{
      font-size: .3rem;
      color: rgb(193,193,193);
      margin-top: .3rem;
      font-weight: bold;
    }
    .bless-inverse{
      margin-top: .3rem;
      font-size: .36rem;
      color: rgb(215,215,215);
    }
    .bless{
      margin-top: .3rem;
      font-size: .36rem;
      color: #333;
    }
    .circle{
      position: absolute;
      width: 2rem;
      height: 2rem;
      border-radius: 1rem;
      top: 0;
      bottom: .6rem;
      right: 0;
      left: 0;
      margin: auto;
      background-color: rgba(0,0,0,0.5);
     img{
       height: .37rem;
       margin: .8rem 0;
     }
      .row{
        height: .96rem;
        margin: .5rem 0;
      }
    }
  }
</style>
