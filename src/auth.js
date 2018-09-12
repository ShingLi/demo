import router from './router'

router.beforeEach((to, from, next) => {
    // alert(window.location.search)s
    // window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx24c2235d907ea274&redirect_uri=http://test.whxueying.com/weixinPage/getUser.action&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect'
    // if (window.location.search !== '') {
    //     console.log(window.location.search)
    //     next()
    // } else {
    //     alert(1)
    //     window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx24c2235d907ea274&redirect_uri=http://test.whxueying.com/weixinPage/getUser.action&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect'
    // }
    next()
})
