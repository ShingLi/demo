<template>
    <transition name='slide' mode='in-out'>
        <div class="collect-wrapper">
            <v-header title='我的收藏' text='返回' @back='back'>
                <i class="iconfont icon-jiantouzuo" slot='back'></i>
            </v-header>
            <!-- search -->
            <div v-if='false'>
                <div class="search-wrapper">
                <input type="text"
                    class="search-box"
                    placeholder="请输入设备名称进行搜索"
                    :model='query'>
                </div>
                <!-- tag -->
                <tag icon='icon-dianping'></tag>
                <!-- 充电站列表 -->
                <div class="device-list">
                    <ul>
                        <li class="device-item">
                            <div class="deviceMsg">
                                <h3 class="title">10路电瓶车充电站</h3>
                                <address class="address">安徽省芜湖市镜湖区站东路</address>
                                <ul>
                                    <li class='navigate'>
                                        <i class="iconfont icon-204"></i>
                                        <span>导航</span>
                                    </li>
                                    <li class="chazuo">
                                        <span>0可用/0插座</span>
                                    </li>
                                    <li class="editName">
                                        <i class="iconfont icon-edit-1-copy"></i>
                                        <span>修改备注姓名</span>
                                    </li>
                                    <li class="delCollect" @click='delCollect'>
                                        <i class="iconfont icon-shanchu"></i>
                                        <span>删除</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="mainOperate">
                                <div class="circle">
                                    <i class="iconfont icon-dianping"></i>
                                </div>
                                <span class="chongdian">充电</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 没有数据的显示 -->
            <no-data data='您还没有收藏任何设备'></no-data>
        </div>
    </transition>
</template>
<script>
    import vHeader from 'components/header'
    import Tag from 'components/tag'
    import NoData from 'components/no-data'
    import { Dialog } from 'vant'
    export default {
        name: 'collect',
        data () {
            return {
                query: ''
            }
        },
        components: {
            vHeader,
            Tag,
            NoData
        },
        methods: {
            back () {
                // f返回
                this.$router.go(-1)
            },
            delCollect () {
                // 删除设备
                Dialog.confirm({
                    title: '标题',
                    message: '确认删除次设备？'
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
    .collect-wrapper{
        position: fixed;
        top:0;
        left: 0;
        bottom:0;
        width: 100%;
        // min-height: calc(100vh);
        background-color: $color-background-d;
        .search{
            &-wrapper{
                padding:  0 5%;
                line-height: 2.1rem;
                // padding: 0 1rem;
                margin-bottom: .75rem;
                background-color: #fff;
            }
            &-box{
                width: 100%;
                height: 1.3rem;
                text-align: center;
                background-color: #e6e6e6;
                font-size: .6rem;
                padding: 0 2rem;
                outline: none;
            }
        }
        .device{
            &-list{
                width: 95%;
                margin-left: 2.5%;
            }
            &-item{
                display: flex;
                padding: 1rem .45rem;
                align-items: center;
                border-radius: 5px;
                background-color: #fff;
                .deviceMsg{
                   flex:1;
                    .title{
                        font-size: .75rem;
                        margin-bottom: 0.3rem;
                        font-weight: 700;
                        color: #333;
                    }
                    .address{
                        color:$color-text-d;
                        font-size: .6rem;
                        font-style: normal;
                        line-height: 1rem;
                    }
                    ul {
                        display: flex;
                        flex-wrap: wrap;
                        margin-top: 0.3rem;
                        li{
                            display: flex;
                            align-items: center;
                            line-height: 20px;
                            // margin-bottom: 5px;
                            padding: 0 .25rem;
                            font-size: .6rem;
                            color:$color-text-d;
                            border-right: 1px solid #aaaaaa;
                            &.chazuo{
                                color: #fff;
                                span{
                                    width: 3.9rem;
                                    padding: 0 .2rem;
                                    text-align: center;
                                    background-color: #ff6595;
                                }
                            }
                            &:last-child{
                                border-right: 0;
                            }
                        }
                    }
                }
                .mainOperate{
                    flex: 0 0 60px;
                    width: 60px;
                    display: flex;
                    flex-flow: column;
                    align-items: center;
                    color: $color-text-d;
                    .circle {
                        width: 1.8rem;
                        height: 1.8rem;
                        line-height: 1.8rem;
                        border-radius: 50%;
                        background-color: #4e93ff;
                        text-align: center;
                        i{
                            color:$color-text;
                            font-size: 1rem;
                            vertical-align: top;
                        }
                    }
                    .chongdian{
                        display: inline-block;
                        margin-top: .2rem;
                        font-size: .7rem;
                    }
                }
            }
        }
    }
</style>
