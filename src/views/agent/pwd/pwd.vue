<template>
    <transition name='slide' mode='out-in'>
        <div class="pwd-wrapper">
            <v-header title='修改密码'
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
                        v-model.trim.number="form.oldPwd"
                        required
                        clearable
                        type='number'
                        label="原密码"
                        placeholder="请输入原密码"
                    />

                    <van-field
                        v-if='!show'
                        v-model.trim="form.newPwd"
                        type="password"
                        label="新密码"
                        placeholder="请输入新密码"
                        required
                        icon='password-not-view'
                        @click-icon="isShow"
                    />
                    <van-field
                        v-else
                        v-model.trim.number="form.newPwd"
                        type="number"
                        label="新密码"
                        placeholder="请输入新密码"
                        required
                        icon='password-view'
                        @click-icon="isShow"
                    />
                </van-cell-group>
                <van-cell-group style='background:transparent' class="btn">
                    <van-button size="large"
                        class="z"
                        :loading='loading'
                        type="primary"
                    >提交</van-button>
                </van-cell-group>
            </form>
        </div>
    </transition>
</template>
<script>
    import vHeader from 'components/header'
    import { Field, CellGroup, Button, Toast } from 'vant'
    export default {
        name: 'pwd',
        data () {
            return {
                loading: false,
                show: 0,
                form: {
                    oldPwd: '',
                    newPwd: ''
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
            isShow () {
                this.show = !this.show
            },
            submit () {
                let { oldPwd, newPwd } = this.form
                let reg = /^\d{6}$/
                if (oldPwd.toString().length === 0 || newPwd.toString().length === 0) {
                    Toast('密码不能为空')
                    return false
                }
                if (!reg.test(newPwd)) {
                    Toast('密码为6为数字')
                }
                this._postFromData()
            },
            _postFromData () {
                Toast('1')
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
