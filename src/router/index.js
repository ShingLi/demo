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
        path: '/recharge',
        name: 'recharge',
        component: () => import('views/recharge'),
        children: [
            {
                path: ':id',
                name: 'recharge-detail',
                component: () => import('views/recharge/push-detail')
            }
        ]
    },
    {
        path: '/consume',
        name: 'consume',
        component: () => import('views/consume')
    }
]
export default new Router({
    routes
})
