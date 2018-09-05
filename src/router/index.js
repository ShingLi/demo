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
        component: () => import('views/message')
    }
]
export default new Router({
    routes
})
