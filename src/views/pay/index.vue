<template>
    <transition name='slide' mode='out-in'>
        <div class="recharge-wrapper">
            <v-header title='付款' text='返回' @back='back'>
                <i class="iconfont icon-jiantouzuo" slot='back'></i>
                <i class="iconfont icon-shoucang" slot='right'></i>
            </v-header>
            <form @submit.prevent='submit'>
                <scroll class="scroll">
                    <!-- 账户余额 -->
                    <div class="account-money">
                        <div class="choose">
                            <tag icon='icon-chazuo' text='选择插座'></tag>
                            <div class='right'>
                                <i class="iconfont icon-dianping greenColor"></i>
                                <span>测试6501</span>
                            </div>
                        </div>
                        <!-- 工作的显示 -->
                        <van-swipe :autoplay="3000">
                            <van-swipe-item>
                                <ul class="swipe-wrapper">
                                    <li class="swipe-item" v-for='z in 10'>
                                        <i class="iconfont icon-smiling greenColor"></i>
                                        <span>1</span>
                                    </li>
                                </ul>
                            </van-swipe-item>
                        </van-swipe>
                    </div>
                    <!-- 充值金额 -->
                    <div class="recharge-money">
                        <tag icon='icon-3' text='充值金额'></tag>
                            <ul class="money-list">
                                <li class="money-item"
                                    v-for='(item,index) in moneyList'
                                    :key='item.id'
                                    @click='choose(item)'
                                    :class="{'bg-active':index === moneyId}"
                                >
                                    <p>{{item.money}}元</p>
                                    <span class="van-ellipsis">赠送{{item.give}}元</span>
                                </li>
                            </ul>
                        <div class="_cell">
                            <input
                                type="number"
                                placeholder="输入其他金额"
                                class="_input"
                                v-model.number='form.input'
                                @focus ='onfocus'
                                ref='input'
                            >
                        </div>
                    </div>
                    <!-- 支付方式 -->
                    <div class="payment">
                        <tag icon='icon-zhifufangshi' text='支付方式'></tag>
                        <van-radio-group v-model="form.radio">
                            <van-cell-group>
                                <van-cell
                                    title="微信"
                                    clickable @click="form.radio = '1'"
                                    icon='wechat'
                                >
                                    <van-radio name="1" />
                                </van-cell>
                                <van-cell
                                    title="支付宝"
                                    @click="form.radio = '2'"
                                    icon='alipay'
                                >
                                    <van-radio name="2" />
                                </van-cell>
                            </van-cell-group>
                        </van-radio-group>
                    </div>
                </scroll>
                <!-- 支付金额 -->
                <div class="paymoney van-hairline--top">
                    <div class="pay-total-money">
                        <span class="pay-text">支付金额 :</span>
                        <span class="pay-m" v-if='form.isshow'>{{form.input}}元</span>
                        <span class="pay-m" v-else>{{form.choose}}元</span>
                    </div>
                    <van-button type='primary' class="btn">确认支付</van-button>
                </div>
            </form>
            <!-- 支付失败 -->
        </div>
    </transition>
</template>
<script>
    import vHeader from 'components/header'
    import tag from 'components/tag'
    import Scroll from 'components/scroll/scroll'
    import { Cell, CellGroup, Radio, RadioGroup, Button, Swipe, SwipeItem } from 'vant'
    export default {
        name: 'recharge',
        data () {
            return {
                moneyList: [
                    {
                        id: 0,
                        money: 10,
                        give: 3
                    },
                    {
                        id: 1,
                        money: 15,
                        give: 15
                    }
                ],
                moneyId: 0,
                form: {
                    input: '',
                    choose: '',
                    radio: '1',
                    isshow: false
                }
            }
        },
        components: {
            vHeader,
            tag,
            Scroll,
            vanCell: Cell,
            vanCellGroup: CellGroup,
            vanRadio: Radio,
            vanRadioGroup: RadioGroup,
            vanButton: Button,
            vanSwipe: Swipe,
            vanSwipeItem: SwipeItem
        },
        mounted () {
            this._defaultPayMoney()
        },
        methods: {
            back () {
                this.$router.go(-1)
            },
            choose (item) {
                // 选择金额
                this.moneyId = item.id
                const _changeform = {
                    choose: item.money,
                    input: '',
                    isshow: false
                }
                // console.log(_changeform)
                this.form = Object.assign({}, this.form, _changeform)
                this.$refs.input.blur()
            },
            submit () {
                // 表单的数据
                alert(1)
            },
            _defaultPayMoney () {
                this.moneyList.length ? this.form.choose = this.moneyList[0].money : 0
            },
            onfocus () {
                this.moneyId = -1
                this.form.isshow = !this.form.isshow
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '~styles/variables.scss';
    .recharge{
        &-wrapper{
            @include fixed;
            .scroll{
                position: absolute;
                top:2.2rem;
                left: 0;
                bottom: 44px;
                width: 100%;
                overflow: hidden;
                .account-money{
                    padding: 1rem 0;
                    margin-bottom: .8rem;
                    background-color: #fff;
                    .icons{
                        font-size: .7rem;
                        color: #40e399;
                        .iconfont{
                            margin-right: .2rem;
                        }
                        span{
                            color:$color-text-d;
                        }
                    }
                    // swipe 轮播区域
                    .swipe{
                        &-wrapper{
                            width: 90%;
                            margin: auto;
                            display: flex;
                            flex-wrap: wrap;
                        }
                        &-item{
                            width: 20%;
                            display: flex;
                            flex-flow: column;
                            justify-content: space-between;
                            align-items: center;
                            i{
                                font-size: 1.25rem;
                                &.icon-smiling{
                                    color: #40e399;
                                }
                            }
                        }
                    }
                    .right{
                        display: flex;
                        .greenColor{
                            color:#40e399;
                        }
                        span{
                            font-size: .7rem;
                            padding-top: 3px;
                            margin: 0 10px;
                            color: $color-text-d;
                        }
                    }
                    .choose{
                        display: flex;
                        justify-content: space-between;
                    }
                }
                .recharge-money{
                    padding: 1rem 0;
                    margin-bottom: .8rem;
                    background-color: #fff;
                    .money{
                        &-list{
                            display: flex;
                            flex-wrap: wrap;
                            padding: 0 .5rem;
                        }
                        &-item{
                            display: flex;
                            flex-flow: column;
                            justify-content: space-around;
                            height: 2.5rem;
                            width: 27.5%;
                            text-align: center;
                            border-radius: 5px;
                            border: 1px solid #32cfaa;
                            margin: 0 .5rem 1rem;
                            // @include bg-image('discounts');
                            background-size: 1.2rem auto;
                            background-position: 100% 0;
                            background-repeat: no-repeat;
                            &.bg-active{
                                background-color: #32cfaa;
                                p,span{
                                    color: #fff;
                                }
                            }
                            p{
                                margin-top: 0.2rem;
                                color: #333333;
                                font-size: .9rem;
                            }
                            span{
                                font-size: .6rem;
                                color: #32cfaa;
                                letter-spacing: 1px;
                            }
                        }
                    }
                    ._cell{
                        width: 59.5%;
                        margin: 0 1rem;
                        height: 2rem;
                        line-height: 2rem;
                        border-radius: 5px;
                        text-align: center;
                        font-size: .7rem;
                        border: 1px solid #32cfaa;
                        ._input{
                            height: 90%;
                            font-size: .7rem;
                            outline: none;
                        }
                    }
                }
                .payment{
                    padding: 1rem 0;
                    margin-bottom: .8rem;
                    background-color: #fff;
                }
            }
            .paymoney{
                display: flex;
                align-items: center;
                position: fixed;
                bottom: 0;
                left: 0;
                width: 100%;
                // height: 2.2rem;
                background-color: #fff;
                .pay{
                    &-total-money{
                        flex:1;
                        padding-left: 1rem;
                    }
                    &-text{
                        font-size: .8rem;
                        color: $color-text-d;
                    }
                    &-m{
                        font-size: .7rem;
                        color: #e1523f;
                    }
                }
                .btn{
                    // height: 2rem;
                    border-radius: 0 !important;
                }
            }
        }
    }
</style>
