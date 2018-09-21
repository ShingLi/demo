// import router from './router'
// import Store from './store'

// import {
//     getOpenId
// } from 'utils/auth'

// router.beforeEach((to, from, next) => {
//     const token = window.localStorage.getItem('user_token')
//     if (token) {
//         if (to.path === '/author') {
//             next({
//                 path: '/'
//             })
//         } else {
//             // 拉取用户信息
//         }
//     } else {
//         if (to.path !== '/author') {
//             window.localStorage.setItem('authUrl', to.fullPath)
//             // 调用后端的接口获取后端跳转授权的地址
//         } else {
//             next()
//         }
//     }
// })
