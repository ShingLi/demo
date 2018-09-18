<template>
    <transition name='slide' mode='out-in'>
        <div class="pwd-wrapper">
            <v-header title='添加子账户'
                text='返回'
                @back='back'
                bg='agent'
            >
                <i class="iconfont icon-jiantouzuo" slot='back'></i>
            </v-header>
            <!-- 表单 -->
            <form @submit.prevent='submit'>
                <van-cell-group style='margin-top:2rem;'>
                    <van-field
                        v-model.trim="form.name"
                        required
                        clearable
                        type='text'
                        label="姓名"
                        placeholder="请输入用户姓名"
                    />
                    <van-field
                        v-model.trim.number="form.tel"
                        type="tel"
                        label="手机号"
                        clearable
                        placeholder="请输入手机号码"
                        required
                    />
                    <van-field
                        v-model.trim="form.email"
                        required
                        clearable
                        type="email"
                        label="邮箱"
                        placeholder="请输入邮箱"
                    />
                    <van-field
                        v-model.trim="form.address"
                        type="textarea"
                        label="联系地址"
                        placeholder="请输入联系地址"
                        required
                        rows="1"
                        autosize
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
    </transition>
</template>
<script>
    import vHeader from 'components/header'
    import { Field, CellGroup, Button, Toast } from 'vant'
    export default {
        name: 'addSubAccount',
        data () {
            return {
                loading: false,
                form: {

                }
            }
        },
        components: {
            vHeader,
            vanField: Field,
            vanCellGroup: CellGroup,
            vanButton: Button
        },
        methods: {
            back () {
                this.$router.go(-1)
            },
            submit () {
                let { name, tel, email, address } = this.form
                let regTel = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
                let regEmail = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
                if (name && tel && email && address) {
                    if (!regTel.test(tel)) {
                        Toast('手机号码格式不正确')
                        return false
                    }
                    if (!regEmail.test(email)) {
                        Toast('邮箱格式不正确')
                        return false
                    }
                    this._postFromData()
                    return false
                }
                Toast('请完整填写')
                // this._postFromData()
            },
            _postFromData () {
                Toast('请注意查收邮件')
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '~styles/variables.scss';
    .pwd{
        &-wrapper{
            @include fixed;
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
</style>
