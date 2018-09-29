<template>
    <transition name='slide' mode='out-in'>
        <div class="order-detail">
            <v-header
                class="v-header"
                title='取消排队'
                @back='back'
            >
                <i class="iconfont icon-jiantouzuo" slot='back'></i>
            </v-header>
            <scroll>
                <div>
                    <van-notice-bar
                        text="目前您的前面还有100个人在排队！ 您可以选择继续等待或者取消排队!"
                        left-icon="//img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png"
                    />
                   <cell-group>
                        <van-field
                        label='姓名'
                        value='李成'
                        />
                        <van-field
                            label='手机号'
                            value='13866353457'
                        />
                        <van-field
                            label='车库名称'
                            value='测试车库'
                        />
                        <van-field
                            label='车库类型'
                            value='三轮车'
                        />
                        <van-field
                            label='租赁时间'
                            value='12个月'
                        />
                        <van-field
                            label='收货地址'
                            value='安徽省芜湖市鸠江区'
                        />
                        <van-field
                            label='详细地址'
                            value='产业园'
                        />
                    </cell-group>
                    <cell-group>
                        <van-field
                            label='支付总金额'
                            value='610元(卡费10元)'
                        />
                    </cell-group>
                </div>
            </scroll>
            <cell-group style='background:transparent' class="btn">
                <van-button
                    class="z"
                    size="large"
                    type="primary"
                    :loading='loading'
                        >取消排队
                </van-button>
            </cell-group>
        </div>
    </transition>
</template>
<script>
    import vHeader from 'components/header'
    import Scroll from 'components/scroll/scroll'
    import { Field, NoticeBar, CellGroup, Button } from 'vant'
    export default {
        name: 'order-detail',
        props: {
            id: {
                type: String,
                default: ''
            }
        },
        components: {
            vHeader,
            Scroll,
            vanField: Field,
            vanNoticeBar: NoticeBar,
            CellGroup,
            vanButton: Button
        },
        data () {
            return {
                loading: false
            }
        },
        mounted () {
        },
        methods: {
            back () {
                this.$router.go(-1)
            },
            todetail (id) {
                this.$router.push({
                    path: `/myorder/${id}`
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '~styles/variables.scss';
    .order-detail{
        @include fixed;
        .btn{
            position: fixed;
            bottom: 5%;
            left: 5%;
            width: 90%;
            .z{
                color:$color-text;
                height: 44px;
                line-height: 42px;
                // background: #32cfaa;
            }
        }
    }
</style>
