import Vue from 'vue'
import Router from 'vue-router'

import index from 'views/r/router'

import userCenter from 'views/user-center'
import about from 'views/about/router'
import coupon from 'views/coupon/router'
import set from 'views/set/router'
import help from 'views/help/router'
import charge from 'views/charge/router'
import pay from 'views/pay/router'
import carbarn from 'views/carbarn/router'
import carwash from 'views/carwash/router'
import installEquipment from 'views/install-equipment/router'
import order from 'views/order/router'
import bindcarbarn from 'views/bind-carbarn/router'
// 代理商

import agent from 'views/agent/router'
Vue.use(Router)

const routes = [
    ...index,
    {
        path: '/balance',
        name: 'balance',
        component: () => import('views/balance')
    },
    {
        path: '/recharge',
        name: 'recharge',
        component: () => import('views/recharge')
    },
    // 功能模块路由
    {
        path: '/userCenter',
        name: 'userCenter',
        component: userCenter
    },
    {
        path: '/collect',
        name: 'collect',
        component: () => import('views/collect')
    },
    {
        path: '/message',
        name: 'message',
        component: () => import('views/message'),
        children: [
            {
                path: ':id',
                name: 'msg-detail',
                component: () => import('views/message/msg-detail')
            }
        ]
    },
    {
        path: '/recharge-record',
        name: 'recharge-record',
        component: () => import('views/recharge-record'),
        children: [
            {
                path: ':id',
                name: 'recharge-detail',
                component: () => import('views/recharge-record/push-detail')
            }
        ]
    },
    {
        path: '/consume-record',
        name: 'consume-record',
        component: () => import('views/consume-record')
    },
    {
        path: '/repair',
        name: 'repair',
        component: () => import('views/repair')
    },
    {
        path: '/tobuy',
        name: 'tobuy',
        component: () => import('views/to-buy')
    },
    {
        path: '/author',
        name: 'author',
        component: () => import('views/author/author')
    },
    coupon,
    help,
    ...about,
    ...set,
    ...charge,
    ...pay,
    ...carbarn,
    ...carwash,
    ...agent,
    ...installEquipment,
    ...order,
    ...bindcarbarn
]

export default new Router({
    routes
})
