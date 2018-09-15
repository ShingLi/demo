// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Meta from 'vue-meta'

import 'styles/index.scss'
import 'assets/js/rem'

import './permission'

import BaiduMap from 'vue-baidu-map'
import store from './store'

Vue.use(BaiduMap, {
    ak: 'Hl8SX8eBfsE5rebWCszbU0m4D5qWYlVV'
})
Vue.use(Meta)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
