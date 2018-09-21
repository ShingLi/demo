<template>
    <transition name='slide' mode='out-in'>
        <div class="coupon-wrapper">
            <v-header title='卡券' text='返回' @back='back'>
                <i class="iconfont icon-jiantouzuo" slot='back'></i>
                <div slot="right" style="color:#fff;">
                    <i class="iconfont icon-saoyisao"></i>
                    充值
                </div>
            </v-header>
            <!-- bindcard -->
            <div class="search-wrapper">
                <label>绑定新卡</label>
                <!-- <input
                    type="text"
                    class="search-box"
                    placeholder="请输入10位卡号"
                    v-model.trim='query'
                    maxlength="10"
                /> -->
                <form action="/">
                    <van-search
                        class="search-box"
                        placeholder="请输入10位卡号"
                        v-model.trim="query"
                    />
                </form>
                <i class="iconfont icon-saoyisao" @click='scan'></i>
            </div>
            <tag icon='iconfont icon-card' text='我的虚拟卡'></tag>
            <!--  -->
            <div class="main">
                <!-- 卡号列表 -->
                <scroll class="scroll" v-if='true'>
                    <ul class="card-list">
                        <li class="card-item" v-for='(n,index) in 20' :key='index'>
                            <div class="time">
                                <label for="">绑定时间：</label>
                                <p>2018-08-30 09:57:25</p>
                            </div>
                            <div class='featuers'>
                                <p class="van-ellipsis">卡号：843DA7E1FF</p>
                                <div>
                                    <a @click="lose">挂失</a>
                                    <a @click='unbind'>解除绑定</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </scroll>
                <!-- 没有数据 -->
                <no-data text='您还没有绑定卡'></no-data>
            </div>
        </div>
    </transition>
</template>
<script>
    import vHeader from 'components/header'
    import Tag from 'components/tag'
    import NoData from 'components/no-data'
    import Scroll from 'components/scroll/scroll'
    import { Dialog, Toast, Search } from 'vant'
    export default {
        name: 'coupon',
        data () {
            return {
                query: ''
            }
        },
        components: {
            vHeader,
            Tag,
            Scroll,
            NoData,
            vanSearch: Search
        },
        methods: {
            back () {
                this.$router.go(-1)
            },
            scan () {
                // 扫描卡号
                Toast(1)
            },
            lose () {
                Dialog.confirm({
                    title: '',
                    message: '确认挂失卡？'
                }).then(() => {
                    // on confirm
                }).catch(() => {
                    // on cancel
                })
            },
            unbind () {
                Dialog.confirm({
                    title: '',
                    message: '确认解除绑定卡：843DA7E1FF？'
                }).then(() => {
                    // on confirm
                }).catch(() => {
                    // on cancel
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '~styles/variables.scss';
    .search-box /deep/ .van-cell {
        background-color: transparent;
    }
    .coupon{
        &-wrapper{
            @include fixed;
            .search{
                &-wrapper{
                    display: flex;
                    align-items: center;
                    padding:  0 5%;
                    line-height: 2.1rem;
                    // padding: 0 1rem;
                    margin-bottom: .75rem;
                    color:$color-text-d;
                    background-color: #fff;
                    label{
                        font-size: .7rem;
                    }
                    .icon-saoyisao{
                        font-size: 1rem;
                        text-indent: 0rem;
                    }
                }
                &-box{
                    width: 90%;
                    height: 1.3rem;
                    margin-left: .7rem;
                    line-height: 1.3rem;
                    text-align: left;
                    padding-left: .7rem;
                    background-color: #e6e6e6;
                    font-size: .6rem;
                    // padding: 0 2rem;
                    outline: none;
                }
            }
            .main{
                padding: 1.1rem 0;
                // background-color: #fff;
                .scroll{
                    position: absolute;
                    top:7rem;
                    left: 0;
                    width: 100%;
                    bottom: 0;
                    overflow: hidden;
                    // background-color: #fff;
                    .card{
                        &-list{
                            padding:1rem;
                            padding-top: 0;
                        }
                        &-item{
                            display: flex;
                            flex-flow: column;
                            justify-content: space-between;
                            padding: .8rem .5rem;
                            margin-bottom: .6rem;
                            border-radius: 5px;
                            background-color: #55c2fa;
                            &:last-child{
                                margin-bottom: 0;
                            }
                            .time{
                                display:flex;
                                align-items: center;
                                color:$color-text;
                                label{
                                    font-size: .7rem;
                                }
                                p{
                                    font-size: .7rem;
                                }
                            }
                            .featuers{
                                margin-top: 1rem;
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                color:$color-text;
                                p{
                                    font-size: .8rem;
                                }
                                div{
                                    a{
                                        display: inline-block;
                                        width: 3.6rem;
                                        text-align: center;
                                        color:$color-text;
                                        padding: 0.4rem 0;
                                        border-radius: .75rem;
                                        font-size: .6rem;
                                        background-color: #ff6595;
                                        &:last-child{
                                            background-color: #e1523f;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
