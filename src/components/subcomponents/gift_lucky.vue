<template>
    <div class="lucky-container">
        <span>礼品可能升级为幸运礼品</span>
        <span>本期幸运礼品：<span class="iphone">iphoneX</span></span>
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
<style lang="scss">
  .lucky-container{
    display: flex;
    justify-content: space-between;
    span{
      font-size: .22rem;
      line-height: .42rem;
      color: #878787;
      .iphone{
        color: rgb(247,190,17);
      }
    }
  }
</style>
