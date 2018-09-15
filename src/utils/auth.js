import Cookies from 'js-cookie'

const key = 'openid-key'

export function getOpenId () {
    return Cookies.get(key)
}
export function setOpenId (openid) {
    return Cookies.set(key, openid)
}
