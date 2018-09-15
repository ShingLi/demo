import axios from 'axios'
import qs from 'qs'
export function postQuery (query) {
    let data = {
        code: query
    }
    return axios({
        method: 'post',
        url: '/api/weixinPage/wxUserInfo.action',
        header: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        data: qs.stringify(data)
    }).then(res => {
        return Promise.resolve(res.data)
    }).catch(err => {
        console.log(err)
    })
}
