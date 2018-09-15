import axios from 'axios'
import qs from 'qs'
import {
    Toast
} from 'vant'

let cancel = {}
let promiseArr = {}
const CancelToken = axios.CancelToken
axios.interceptors.request.use(config => {
    if (promiseArr[config.url]) {
        promiseArr[config.url]('操作取消')
        promiseArr[config.url] = cancel
    } else {
        promiseArr[config.url] = cancel
    }
}, error => {
    return Promise.reject(error)
})

axios.interceptors.response.use(response => {
    return response
}, error => {
    if (error && error.response) {
        switch (error.response.normal) {
        case 404:
            Toast.fail('请重新授权')
        }
    }
    return Promise.resolve(error.response)
})

axios.defaults.baseURL = '/api/'
axios.defaults.headers = {
    'X-Requested-With': 'XMLHttpRequest'
}
axios.defaults.timeout = 10000

export default {
    // get请求
    get (url, param) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url,
                params: param,
                cancelToken: new CancelToken(c => {
                    cancel = c
                })
            }).then(res => {
                resolve(res)
            })
        })
    },
    // post请求
    post (url, data) {
        console.log(url)
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url,
                data: qs.stringify(data)
                // cancelToken: new CancelToken(c => {
                //     cancel = c
                // })
            }).then(res => {
                resolve(res)
            })
        })
    }
}
