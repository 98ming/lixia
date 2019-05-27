<template>
    <div class="evel-container">
        <div class="info">
          <img :src="this.$props.evel" alt="">
          <h1>{{this.$props.price}}元</h1>
          <p>(价值{{this.$props.value1}}-{{this.$props.value2}}元)</p>
          <img :src="this.$props.vip" class="abs">
        </div>
        <div class="select" v-if="num==0">
          <img src="../../assets/icon_+.png" alt="" @click="add">
        </div>
      <div class="select-two" v-else="num==0">
        <img src="../../assets/icon_-.png" alt="" @click="decrease">
        <span>{{num}}</span>
        <img src="../../assets/icon_+.png" alt="" @click="add">
      </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
              num : 0
            };
        },
        methods: {
          add(){
            this.num++;
          },
          decrease(){
            this.num--;
          }
        },
      props:['evel','vip','price','value1','value2'],
      watch:{
          num(val,cur){
            this.$emit('change',{num:val - cur,price:(val - cur) * this.$props.price})
          }
      }
    }
</script>
<style lang="scss" scoped>
  @media screen and (min-width: 321px){
    .evel-container{
      width: 3rem;
    }
  }
  @media screen and (max-width: 321px){
    .evel-container{
      width: 6rem;
    }
  }
  .evel-container{
    box-shadow: 0 0 5px #ccc;
    border-radius: 2%;
    margin-bottom: .3rem;
    .info{
      position: relative;
      padding: .3rem .3rem .2rem;
      img{
        height: .28rem;
      }
      h1{
        font-size: .48rem;
        font-weight: bold;
        color: #656565;
        padding: .2rem 0;
      }
      p{
        font-size: .2rem;
        font-weight: lighter;
        color: #878787;
      }
      .abs{
        position: absolute;
        height: .5rem;
        top: .3rem;
        right: .3rem;
      }
    }
    .select{
      text-align: center;
      padding: .28rem 0;
      border-top: 0.01rem solid #ccc;
      img{
        width: .32rem;
      }
    }
    .select-two{
      border-top: 0.01rem solid #ccc;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: .28rem .48rem;
      img{
        width: .32rem;
      }
    }
  }
</style>
