import * as types from './mutation-types'
const mutations = {
    [types.SET_OPENID] (state, amount) {
        state.openid = amount.amount
    }
}
export default mutations
