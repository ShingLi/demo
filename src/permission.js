// import router from './router'
// import Store from './store'
// import axios from 'axios'
// import qs from 'qs'
// import {
//     getOpenId
// } from 'utils/auth'

// router.beforeEach((to, from, next) => {
//     if (getOpenId()) {
//         next()
//     } else {
//         let query = window.location.search
//         if (query.includes('?code=')) {
//             Store.dispatch('getUserInfo', query).then()
//             next()
//         } else {
//             let data = {
//                 url: encodeURIComponent(window.location.href.split('#')[0])
//             }
//             axios({
//                 method: 'post',
//                 url: 'test.whxueying.com/weixinPage/authority.action',
//                 header: {
//                     'content-type': 'application/x-www-form-urlencoded'
//                 },
//                 data: qs.stringify(data)
//             }).then(res => {
//                 console.log(res)
//             })
//         }
//     }
// })
