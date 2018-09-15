import * as types from './mutations-type'
const mutations = {
    [types.SET_USERINFO] (state, userinfo) {
        state.userinfo = userinfo
    }
}
export default mutations
