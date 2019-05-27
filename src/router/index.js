import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index.vue'
import order from '../components/order/orderIndex'
import give from '../components/give/giveIndex'
import recieve from '../components/recieve/recieveIndex'
import giveSurplus from '../components/give/give_surplus'
import giveOver from '../components/give/give_over'
import orderPrepare from '../components/order/order_prepare'
import orderSucc from '../components/order/order_succ'
import recieveAllow from '../components/recieve/recieve_allow'
import recieveOver from '../components/recieve/recieve_over'
import recieveRepeat from '../components/recieve/recieve_repeat'
import recieveConfirm from '../components/recieve/gift_confirm'
import recieveSucc from '../components/recieve/recieve_succ'
import aboutUS from '../components/aboutUs'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'index', component: index},
    {path:'/order',component:order},
    {path:'/give',component:give},
    {path:'/recieve',component:recieve},
    {path:'/give/surplus',component:giveSurplus,name:'surplus'},
    {path:'/give/over',component:giveOver,name:'over'},
    {path:'/order/prepare',component:orderPrepare,name:'prepare'},
    {path:'/order/succ',component:orderSucc,name:'succ'},
    {path:'/recieve/over',component:recieveOver},
    {path:'/recieve/repeat',component:recieveRepeat},
    {path:'/recieve/allow',component:recieveAllow},
    {path:'/recieve/confirm',component:recieveConfirm},
    {path:'/recieve/succ',component:recieveSucc},
    {path:'/about',component:aboutUS}

  ]
})
