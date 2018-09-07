import Vue from 'vue'
import Router from 'vue-router'
import userCenter from 'views/user-center'
Vue.use(Router)

const routes = [
    {
        path: '/',
        redirect: {
            path: 'userCenter'
        }
    },
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
        path: '/feedback',
        name: 'feedback',
        component: () => import('views/feedback')
    },
    {
        path: '/tobuy',
        name: 'tobuy',
        component: () => import('views/to-buy')
    }
]
export default new Router({
    routes
})
