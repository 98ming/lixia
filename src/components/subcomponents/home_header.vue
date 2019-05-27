<template>
  <div class="title">
    <p>{{this.$props.info}}</p>
    <img src="../../assets/icon_return.png" alt="" @click="goBack">
  </div>
</template>
<script>
    export default {
        data() {
            return {};
        },
        methods: {
          goBack(){
            this.$router.go(-1)
          }
        },
        props:['info']
    }
</script>
<style lang="scss" scoped>
  .title{
    /*height: 80px;*/
    text-align: center;
    position: relative;
    p{
      display: inline-block;
      font-size: .36rem;
      padding-top: .6rem;
      padding-bottom: .3rem;
      font-weight: bold;
    }
    img{
      position: absolute;
      left: .1rem;
      top: .6rem;
      height: .36rem;
    }
  }
</style>
