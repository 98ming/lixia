<template>
    <div class="container">
      <img src="../assets/aboutUs.png" alt="">
      <div class="router-link">
        <router-link to="/">GO</router-link>
      </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {};
        },
        methods: {}
    }
</script>
<style lang="scss" scoped>
  .container{
    position: relative;
    img{
      width: 100%;
    }
    .router-link{
      position: absolute;
      width: 100%;
      height: 1.3rem;
      bottom: 2.5%;
      a{
        display: block;
        width: 100%;
        height: 100%;
        text-indent: -9999px;
      }
    }
  }
</style>
