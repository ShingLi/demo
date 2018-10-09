import Router from './router'
import Store from './store'

const appID = 'wx2dcb70b67b8b1b96'
const URL = encodeURIComponent('http://www.opjpg.com/WX/index.php/san/index/shouquan')

Router.beforeEach((to, from, next) => {
    if (Store.state.openid) {
        next()
    } else {
        window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appID}&redirect_uri=${URL}&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect`
    }
})
