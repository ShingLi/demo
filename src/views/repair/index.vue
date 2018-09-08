<template>
    <transition name='slide' mode='out-in'>
        <div class="feedback-wrapper">
            <v-header title='故障报修' text='返回' @back='back'>
                <i class="iconfont icon-jiantouzuo" slot='back'></i>
            </v-header>
            <!-- 扫描二维码 -->
            <form @submit.prevent="submit">
                <div class="feedback-main">
                    <div class="num">
                        <input type="number"
                            placeholder= '扫描二维码或手动输入编号'
                            class="number"
                            v-model.number='feedback.sn'
                        >
                        <i class="iconfont icon-saoyisao" @click='scanQRCode'></i>
                    </div>
                    <tag icon='icon-icon-' text='报修类型'></tag>
                    <ul>
                        <li v-for='(n,index) in 4' :key='index'>其他</li>
                    </ul>
                    <textarea rows="8" class="other" maxlength="200"
                        placeholder='其他报修问题描述'
                        v-model='feedback.content'
                    ></textarea>
                </div>
                <div class='btn'>
                    <van-button size="large" class="z" :loading='loading' type="primary">提交</van-button>
                </div>
            </form>
        </div>
    </transition>
</template>
<script>
    import vHeader from 'components/header'
    import tag from 'components/tag'
    import { Button, Toast } from 'vant'
    export default {
        name: 'repair',
        data () {
            return {
                loading: false,
                feedback: {
                    sn: '',
                    content: ''
                }
            }
        },
        components: {
            vHeader,
            tag,
            vanButton: Button
        },
        methods: {
            back () {
                this.$router.go(-1)
            },
            scanQRCode () {
                // 需要调用微信JSSDK Api  扫一扫 wx.scanQRCode
            },
            submit () {
                // 提交表单
                let { sn, content } = this.feedback
                if (sn.toString().length < 11 || sn.toString().length > 11) {
                    Toast('编号为11位数字')
                    return false
                }
                if (content.length <= 0) {
                    Toast('请填写问题描述')
                    return false
                }
                this._postFeedBack()
            },
            _postFeedBack () {
                this.loading = true
                // 发送到后台
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '~styles/variables.scss';
    .feedback{
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
        &-main{
            padding-top: 5%;
            padding-bottom: 3rem;
            background-color: #fff;
            .num{
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin: 5%;
                padding: 2.5%;
                margin-top:0;
                border-radius: 4px;
                color:$color-text-d;
                border:1px solid #32cfaa;
                .number{
                    flex:1;
                    height: 1rem;
                    letter-spacing: 2px;
                    line-height: 1rem;
                    padding-left: 10px;
                    font-size: .7rem;
                }
                .iconfont{
                    font-size: 1.5rem;
                    // color:$color-text-d;
                }
            }
            ul {
                padding: 0 .5rem;
                display: flex;
                flex-wrap: wrap;
                // justify-content: space-around;
                li{
                    height: 3.2rem;
                    line-height: 3.2rem;
                    width: 19%;
                    margin: .5rem 0.52rem;
                    text-align: center;
                    font-size: .7rem;
                    color:#fff;
                    background: #32cfaa;
                    border-radius: 4px;
                }
            }
            .other{
                width: 92%;
                border: #32cfaa solid 1px;
                margin-left: 4%;
                border-radius: 5px;
                padding: 4%;
                color: #333;
                font-size: .6rem;
            }
        }
    }
</style>
