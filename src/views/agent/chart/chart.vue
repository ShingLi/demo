<template>
    <transition name='slide' mode='out-in'>
        <div class="chart-wrapper">
            <v-header title='统计报表'
                text='返回'
                @back='back'
                style='z-index:9'
                bg='agent'
            >
                <i class="iconfont icon-jiantouzuo" slot='back'></i>
            </v-header>
            <!-- 主体部分 -->
            <scroll class="scroll">
                <div>
                    <div class="date">
                        <i class="iconfont icon-rili" @click='showDatePopup'></i>
                        <span>2018年 7月</span>
                    </div>
                    <tag text='收入趋势' bg='agent' icon='icon-qushi'></tag>
                </div>
            </scroll>
            <van-popup
                v-model='datetimePopup'
                position='bottom'
            >
                <van-datetime-picker
                    v-model="currentDate"
                    type="year-month"
                    :formatter="formatter"
                    :min-date="minDate"
                    :max-date="maxDate"
                    @cancel='datetimePopup = false'
                    @confirm = 'onConfirm'
                />
            </van-popup>
        </div>
    </transition>
</template>
<script>
    import vHeader from 'components/header'
    import Scroll from 'components/scroll/scroll'
    import Tag from 'components/tag'
    import { Popup, DatetimePicker } from 'vant'

    export default {
        name: 'chart',
        data () {
            return {
                datetimePopup: false,
                currentDate: new Date(),
                minDate: new Date(2015, 1, 1),
                maxDate: new Date(),
                form: {}
            }
        },
        components: {
            vHeader,
            Scroll,
            vanPopup: Popup,
            vanDatetimePicker: DatetimePicker,
            Tag
        },
        methods: {
            back () {
                this.$router.go(-1)
            },
            showDatePopup () {
                this.datetimePopup = true
            },
            formatter (type, value) {
                if (type === 'year') {
                    return `${value}年`
                } else if (type === 'month') {
                    return `${value}月`
                }
                return value
            },
            onConfirm (values) {
                values = values.toLocaleDateString()
                console.log(values)
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "~styles/variables.scss";
    .chart {
        &-wrapper {
            @include fixed;
            background-color: #fff;
            .scroll {
                position: absolute;
                top: 2.2rem;
                left: 0;
                width: 100%;
                bottom: 0;
                overflow: hidden;
                .date {
                    display: flex;
                    align-content: center;
                    justify-content: center;
                    padding-top: 0.3rem;
                    margin-bottom: .5rem;
                    // color:$color-text-d;
                    .iconfont {
                        display: inline-block;
                        vertical-align: top;
                        margin-right: 0.6rem;
                        font-size: 1.1rem;
                        color: $color-text-d;
                    }
                    span {
                        line-height: 25px;
                        vertical-align: top;
                    }
                }
            }
        }
    }
</style>
