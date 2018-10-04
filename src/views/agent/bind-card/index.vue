<template>
    <transition name='slide' mode="out-in">
        <div class="agent-center">
            <v-header title='绑定银行卡'
                text='返回'
                @back='back'
                bg='agent'
            >
                <i class="iconfont icon-jiantouzuo" slot='back'></i>
            </v-header>
            <div class="cell-wrapper">
                <form @submit.prevent='submit'>
                        <van-cell-group>
                            <van-field
                                label='持卡人'
                                readonly
                                :value='form.username'
                            />
                            <van-field
                                label='卡号'
                                placeholder= '持卡人本人的中国工商银行卡号'
                                v-model.trim.number='form.cardId'
                            />
                        </van-cell-group>
                        <van-cell-group style='background:transparent' class="btn">
                            <van-button size="large"
                                class="z"
                                :loading='loading'
                                type="primary"
                        >添加</van-button>
                    </van-cell-group>
                </form>
            </div>
        </div>
    </transition>
</template>
<script>
    import vHeader from 'components/header'
    import { CellGroup, Field, Button, Toast } from 'vant'
    export default {
        name: 'bind-card',
        components: {
            vHeader,
            vanCellGroup: CellGroup,
            vanField: Field,
            vanButton: Button
        },
        data () {
            return {
                loading: false,
                form: {
                    username: '李成代理商',
                    cardId: ''
                }
            }
        },
        methods: {
            back () {
                this.$router.go(-1)
            },
            submit () {
                let { cardId } = this.form
                if (cardId.toString().length === 0) {
                    Toast('银行卡号不能为空！')
                    return false
                }
                this.loading = true
                this._postformData()
            },
            _postformData () {
                // axios
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '~styles/variables.scss';
    .agent-center{
        @include fixed;
        .cell{
            &-wrapper{
                margin-top:2rem;
                .btn{
                    position: fixed;
                    bottom: 5%;
                    left: 5%;
                    width: 90%;
                    .z{
                        color:$color-text;
                        // background: #32cfaa;
                    }
                }
            }
        }
    }
</style>
