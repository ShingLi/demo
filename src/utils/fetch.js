
import axios from 'axios'
import qs from 'qs'
import Store from 'store'
import { Toast } from 'vant'
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = (process.env.NODE_ENV === 'development' ? '' : '')

axios.interceptors.request.use(
    (config) => {
        if (config.method === 'post' || config.method === 'put') {
            config.data = qs.parse(config.data, {arrayFormat: 'brackets'})
        }
        config.params = (
            Object.assign((config.params ? config.params : ''), {
                'openid': Store.state.openid
            })
        )
        return config
    },
    (error) => {
        Toast('非法输入')
        return Promise.reject(error)
    }
)
export default axios
