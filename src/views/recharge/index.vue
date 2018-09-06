<template>
    <transition name='slide' mode='out-in'>
        <div class="recharge-wrapper">
            <v-header text="返回" title='充值记录' @back ='back'>
                <i class="iconfont icon-jiantouzuo" slot='back'></i>
                <i class="iconfont icon-calendar_icon" slot="right" @click ='isShowPopup'></i>
            </v-header>
            <!-- 列表数据 -->
            <div>
                <scroll class="scroll">
                    <ul class='list'>
                        <li class="list-item" v-for='(n,index) in 20' :key='index'>
                            <swipe-cell :right-width="65" :on-close="onClose(index)">
                                <div class="main van-hairline--surround" @click='toChild(index)'>
                                    <div class="desc">
                                        <p>
                                            <small class="van-ellipsis">2018-8-31-15:30:16</small>
                                            <span>+1元</span>
                                        </p>
                                        <p>
                                            <small>微信支付</small>
                                            <span>赠送0元</span>
                                        </p>
                                    </div>
                                    <div class="arrow">
                                        <i class="iconfont icon-xiangyoujiantou"></i>
                                    </div>
                                </div>
                                <span slot="right" class='delete'>删除</span>
                            </swipe-cell>
                        </li>
                    </ul>
                </scroll>
            </div>
             <!-- 日期选择 -->
            <popup v-model='isPopup' position='bottom'>
                <datetime-picker
                    type='year-month'
                    v-model="currentDate"
                    :formatter="formatter"
                    @cancel='cancel'
                    @confirm='Confirm'
                >
                </datetime-picker>
            </popup>
            <!-- 没有数据 -->
            <no-data data='您还没有任何充值记录' v-if='false'></no-data>
            <!-- 子路由 -->
            <router-view></router-view>
        </div>
    </transition>
</template>
<script>
    import vHeader from 'components/header'
    import NoData from 'components/no-data'
    import Scroll from 'components/scroll/scroll'
    import {SwipeCell, Dialog, Popup, DatetimePicker} from 'vant'
    export default {
        name: 'recharge',
        data () {
            return {
                isPopup: false,
                currentDate: new Date()
            }
        },
        components: {
            vHeader,
            Scroll,
            NoData,
            SwipeCell,
            Popup,
            DatetimePicker
        },
        methods: {
            back () {
                this.$router.go(-1)
            },
            onClose (index) {
                return (clickPosition, instance) => {
                    switch (clickPosition) {
                    case 'left':
                    case 'cell':
                    case 'outside':
                        instance.close()
                        break
                    case 'right':
                        Dialog.confirm({
                            message: '确定删除此条消息吗？'
                        }).then(() => {
                            console.log(index)
                            this.$emit('delete', index)
                            instance.close()
                        })
                        break
                    }
                }
            },
            isShowPopup () {
                this.isPopup = !this.isPopup
            },
            cancel () {
                // alert(1)
                this.isShowPopup()
            },
            Confirm (val) {
                // 时间确定
                console.log(val)
            },
            formatter (type, value) {
                if (type === 'year') {
                    return `${value}年`
                } else if (type === 'month') {
                    return `${value}月`
                }
                return value
            },
            msgDetail (id) {
                // 子路由
                this.$router.push({
                    path: `/message/${id}`
                })
            },
            toChild (id) {
                // alert(1)
                this.$router.push({
                    path: `/recharge/${id}`
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '~styles/variables.scss';
    .recharge{
        &-wrapper{
            position: fixed;
            top:0;
            left: 0;
            width: 100%;
            bottom: 0;
            background-color: $color-background-d;
            .scroll{
                position: absolute;
                top:2.2rem;
                left: 0;
                width: 100%;
                bottom: 0;
                overflow: hidden;
                .list{
                    padding: 1rem 5% 0 5%;
                    &-item{
                        width: 100%;
                        height: 4.5rem;
                        padding-left: 5%;
                        position: relative;
                        background: url(./rechargeList.png) left -1rem no-repeat;
                        background-size: .75rem auto;
                        .main{
                            display: flex;
                            height: 3.5rem;
                            margin-left: .6rem;
                            padding-right: .4rem;
                            align-items: center;
                            // border:1px solid #ccc;
                            border-radius: 3px;
                            background-color: #fff;
                            .desc{
                                flex:1;
                                // height: 100%;
                                p{
                                    display: flex;
                                    line-height: 25px;
                                    padding: 0 1rem;;
                                    justify-content: space-between;
                                    small{
                                        font-size: .7rem;
                                        color:#000;
                                    }
                                    span{
                                       font-size: .7rem;
                                       color:#666;
                                    }
                                    &:last-child{
                                        small{
                                            color:#666;
                                        }
                                        span{
                                            color: #e1523f;
                                        }
                                    }
                                }
                            }
                            .arrow{
                                flex:0 0 1rem;
                                width: 1rem;
                                color:$color-text-d;
                                i{
                                    font-size: 1rem;
                                }
                            }
                        }
                        .delete{
                            display: flex;
                            height: 95%;
                            margin-top: 2.5%;
                            margin-left: 10px;
                            width: 2.5rem;
                            color: #fff;
                            font-size: .7rem;
                            border-radius: 4px;
                            justify-content: center;
                            align-items: center;
                            background-color: #FE4444;
                        }
                    }
                }
            }
        }
    }
</style>
