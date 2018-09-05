import Vue from 'vue'
import Router from 'vue-router'
import userCenter from 'views/user-center'
import collect from 'views/collect'
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
        // name: 'userCenter',
        component: userCenter,
        children: [
            {
                path: '/collect',
                name: 'collect',
                component: collect
            }
        ]
    }
]
export default new Router({
    routes
})
