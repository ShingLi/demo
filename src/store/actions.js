import { postQuery } from 'api/login'
import { setOpenId } from 'utils/auth'
import { Toast } from 'vant'
export const getUserInfo = ({commit}, query) => {
    return new Promise((resolve, reject) => {
        postQuery(query).then(res => {
            console.log(res)
            let { normal, userInfo } = res
            let { openid } = userInfo
            if (normal === 1) {
                setOpenId(openid)
                commit('SET_USERINFO', userInfo)
            } else {
                Toast.fail('请重新授权')
            }
        })
    })
}
