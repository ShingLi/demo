<template>
    <transition name='slide' mode='out-in'>
        <div class="consume-wrapper">
            <v-header title='消费记录' text='返回' @back='back'>
                <i class="iconfont icon-jiantouzuo" slot='back'></i>
                <i class="iconfont icon-calendar_icon" slot ='right'></i>
            </v-header>
            <scroll class="scroll">
                <ul class="list">
                    <li class="list-item" v-for='n in 20'>
                        <div class="title">
                            <h3>洗车记录</h3>
                            <span>￥0.01</span>
                        </div>
                        <div class="detail">
                            <strong>洗车时间：</strong>
                            <p>2018-09-06 16:43:08.0</p>
                        </div>
                        <div class="detail">
                            <strong>使用水量(升)：</strong>
                            <p>0.00</p>
                        </div>
                        <div class="detail">
                            <strong>付款方式：</strong>
                            <p>微信支付</p>
                        </div>
                        <div class="detail">
                            <strong>交易单号：</strong>
                            <p class="van-ellipsis">1476275675401030518090616421386</p>
                        </div>
                    </li>
                </ul>
            </scroll>
            <!-- 没有数据 -->
            <no-data data='您暂时没有任何消费记录！' v-if='false'></no-data>
        </div>
    </transition>
</template>
<script>
    import vHeader from 'components/header'
    import Scroll from 'components/scroll/scroll'
    import NoData from 'components/no-data'
    export default {
        name: 'consume',
        components: {
            vHeader,
            Scroll,
            NoData
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
    .consume-wrapper{
        @include fixed;
        .scroll{
            position: absolute;
            top:2.2rem;
            left: 0;
            width: 100%;
            bottom:0;
            overflow: hidden;
            .list{
                padding:.75rem;
                line-break: 1.25rem;
                &-item{
                    display: flex;
                    flex-flow: column;
                    justify-content: space-around;
                    margin-bottom: .5rem;
                    padding: .5rem .5rem;
                    border-radius: 4px;
                    background-color: #fff;
                    line-height: 1.25rem;
                    .title{
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        h3{
                            font-size: .9rem;
                            font-weight: 400;
                            letter-spacing: 1px;
                            color:$color-text-d;
                        }
                        span{
                            font-size: .8rem;
                            color: #e1523f;
                        }
                    }
                    .detail{
                        display: flex;
                        line-height: 1.5rem;
                        align-items: center;
                        strong{
                            font-weight: 400;
                            color: #333333;
                            font-size: .7rem;
                        }
                        p{
                            margin-left: .5rem;
                            font-size: .6rem;
                            color:$color-text-d;
                        }
                        &:first-child{
                            margin-top: .2rem;
                        }
                    }
                }
            }
        }
    }
</style>
