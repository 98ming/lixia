<template>
    <div class="box-container">
        <div class="box-info">
          <span class="box-name">男神专属礼盒</span>
          <span class="box-status" v-if="this.$props.status == 1">
            <span class="yes">待发货</span>
          </span>
          <span class="box-status" v-if="this.$props.status == 0">
            <span class="no">已发货</span>
          </span>
          <span class="box-status" v-if="this.$props.status == 2">
            <span style="color: red">待领取</span>
          </span>
        </div>
        <div class="box-detail">
          <div class="box-img">
            <img src="../../assets/brush.png" alt="">
            <span>小米电动牙刷1支</span>
          </div>
          <span class="person">赠礼人:<span class="name">{{this.$props.name}}</span></span>
        </div>
        <div class="address" v-show="this.$props.address">
          <span>(未填地址)</span>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {};
        },
        methods: {},
      props:['status','name','address']
    }
</script>
<style lang="scss" scoped>
  .box-container{
    .address{
      position: absolute;
      right: 4.5%;
      top: 34%;
      span{
        color: #f7be11;
        font-size: .24rem;
      }
    }
    position: relative;
    border-radius: .1rem;
    border: 1px solid #ccc;
    padding: .3rem;
    padding-bottom: 0.05rem;
    margin-bottom: .2rem;
    .box-info{
      display: flex;
      justify-content: space-between;
      line-height: 100%;
      .box-name{
        font-size: .3rem;
        color: #333;
        font-weight: bold;
      }
      .box-status{
        font-size: .24rem;
        .yes{
          color: rgb(247,190,17);
        }
        .no{
          color: rgb(105,190,73);
        }
      }
    }
    .box-detail{
      display: flex;
      justify-content: space-between;
      margin: .5rem 0;
      line-height: 100%;
      .box-img{
        img{
          width: .66rem;
        }
        span{
          display: inline-block;
          margin-left: .17rem;
          color: #333;
          font-size: .24rem;
        }
      }
      .person{
        font-size: .24rem;
        color: #333;
        margin: auto 0;
        .name{
          font-weight: bold;
        }
      }
    }
  }
</style>
