<template>
    <transition name='slide' mode='out-in'>
        <div class="order-list">
            <v-header
                ref='header'
                title='订单查询'
                text='返回'
                bg='agent'
                @back='back'
            >
                <i class="iconfont icon-jiantouzuo" slot='back'></i>
            </v-header>
            <!-- tab切换 -->
            <tab :line-width=2
                    active-color='#fc378c'
                    v-model="index"
            >
                <tab-item
                    class="vux-center"
                    v-for="(item, index) in tabName"
                    :selected="currentVal === item"
                    :key="index"
                    @click="currentVal = item"
                >{{item}}</tab-item>
            </tab>
            <!-- 左右切换 -->
            <Slider
                :currentIndex='index'
                :top='top'
                @switchItem='switchItem'
            >
                <!-- 投币 -->
                <Scroll class="scroll">
                    <ul class='card-list'>
                        <li
                            class="card-item"
                            v-for='(card, index) in cardList'
                            :key='index'
                        >
                            <div class="text">
                                <h3 class="mark">{{card.cid}}</h3>
                                <span class="fee">{{card.tottalFee}}</span>
                            </div>
                            <p>设备编号:{{card.sid}}</p>
                            <p>SN编号:{{card.sn}}</p>
                            <p>SN名称:{{card.snName}}</p>
                            <p>工作时间:{{card.workTime}}</p>
                        </li>
                    </ul>
                </Scroll>
                <!-- 刷卡 -->
                <Scroll class="scroll">
                    <ul class='card-list'>
                        <li
                            class="card-item"
                            v-for='(card, index) in cardList'
                            :key='index'
                        >
                            <div class="text">
                                <h3 class="mark">{{card.cid}}</h3>
                                <span class="fee">{{card.tottalFee}}</span>
                            </div>
                            <p>设备编号:{{card.sid}}</p>
                            <p>SN编号:{{card.sn}}</p>
                            <p>SN名称:{{card.snName}}</p>
                            <p>工作时间:{{card.workTime}}</p>
                        </li>
                    </ul>
                </Scroll>
                <!-- 手机 -->
                <Scroll class="scroll">
                    <ul class='card-list'>
                        <li
                            class="card-item"
                            v-for='(card, index) in cardList'
                            :key='index'
                        >
                            <div class="text">
                                <h3 class="mark">{{card.cid}}</h3>
                                <span class="fee">{{card.tottalFee}}</span>
                            </div>
                            <p>设备编号:{{card.sid}}</p>
                            <p>SN编号:{{card.sn}}</p>
                            <p>SN名称:{{card.snName}}</p>
                            <p>工作时间:{{card.workTime}}</p>
                        </li>
                    </ul>
                </Scroll>
                <!-- 虚拟卡 -->
                <Scroll class="scroll">
                    <ul class='card-list'>
                        <li
                            class="card-item"
                            v-for='(card, index) in cardList'
                            :key='index'
                        >
                            <div class="text">
                                <h3 class="mark">{{card.cid}}</h3>
                                <span class="fee">{{card.tottalFee}}</span>
                            </div>
                            <p>设备编号:{{card.sid}}</p>
                            <p>SN编号:{{card.sn}}</p>
                            <p>SN名称:{{card.snName}}</p>
                            <p>工作时间:{{card.workTime}}</p>
                        </li>
                    </ul>
                </Scroll>
            </Slider>
        </div>
    </transition>
</template>
<script>
    import vHeader from 'components/header'
    import Scroll from 'components/scroll/scroll'
    import Slider from 'components/slider/slider'
    import { Tab, TabItem, Swiper, SwiperItem } from 'vux'
    const list = () => ['投币', '刷卡', '手机', '虚拟卡']
    const TAB_HEIGHT = 44
    export default {
        name: 'order',
        components: {
            vHeader,
            Tab,
            TabItem,
            Swiper,
            SwiperItem,
            Scroll,
            Slider
        },
        data () {
            return {
                index: 0,
                top: 0,
                tabName: list(),
                currentVal: '投币',
                cardList: [
                    {
                        cid: '1476273323801020018091814143559',
                        sn: '14762733238',
                        snName: '摩灿展厅3#号机',
                        workTime: '480',
                        tottalFee: 2,
                        sid: 1
                    },
                    {
                        cid: '1476273323801020018091814143559',
                        sn: '14762733238',
                        snName: '摩灿展厅3#号机',
                        workTime: '480',
                        tottalFee: 2,
                        sid: 1
                    },
                    {
                        cid: '1476273323801020018091814143559',
                        sn: '14762733238',
                        snName: '摩灿展厅3#号机',
                        workTime: '480',
                        tottalFee: 2,
                        sid: 1
                    },
                    {
                        cid: '1476273323801020018091814143559',
                        sn: '14762733238',
                        snName: '摩灿展厅3#号机',
                        workTime: '480',
                        tottalFee: 2,
                        sid: 1
                    },
                    {
                        cid: '1476273323801020018091814143559',
                        sn: '14762733238',
                        snName: '摩灿展厅3#号机',
                        workTime: '480',
                        tottalFee: 2,
                        sid: 1
                    },
                    {
                        cid: '1476273323801020018091814143559',
                        sn: '14762733238',
                        snName: '摩灿展厅3#号机',
                        workTime: '480',
                        tottalFee: 2,
                        sid: 1
                    },
                    {
                        cid: '1476273323801020018091814143559',
                        sn: '14762733238',
                        snName: '摩灿展厅3#号机',
                        workTime: '480',
                        tottalFee: 2,
                        sid: 1
                    },
                    {
                        cid: '1476273323801020018091814143559',
                        sn: '14762733238',
                        snName: '摩灿展厅3#号机',
                        workTime: '480',
                        tottalFee: 2,
                        sid: 1
                    }

                ]
            }
        },
        mounted () {
            this.$nextTick(() => {
                let headerHeight = this.$refs.header.$el.clientHeight
                let H = headerHeight + TAB_HEIGHT
                this.top = H
            }, 27)
            console.log(this)
        },
        methods: {
            back () {
                this.$router.go(-1)
            },
            switchItem (index) {
                this.index = index
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '~styles/variables.scss';
    .order-list{
        @include fixed;
        .scroll{
            float: left;
            position: relative;
            height: 100%;
            overflow: hidden;
            .card-list{
                padding: 10px;
                .card-item{
                    width: 100%;
                    padding: 8px;
                    background-color: #fff;
                    border-radius: 5px;
                    font-size: .7rem;
                    margin-bottom:10px;
                    .text{
                        font-size: .8rem;
                        display: flex;
                        justify-content: space-between;
                        span{
                            color:#F61238;
                        }
                    }
                    p{
                        line-height: 25px;
                        color:$color-text-d;
                    }
                }
            }
        }
    }
</style>
