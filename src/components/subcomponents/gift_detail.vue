<template>
        <div class="detail-flex">
          <span>{{this.$props.info}}</span>
          <div style="display: flex">
            <div class="touxiang" v-if="this.$props.touxiang">
              <img :src="this.$props.touxiang" alt="">
            </div>
            <span class="time" v-if="this.$props.time">{{this.$props.detail}}</span>
            <span v-else="this.$props.time">{{this.$props.detail}}</span>
          </div>
        </div>
</template>
<script>
    export default {
        data() {
            return {};
        },
        methods: {},
      props:['info','detail','time','touxiang']
    }
</script>
<style lang="scss">
    .detail-flex{
      display: flex;
      justify-content: space-between;
      margin-bottom: .4rem;
      span{
        font-size: .28rem;
        line-height: .42rem;
        color: #656565;
      }
      .time{
        font-size: .28rem;
        line-height: .42rem;
        color: #888;
        font-weight: lighter;
      }
      .touxiang{
        width: .38rem;
        height: .38rem;
        border-radius: .19rem;
        border: 1px solid #ccc;
        text-align: center;
        margin-right: .26rem;
        img{
          height: .29rem;
        }
      }
    }
</style>
