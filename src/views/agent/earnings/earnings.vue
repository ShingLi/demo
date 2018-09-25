<template>
    <transition name='slide' mode='out-in'>
        <div class="install-wrapper">
            <v-header title='小区收益'
                text='返回'
                @back='back'
                bg='agent'
                style='z-index:9'
            >
                <i class="iconfont icon-jiantouzuo" slot='back'></i>
            </v-header>
            <!-- 安装人员列表 -->
            <Scroll class="scroll">
                <div class="zzzz">
                    <van-collapse v-model="activeName" accordion>
                        <template v-for='(n,index) in 20'>
                            <van-collapse-item
                                title="李成小区管理员"
                                :name="index+1"
                                :key='index'
                            >
                                <i class="iconfont icon-yue" slot='icon'></i>
                                <span slot='value'>今日收益<strong>￥0</strong></span>
                                <!-- 折叠部分内容 -->
                                <div class='group'>
                                    <p class="group-item">
                                        <span>投币支付</span>
                                        <span>刷卡支付</span>
                                    </p>
                                    <p class="group-item">
                                        <b>￥0</b>
                                        <b>￥0</b>
                                    </p>
                                </div>
                                <div class='group'>
                                    <p class="group-item">
                                        <span>手机支付</span>
                                        <span>虚拟卡支付</span>
                                    </p>
                                    <p class="group-item">
                                        <b>￥0</b>
                                        <b>￥0</b>
                                    </p>
                                </div>
                                <div class='group'>
                                    <p class="group-item">
                                        <span>本月收益</span>
                                        <span>上月收益</span>
                                    </p>
                                    <p class="group-item">
                                        <b>￥0</b>
                                        <b>￥0</b>
                                    </p>
                                </div>
                            </van-collapse-item>
                        </template>
                    </van-collapse>
                </div>
            </Scroll>
        </div>
    </transition>
</template>
<script>
    import vHeader from 'components/header'
    import Scroll from 'components/scroll/scroll'
    import { Collapse, CollapseItem } from 'vant'
    export default {
        name: 'earnings',
        data () {
            return {
                activeName: '1',
                communityInfo: {}
            }
        },
        components: {
            vHeader,
            Scroll,
            vanCollapse: Collapse,
            vanCollapseItem: CollapseItem
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
    .van-collapse-item {
        margin-bottom: .5rem;
        &:last-child{
            margin-bottom: 0;
        }
    }
    .install{
        &-wrapper{
            @include fixed;
            .scroll{
                position: absolute;
                top:2.2rem;
                left: 0;
                width: 100%;
                bottom:0;
                .zzzz{
                    margin:0 .7rem;
                    padding-top: .7rem;
                    padding-bottom: .7rem;
                    .iconfont {
                        font-size: 1rem;
                        margin-right: .4rem;
                        color:#f5c026;
                    }
                    strong{
                        color:#EC658B;
                    }
                    .group{
                        display: flex;
                        flex-flow: column;
                        justify-content: space-between;
                        padding-top:.3rem;
                        &:first-child{
                            padding-top: 0;
                        }
                        &-item{
                            display: flex;
                            justify-content: space-between;
                            line-height:25px;
                            color:$color-text-d;
                            span{
                                font-size: .7rem;
                            }
                            b{
                                color:#EC658B;
                            }
                        }
                    }
                }
                .item{
                    display: flex;
                    align-items: center;
                    line-height: 22px;
                    margin-bottom: 5px;
                    color:$color-text-d;
                    font-size: .7rem;
                    label{
                        display: inline;
                        margin-right: 15px;
                    }
                }
            }
        }
    }
</style>
