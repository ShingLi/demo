<template>
    <transition name='slide' mode='out-in'>
        <div class="device-wrapper">
            <v-header title='设备管理'
                text='返回'
                @back='back'
                style='z-index:9'
                bg='agent'
            >
                <i class="iconfont icon-jiantouzuo" slot='back'></i>
            </v-header>
            <form action="/">
                <van-search placeholder="请输入设备编号进行搜索"
                v-model="sn"
            />
            </form>
            <!-- <div class="search-wrapper">
                <input type="text"
                    class="search-box"
                    placeholder="请输入设备编号进行搜索"
                    :model='sn'
                >
                <p class="device-total">当前设备总数: 3</p>
            </div> -->
            <!-- tab -->
            <van-tabs v-model="active" swipeable>
                <template v-for='(tab,index) of statusList'>
                    <van-tab :key='index'>
                        <span slot='title'>{{tab.status}} {{tab.number}}</span>
                        <ul class="list" v-if="0 === active">
                            <li class="list-item" @click='goDetail'>
                                <div class="left">
                                    <svg class="icon icon-mokuai" aria-hidden="true"><use xlink:href="#icon-mokuai"></use></svg>
                                </div>
                                <div class="detail-info">
                                    <h4>李成测试</h4>
                                    <p>设备编号: 14768754236</p>
                                    <p>添加时间：2018-09-18 15:50:41</p>
                                    <p>小区管理员：李成小区管理员</p>
                                </div>
                                <div class="arrow">
                                    <svg class='icon icon-jiantou' aria-hidden='true'><use xlink:href='#icon-jiantou-copy-copy'></use></svg>
                                </div>
                            </li>
                        </ul>
                        <!-- 离线 -->
                        <template v-else>
                            <ul class="list" v-for='(n,index) in 4' :key='index'>
                                <li class="list-item" @click='goDetail'>
                                    <div class="left">
                                        <svg class="icon icon-mokuai" aria-hidden="true"><use xlink:href="#icon-mokuai"></use></svg>
                                    </div>
                                    <div class="detail-info">
                                        <h4>李成测试</h4>
                                        <p>设备编号: 14768754236</p>
                                        <p>添加时间：2018-09-18 15:50:41</p>
                                        <p>小区管理员：李成小区管理员</p>
                                    </div>
                                    <div class="arrow">
                                        <svg class='icon icon-jiantou' aria-hidden='true'><use xlink:href='#icon-jiantou-copy-copy'></use></svg>
                                    </div>
                                </li>
                            </ul>
                        </template>
                    </van-tab>
                </template>
            </van-tabs>
            <router-view></router-view>
        </div>
    </transition>
</template>
<script>
    import vHeader from 'components/header'
    import { Tab, Tabs, Search } from 'vant'
    export default {
        name: 'device',
        components: {
            vHeader,
            vanTabs: Tabs,
            vanTab: Tab,
            vanSearch: Search
        },
        data () {
            return {
                active: 0,
                sn: '',
                statusList: [
                    {
                        status: '在线',
                        number: 0
                    },
                    {
                        status: '离线',
                        number: 1
                    }
                ]
            }
        },
        methods: {
            back () {
                this.$router.go(-1)
            },
            goDetail () {
                this.$router.push({
                    path: '/device/1'
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '~styles/variables.scss';
    .device{
        &-wrapper{
            // @include fixed;
            min-height: 100vh;
            background-color: #F0F2F0;
            .search{
                &-wrapper{
                    padding:  0 5%;
                    line-height: 2.1rem;
                    // padding: 0 1rem;
                    margin-bottom: .75rem;
                    background-color: #fff;
                    .device-total{
                        font-size: .7rem;
                        color:$color-text-d;
                    }
                }
                &-box{
                    width: 100%;
                    height: 1.3rem;
                    line-height: 1.3rem;
                    text-align: left;
                    background-color: #e6e6e6;
                    font-size: .6rem;
                    padding: 0 2rem;
                    outline: none;
                }
            }
            .list{
                padding:.7rem;
                .list-item{
                    display: flex;
                    padding: 10px 8px;
                    align-items: center;
                    background-color: #fff;
                    .left{
                        flex: 0 0 2rem;
                        width: 2rem;
                        .icon{
                            width: 1.5rem;
                            height: 1.5rem;
                            color: #3C8CE7;
                            fill: currentColor;
                        }
                    }
                    .detail-info{
                        flex:1;
                        display: flex;
                        flex-flow: column;
                        justify-content: space-around;
                        h4{
                            font-size: .8rem;
                            margin-bottom: .5rem;
                            color: $color-text-d;
                        }
                        p{
                            font-size: .6rem;
                            line-height: 22px;
                            color: $color-text-d;
                        }
                    }
                    .arrow{
                        .icon {
                            width:1.2rem;
                            height: 1.2rem;
                            color:#808080;
                            fill: currentColor;
                        }
                    }
                }
            }
        }
    }
</style>
