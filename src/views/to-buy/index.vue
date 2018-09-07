<template>
    <transition name='slide' mode='out-in'>
        <div class="tobuy">
            <v-header title='我要购买' text='返回' @back='back'>
                <i class="iconfont icon-jiantouzuo" slot='back'></i>
            </v-header>
            <!--  -->
            <form @submit.prevent='submit'>
                <van-cell-group style='background:transparent'>
                    <van-cell title="请输入您的联系方式" style='background:transparent'></van-cell>
                </van-cell-group>
                <van-cell-group>
                    <van-cell icon="phone">
                        <input type="number"
                            placeholder="请输入您的手机号"
                            v-model.number.trim='buyinfo.tel'
                        >
                    </van-cell>
                </van-cell-group>
                <van-cell-group style='background:transparent'>
                    <van-cell title="备注" style='background:transparent'></van-cell>
                </van-cell-group>
                <!-- 文本域 -->
                <van-cell-group>
                    <van-cell>
                        <textarea rows="8" class="other"
                            maxlength="300"
                            placeholder='请输入您的购买需求并提交，我们将在3个工作日内与您取得联系，请保持手机畅通，感谢您的支持~'
                            v-model='buyinfo.content'
                        ></textarea>
                    </van-cell>
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
    import { Button, Toast, Cell, CellGroup } from 'vant'
    export default {
        name: 'to-buy',
        data () {
            return {
                loading: false,
                buyinfo: {
                    tel: '',
                    content: ''
                }
            }
        },
        components: {
            vHeader,
            vanButton: Button,
            vanCellGroup: CellGroup,
            vanCell: Cell
        },
        methods: {
            back () {
                this.$router.go(-1)
            },
            submit () {
                let { tel, content } = this.buyinfo
                let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
                if (tel.toString().length === 11) {
                    if (!reg.test(tel)) {
                        Toast('请输入正确手机号')
                        return
                    }
                } else {
                    Toast('手机号为11位数字')
                    return
                }
                if (content.length <= 0) {
                    Toast('请填写问题描述')
                    return false
                }
                this._postBuy()
            },
            _postBuy () {
                this.loading = true
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '~styles/variables.scss';
    .tobuy{
        @include fixed;
        .other{
            width: 92%;
            margin-left: 4%;
            padding: 4%;
            border: none;
            color: #333;
            font-size: .6rem;
        }
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
</style>
