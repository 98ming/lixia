<template>
    <div class="three-container">
      <img :src="this.$props.imgPath" alt="">
      <p class="info">{{this.$props.info}}</p>
      <p class="number">{{this.$props.number}}</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {};
        },
        methods: {},
      props:['imgPath','info','number']
    }
</script>
<style lang="scss">
  .three-container{
    text-align: center;
    font-weight: bold;
    color: #333;
    img{
      height: .65rem;
    }
    .info{
      margin: .29rem 0 .4rem;
      font-size: .3rem;
    }
    .number{
      font-size: .6rem;
    }
  }
</style>
