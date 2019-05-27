<template>
    <div id="confirm-container">
      <home-header :info="'我的礼品'"></home-header>
      <div class="confirm-container">
        <div class="confirm-gift">
          <img src="../../assets/recieve_gift.png" alt="">
          <p>获得小米电动牙刷*1</p>
        </div>
        <div class="confirm-info">
          <div class="info-header">
            <p>收货信息</p>
            <span>绝不向任何人透露，赠礼好友也不知道</span>
          </div>
          <div class="info-input">
            <ul>
              <li>
                <span class="detail">联系人</span>
                <span><input type="text" v-model="name"/></span>
              </li>
              <li>
                <span class="detail">手机号</span>
                <span><input type="text" v-model="tel"/></span>
              </li>
              <li>
                <span class="detail">选择地区</span>
                <!--<span class="time">{{cityActive}}</span>-->
                <el-select v-model="cityActive" placeholder="请选择">
                  <el-option
                    v-for="item in cities"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    <span style="float: left">{{ item.label }}</span>
                    <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
                  </el-option>
                </el-select>
                <!--<img src="../../assets/icon_select.png" alt="" @click="selectCity">-->
              </li>
              <li>
                <span class="detail">详细地址</span>
                <span><input type="text" v-model="address"/></span>
              </li>
            </ul>
          </div>
          <div class="confirm-submit">
            <p>*填写收货信息后1个工作日内发出</p>
            <div class="submit-button">
              <button @click="confirmSubmir">确认</button>
            </div>
          </div>
        </div>
      </div>
      <div class="No-name">
        <transition>
          <div class="men" v-if="show">
            <div class="confirmInfo">
              <div class="info-header">
                <p>核对信息</p>
              </div>
              <div class="info-body">
                <ul>
                  <li>
                    <span class="detail">联系人</span>
                    <span>{{name}}</span>
                  </li>
                  <li>
                    <span class="detail">手机号</span>
                    <span>{{tel}}</span>
                  </li>
                  <li style="margin: 0">
                    <span class="detail">收货地址</span>
                    <span>{{cityActive}}</span>
                  </li>
                  <li style="margin: 0">
                    <span>{{address}}</span>
                  </li>
                </ul>
              </div>
              <div class="info-button">
                <a href="" @click.prevent="quxiao">取消</a>
                <router-link to="/recieve/succ" class="confirm">确认</router-link>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
</template>
<script>
  import homeHeader from '../subcomponents/home_header'
    export default {
        data() {
            return {
              name:'拉布丶',
              tel:'15938833799',
              address:'学院路3号中北大学',
              cityActive:'',
              show:false,
              cities: [{
                value: 'Beijing',
                label: '北京'
              }, {
                value: 'Shanghai',
                label: '上海'
              }, {
                value: 'Nanjing',
                label: '南京'
              }, {
                value: 'Chengdu',
                label: '成都'
              }, {
                value: 'Shenzhen',
                label: '深圳'
              }, {
                value: 'Guangzhou',
                label: '广州'
              }],
            };
        },
        methods: {
          selectCity(){

          },
          confirmSubmir(){
            this.show = true
          },
          quxiao(){
            this.show = false
          }
        },
      components: {
          homeHeader
      }
    }
</script>
<style lang="scss">
  .No-name{
    .v-enter{
      opacity: 0;
      transform: translateY(100%);
    }
    .v-leave-to{
      opacity: 0;
      transform: translateY(-100%);
      position: absolute;
    }
    .v-enter-active,.v-leave-active{
      transition: all 0.5s ease;
    }
    .men{
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background: rgba(0,0,0,0.33);
      padding: 3.67rem 1.35rem 0;
      .confirmInfo{
        background: white;
        border-radius: .1rem;
        .info-button{
          display: flex;
          justify-content: space-between;
          border-top: 1px solid #ccc;
          padding: .3rem .9rem;
          a{
            font-size: .3rem;
            color: #878787;
          }
          .confirm{
            color: #09bb07;
          }
        }
        .info-body{
          margin-bottom: 1.17rem;
          ul{
            padding: 0 .5rem;
            li{
              margin-bottom: .37rem;
              span{
                font-size: .28rem;
                color: #656565;
              }
              .detail{
                display: inline-block;
                width: 1.3rem;
              }
            }
          }
        }
        .info-header{
          text-align: center;
          padding: .44rem 0 .84rem;
        }
      }
    }
  }
  .confirm-container{
    .confirm-gift{
      text-align: center;
      padding-top: .32rem;
      img{
        height: 3.6rem;
      }
      p{
        font-size: .3rem;
        color: #333;
        padding: .29rem 0 .4rem;
      }
    }
    .confirm-info{
      .info-header{
        display: flex;
        justify-content: space-between;
        background: rgb(248,248,248);
        padding: 0 .6rem;
        p{
          color: #656565;
          font-size: .24rem;
          line-height: .42rem;
        }
        span{
          color: #878787;
          font-size: .22rem;
          line-height: .42rem;
        }
      }
      .info-input{
        ul{
          width: 100%;
          li{
            border-bottom: 1px solid #ccc;
            padding: .4rem  .6rem .24rem;
            display: flex;
            justify-content: space-around;
            .el-select{
              .el-input--suffix .el-input__inner{
                border: none;
                outline: none;
                padding-right: 0!important;
                height: auto;
                line-height: normal;
              }
              .el-input__suffix{
                top:-12px;
                height: auto;
              }
            }
            span{
              /*display: inline-block;*/
              font-size: .28rem;
              color: #656565;
              input{
                border: none;
                font-size: .28rem;
                color: #656565;
                width: 70%;
              }
              input:focus{
                border: none;
                outline: none;
              }
            }
            .detail{
              display: inline-block;
              width: 1.8rem;
            }
          }
        }
      }
      .confirm-submit{
        text-align: center;
        p{
          padding: .9rem 0 .24rem;
          color: #878787;
          font-size: .22rem;
        }
        .submit-button{
          padding: 0 .3rem;
          button{
            width: 100%;
            height: .88rem;
            border: none;
            border-radius: .1rem;
            color: white;
            background: rgb(9,187,7);
          }
        }
      }
    }
  }
</style>
