<template>
    <div class="box-container">
        <div class="box-info">
          <span class="box-name">女神专属礼盒</span>
          <span class="box-status" v-if="this.$props.status">
            <span class="yes">可领取</span>（0/1）
          </span>
          <span class="box-status" v-else="this.$props.status">
            <span class="no">已领取</span>（32/32）
          </span>
        </div>
        <div class="box-detail">
          <span class="price">￥{{this.$props.price}}</span>
          <span class="person">收礼人:<span class="name">{{this.$props.name}}</span></span>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {};
        },
        methods: {},
      props:['price','status','name']
    }
</script>
<style lang="scss" scoped>
  .box-container{
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
      .price{
        font-size: .42rem;
        font-weight: bold;
        color: #333;
      }
      .person{
        font-size: .24rem;
        color: #333;
        .name{
          font-weight: bold;
        }
      }
    }
  }
</style>
