<template>
    <transition name='slide' mode='out-in'>
        <div class="msg-wrapper">
            <v-header title='消息详情' text='返回' @back='back'>
                <i class="iconfont icon-jiantouzuo" slot='back'></i>
            </v-header>
            <ul>
                <li>
                    <h3 class="title">洗车成功通知</h3>
                    <p class="time">2018-08-09 14:26:43</p>
                    <p class="desc">
                        您好，您于2018-08-09 14:26:43.975在2.0洗车机测试充电1.3元，洗车水量为13.00升水,洗车成功，请到余额中查看,谢谢使用
                    </p>
                </li>
            </ul>
        </div>
    </transition>
</template>
<script>
    import vHeader from 'components/header'
    export default {
        name: 'msg-detail',
        components: {
            vHeader
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
    .msg-wrapper{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        bottom: 0;
        z-index: 99;
        background-color: $color-background-d;
        ul{
            padding: .75rem;
            li{
                padding: .75rem .55rem;
                border-radius: 3px;
                line-height: 1.25rem;
                color:$color-text-d;
                background-color: #fff;
                .title{
                    font-size: .8rem;
                    letter-spacing: 1px;
                    font-weight: bold
                }
                .time{
                    font-size: .6rem;
                    margin-bottom: .25rem;
                }
                .desc{
                    font-size: .7rem;
                    color: #808080;
                }
            }
        }

    }
</style>
