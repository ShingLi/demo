<template>
    <transition name='slide' mode='out-in'>
        <div class="recharge-wrapper">
            <v-header title='充值' text='返回' @back='back'>
                <i class="iconfont icon-jiantouzuo" slot='back'></i>
            </v-header>
            <scroll class="scroll">
                <!-- 账户余额 -->
                <div class="account-money">
                    <tag icon='icon-xiaofei01' text='账户余额'></tag>
                    <p class="icons">
                        <i class="iconfont icon-zhanghu greenColor"></i>
                        <span>玉伯</span>
                        <i class="iconfont icon-tuiguangzhuanqian greenColor"></i>
                        <span>1000000元</span>
                    </p>
                </div>
                <!-- 充值金额 -->
                <div class="recharge-money">
                    <tag icon='icon-3' text='充值金额'></tag>
                    <form>
                        <ul class="money-list">
                            <li class="money-item">
                                <p>10元</p>
                                <span>赠送3元</span>
                            </li>
                        </ul>
                    </form>
                </div>

            </scroll>
        </div>
    </transition>
</template>
<script>
    import vHeader from 'components/header'
    import tag from 'components/tag'
    import Scroll from 'components/scroll/scroll'
    export default {
        name: 'recharge',
        components: {
            vHeader,
            tag,
            Scroll
        },
        methods: {
            back () {
                this.$router.go(-1)
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
                bottom: 0;
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
                            height: 2.8rem;
                            width: 25%;
                            text-align: center;
                            border-radius: 5px;
                            border: 1px solid #32cfaa;
                            margin: 0 .5rem 1rem;
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
                }
            }
        }
    }
</style>
