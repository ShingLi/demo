<template>
    <transition name='slide' mode='out-in'>
    <div class="charge-wrapper">
        <div class="charge-wrapper" ref='chargeWrapper' v-if='zz'>
             <v-header title='附近电站' text='首页' @back='back' ref='header' style="z-index:9">
                <i class="iconfont icon-jiantouzuo" slot='back'></i>
            </v-header>
            <!--搜索 -->
            <div class="search-wrapper" ref='search'>
                <p class="loc-city">芜湖市</p>
                    <input type="text"
                        class="search"
                        v-model.trim='query'
                        placeholder="请输入充电站名称进行搜索"
                    >
                <router-link to='/collect' tag='div'>
                    <i class="iconfont icon-shoucang"></i>
                    <span>收藏</span>
                </router-link>
            </div>
            <div>
                <!-- 地图区域 -->
                <baidu-map center="芜湖"
                    class="bm-view"
                    :zoom="zoom"
                    @ready="handler"
                    ref='baidu'
                />
                <!-- 充电站列表 -->
                <!-- <div class="bg-layer" ref='layer'></div> -->
                <scroll class="scroll"
                    ref='scroll'
                    @scroll='scroll'
                    :listenScroll='listenScroll'
                    :probeType='probeType'
                >
                    <ul class="device-list">
                        <li class="device-item" v-for='(n,index) in 20' :key='index'>
                            <div class="deviceMsg">
                                <h3 class="title">10路电瓶车充电站</h3>
                                <address class="address">安徽省芜湖市镜湖区站东路</address>
                                <ul>
                                    <li class='distance'>
                                        <span>200000m</span>
                                    </li>
                                    <li class="chazuo">
                                        <span>0可用/100插座</span>
                                    </li>
                                    <li class="collect" @click='collect'>
                                        <i class="iconfont icon-collection"></i>
                                        <span>收藏</span>
                                    </li>
                                    <li class='navigate'>
                                        <i class="iconfont icon-204"></i>
                                        <span>导航</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="mainOperate" @click='charge'>
                                <div class="circle">
                                    <i class="iconfont icon-dianping"></i>
                                </div>
                                <span class="chongdian">充电</span>
                            </div>
                        </li>
                    </ul>
                    <!-- <div class="more-device">
                        <a class="more-btn">查看更多</a>
                    </div> -->
                </scroll>
            </div>
        </div>
        <loading v-if="!zz"></loading>
    </div>
    </transition>
</template>
<script>
    import vHeader from 'components/header'
    import Scroll from 'components/scroll/scroll'
    import Loading from 'components/loading/loading'
    import { prefixStyle } from 'assets/js/dom'
    const backdrop = prefixStyle('filter')
    const transform = prefixStyle('transform')
    export default {
        name: 'charge',
        data () {
            return {
                // center: {
                //     lng: 0,
                //     lat: 0
                // },
                zoom: 13,
                scrollY: -1,
                zz: false,
                query: ''
            }
        },
        created () {
            this.probeType = 3
            this.listenScroll = true
        },
        mounted () {
            setTimeout(() => {
                this.zz = true
            }, 1000)
        },
        updated () {
            let H = this.$refs.chargeWrapper.clientHeight
            let scrollHeight = this.$refs.scroll.$el.clientHeight
            let headerHeight = this.$refs.header.$el.clientHeight
            let searchHeight = this.$refs.search.clientHeight
            let baiduHeight = H - scrollHeight - headerHeight - searchHeight
            this.minTranslateY = -baiduHeight
            this.$refs.baidu.$el.style.height = `${baiduHeight}px`
            this.$refs.scroll.refresh()
        },
        components: {
            vHeader,
            Scroll,
            Loading
        },
        methods: {
            back () {
                this.$router.push({
                    path: '/userCenter'
                })
            },
            handler ({BMap, map}) {
                console.log(BMap, map)
            },
            collect () {
                // 收藏的信息
            },
            charge () {
                // 去支付界面
                this.$router.push({
                    path: '/pay'
                })
            },
            scroll (pos) {
                this.scrollY = pos.y
            }
        },
        watch: {
            scrollY (newY) {
                // let translateY = Math.max(this.minTranslateY, newY)
                // 苹果的高斯模糊
                let blur = 0
                let scale = 1
                const percent = Math.abs(newY / this.minTranslateY)
                if (newY < 0) {
                    blur = Math.min(20, percent * 20)
                } else {
                    scale = 1 + percent
                }
                // alert(backdrop)
                this.$refs.baidu.$el.style[backdrop] = `blur(${blur}px)`
                this.$refs.baidu.$el.style[transform] = `scale(${scale})`
            },
            query (newVal) {

            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '~styles/variables.scss';
    .charge-wrapper{
        @include fixed;
        // 地图
        .bm-view{
            width: 100%;
            position: relative;
            transform-origin: top;
        }
        // hack
        .bg-layer{
            position: relative;
            height: 100%;
            background-color: rgba(255,255,255,.9)
        }
        // 搜索
        .search-wrapper{
            position: relative;
            z-index: 9;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 2.4rem;
            padding: 0 15px;
            color:$color-text-d;
            background-color: #fff;
            // filter:blur(10px);
            // background: rgba(7, 17, 27, 0.4);
            .loc-city{
                font-size: .6rem;
            }
            .search{
                flex:1;
                font-size: .7rem;
                padding: 4px;
                line-height: 25px;
                margin:0 .7rem;
                border-radius: 4px;
                padding-left: 20px;
                outline: none;
                background-color: $color-background-d;
            }
            .icon-shoucang{
                color: #f5c026;
            }
            span {
                font-size: .7rem;
            }
        }
        .scroll {
            position: fixed;
			top:63%;
			left: 0;
			width: 100%;
			bottom:0;
            // background-color: #333;
            .device{
                &-list{
                    // padding-bottom: 1rem
                    background-color: #fff;
                }
                &-item{
                    // height: 4.8rem;
                    display: flex;
                    padding: .7rem .45rem;
                    margin-bottom: .45rem;
                    align-items: center;
                    border-radius: 5px;
                    border-bottom: 1px solid #f5f5f5;
                    .deviceMsg{
                    flex:1;
                        .title{
                            line-height: 20px;
                            margin-bottom: 0.3rem;
                            font-size: .75rem;
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
                                &.distance{
                                    span{
                                        display: inline-block;
                                        width: 2.6rem;
                                    }
                                }
                                &.chazuo{
                                    color: #fff;
                                    span{
                                        width: 5rem;
                                        padding: 0 .2rem;
                                        text-align: center;
                                        background-color: #ff6595;
                                    }
                                }
                                &.collect{
                                    i{
                                        vertical-align: middle;
                                        margin-right: .2rem;
                                        &.icon-shoucang{
                                            color: #f5c026;
                                        }
                                    }
                                }
                                &.navigate {
                                    i{
                                        vertical-align: middle;
                                        margin-right: .2rem;
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
                            width: 2.15rem;
                            height: 2.15rem;
                            line-height: 2rem;
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
            .more-device{
                .more-btn{
                    width: 90%;
                    line-height: 2rem;
                    display: inline-block;
                    text-align: center;
                    font-size: .7rem;
                    margin-left: 5%;
                    border-radius: 5px;
                    letter-spacing: 3px;
                    background-color: #40e399;
                    color: #fff;
                }
            }
        }
    }
</style>
