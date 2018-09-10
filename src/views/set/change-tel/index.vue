<template>
    <transition name="slide" mode='out-in'>
        <div class="bind-tel">
            <v-header title='绑定手机号' text='返回' @back='back'>
                <i class="iconfont icon-jiantouzuo" slot='back'></i>
            </v-header>
            <form @submit.prevent='submit'>
                <div class="featuers">
                    <van-cell-group>
                        <van-cell>
                            <div>
                                <label for=""> +86</label>
                                <input type="number"
                                    placeholder="请输入手机号码"
                                    v-model.trim="info.tel"
                                    maxlength="11"
                                >
                            </div>
                        </van-cell>
                    </van-cell-group>
                    <van-cell-group>
                        <van-cell>
                            <div class="code-wrapper">
                                <input type="number"
                                    placeholder="请输入验证码"
                                    v-model.trim='info.code'
                                >
                                <a class="code" @click='getCode' :disabled='isOvertime'>{{text}}</a>
                            </div>
                        </van-cell>
                    </van-cell-group>
                </div>
                <van-button type='primary' class="btn" :loading='loading' :disabled='disabled'>绑定手机号</van-button>
            </form>
        </div>
    </transition>
</template>
<script>
    import vHeader from 'components/header'
    import { Cell, CellGroup, Button, Toast } from 'vant'
    export default {
        name: 'change-tel',
        data () {
            return {
                loading: false,
                disabled: true,
                isOvertime: false,
                text: '获取验证码',
                info: {
                    tel: '',
                    code: ''
                }
            }
        },
        components: {
            vHeader,
            vanCell: Cell,
            vanCellGroup: CellGroup,
            vanButton: Button
        },
        methods: {
            back () {
                this.$router.go(-1)
            },
            getCode () {
                let { tel } = this.info
                let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
                if (Number(tel.length) === 11) {
                    if (!reg.test(tel)) {
                        Toast('请输入正确的手机号')
                    } else {
                        this._getCode(tel)
                    }
                } else {
                    Toast('手机号11位哦··')
                    return false
                }
            },
            _getCode (tel) {
                console.log(tel)
                if (this.isOvertime) {
                    return false
                }
                let that = this
                var time = 60
                var sendTimer = setInterval(function () {
                    that.isOvertime = true
                    time--
                    that.text = `${time}S`
                    if (time < 0) {
                        that.isOvertime = false
                        clearInterval(sendTimer)
                        that.text = '获取验证码'
                    }
                }, 1000)
                // axios 发送到后台获取验证码
            },
            submit () {
            }
        },
        watch: {
            'info.code' (newV, oldV) {
                console.log(newV.length)
                if (newV.length === 6) {
                    this.disabled = false
                } else {
                    this.disabled = true
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '~styles/variables.scss';
    .bind-tel{
        @include fixed;
        .featuers{
             padding-top: 1rem;
            .code-wrapper{
                display: flex;
                justify-content: space-between;
                .code{
                    width: 4.5rem;
                    text-align: center;
                    border-radius: 1.5rem;
                    font-size: .6rem;
                    line-height: 1.5rem;
                    // margin-top: 1rem;
                    margin-left: 2rem;
                    color:$color-text;
                    background-color: #e1523f
                }
            }
        }
        .btn{
            position: fixed;
            bottom: 5%;
            left: 5%;
            width: 90%;
        }
    }
</style>
