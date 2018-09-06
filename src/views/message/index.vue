<template>
    <transition name='slide' mode='in-out'>
        <div class="message-wrapper">
            <v-header title='我的消息' text='返回' @back='back'>
                <i class="iconfont icon-jiantouzuo" slot='back'></i>
                <i class="iconfont icon-calendar_icon" slot="right" @click ='isShowPopup'></i>
            </v-header>
            <!--消息列表 -->
            <scroll class="scroll-wrapper">
                <div class="scroll">
                    <ul class="msg-list">
                        <li class="msg-item" v-for='(n,index) in 20' :key='index' @click='msgDetail(index)'>
                            <swipe-cell :right-width="65" :on-close="onClose(index)">
                                <div class="cell">
                                    <div class="msg-icon">
                                        <p>
                                            <i class="iconfont icon-xiche"></i>
                                        </p>
                                    </div>
                                    <div class="msg-content">
                                        <div class="title">
                                            <h3 class="notice">洗车通知</h3>
                                            <span class="time">2018-08-19 14:26:43</span>
                                        </div>
                                        <p class="desc">您好，您于2018-08-09 14:26:43.975在2.0洗车机测试充电1.3元，洗车水量为1.....</p>
                                    </div>
                                </div>
                                <span slot='right' class='del-msg'>删除</span>
                            </swipe-cell>
                        </li>
                    </ul>
                </div>
            </scroll>
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
            <no-data data='您暂时没有任何其他消息' v-if='false'></no-data>
            <!-- 子路由 -->
            <router-view></router-view>
        </div>
    </transition>
</template>
<script>
    import vHeader from 'components/header'
    import Scroll from 'components/scroll/scroll'
    import NoData from 'components/no-data'
    import {SwipeCell, Dialog, Popup, DatetimePicker} from 'vant'
    export default {
        name: 'message',
        data () {
            return {
                data: [],
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
            // 删除cell
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
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '~styles/variables.scss';
    .message{
        &-wrapper{
            position: fixed;
            top:0;
            left: 0;
            bottom: 0;
            width: 100%;
            background-color: $color-background-d;
            overflow: hidden;
            .scroll-wrapper{
                position: absolute;
                top:2.2rem;
                left: 0;
                width: 100%;
                bottom: 0;
                // padding-top: .6rem;
                overflow: hidden;
            }
            .scroll{
                .msg{
                    &-list{
                        // margin: .6rem auto;
                        padding: .6rem 0;
                    }
                    &-item{
                        width: 95%;
                        border-radius: 3px;
                        margin: auto;
                        margin-bottom: .6rem;
                        &:last-child{
                            margin-bottom: 0;
                        }
                        // background-color: $color-text;
                        .cell{
                            display: flex;
                            align-items: center;
                            padding: .5rem;
                            background-color: $color-text;
                            .msg{
                                &-icon{
                                    flex:0 0 2rem;
                                    width: 2rem;
                                    height: 2rem;
                                    text-align: center;
                                    line-height: 2rem;
                                    border-radius: 50%;
                                    background-color: #4e93ff;
                                    .iconfont{
                                        font-size: 1.75rem;
                                        color: $color-text;
                                    }
                                }
                                &-content{
                                    flex:1;
                                    margin-left: .5rem;
                                    .title{
                                        display: flex;
                                        align-items: center;
                                        justify-content: space-between;
                                        margin-bottom: .3rem;
                                        margin-top: .3rem;
                                        .notice{
                                            font-size: .75rem;
                                            letter-spacing: 1px;
                                            font-size: .8rem;
                                            font-weight: bold;
                                            color:$color-text-d;
                                        }
                                        .time{
                                            font-weight: 500;
                                            font-size: .6rem;
                                            color: $color-text-d;
                                        }
                                    }
                                    .desc{
                                        line-height: 18px;
                                        font-size: .6rem;
                                        color: $color-text-d;
                                    }
                                }
                            }
                        }
                        .del-msg{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            height: 100%;
                            width: 3rem;
                            font-size: .8rem;
                            // padding: 0 1rem 0 1rem;
                            background-color: #FE4444;
                            color:$color-text;
                        }
                    }
                }
            }
        }
    }
</style>
