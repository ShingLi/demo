<template>
    <transition name='slide' mode='out-in'>
        <div class="carbarn-wrapper">
            <v-header title='车位详情' text='' @back='back'>
                <i class="iconfont icon-jiantouzuo" slot='back'></i>
            </v-header>
            <scroll class="scroll">
                <ul class="carbarn-list">
                    <template v-for='(n,index) in 20'>
                        <li class="carbarn-item" :key='index'>
                            <div class="desc">
                                <div>
                                    <h3 class="title">火车车位</h3>
                                    <!-- <p class="distance">2363m</p> -->
                                </div>
                                <address class="address van-ellipsis">消费标准:&nbsp;&nbsp;1000/月</address>
                            </div>
                            <!-- 可用 -->
                            <div class="status">
                                <b>3</b>
                                <span>车位可用</span>
                            </div>
                            <!-- 不可用 -->
                            <div class="status no" v-if='false'>
                                <span>无可用车</span>
                            </div>
                        </li>
                    </template>
                    <li>
                        <!-- 申请车位 -->
                        <div class="button">
                            <van-button size='large' type='primary' @click='apply'>申请车位</van-button>
                        </div>
                    </li>
                </ul>
            </scroll>
        </div>
    </transition>
</template>
<script>
    import vHeader from 'components/header'
    import Scroll from 'components/scroll/scroll'
    import { Button } from 'vant'
    export default {
        name: 'carbarn-detail',
        components: {
            vHeader,
            Scroll,
            vanButton: Button
        },
        methods: {
            back () {
                this.$router.go(-1)
            },
            apply () {
                this.$router.push({
                    path: '/apply-carbarn'
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '~styles/variables.scss';
    .carbarn{
        &-wrapper{
            @include fixed;
            .scroll{
                position: absolute;
                top:2.2rem;
                left: 0;
                width: 100%;
                bottom:0;
                overflow: hidden;
                .carbarn{
                    &-list{
                        padding: 1rem .3rem;
                    }
                    &-item{
                        display: flex;
                        align-items: center;
                        margin-bottom: 10px;
                        padding: 10px;
                        border-radius: 5px;
                        background-color: rgba(255,255,255,.9);
                        &:last-child{
                            margin-bottom: 0;
                        }
                        .desc{
                            flex:1;
                            display: flex;
                            flex-flow: column;
                            justify-content: space-between;
                            margin-right: .5rem;
                            div{
                                display: inline-flex;
                                justify-content: space-between;
                                line-height: 35px;
                                .title{
                                    font-size: .8rem;
                                }
                                .distance{
                                    font-size: .7rem;
                                    color:#f06a6a;

                                }
                            }
                            .address{
                                line-height: 30px;
                                font-style: normal;
                                color: $color-text-d;
                                font-size: .7rem;
                            }

                        }
                        .status{
                            display: flex;
                            flex-flow: column;
                            justify-content: center;
                            align-items: center;
                            flex:0 0 3rem;
                            height: 3rem;
                            border-radius: 3px;
                            background-color: #7CDB65;
                            color:$color-text;
                            b{
                                font-size: .8rem;
                            }
                            span{
                                display: inline-block;
                                margin-top: 10px;
                                font-size: .6rem;
                            }
                            &.no{
                                background-color: #f06a6a;
                                span{
                                    margin: 0;
                                }
                            }
                        }
                    }
                }
                .button{
                    margin-top: 2rem;
                    .van-button--large{
                        height: 2rem;
                        line-height: 2rem;
                    }
                }
            }
        }
    }
</style>
