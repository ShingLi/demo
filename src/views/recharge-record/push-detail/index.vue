<template>
    <transition name='slide' mode='out-in'>
        <div class="recharge-detail">
            <v-header title='消息详情' text='返回' @back='back'>
                <i class="iconfont icon-jiantouzuo" slot='back'></i>
            </v-header>
            <ul class="list">
                <li class="list-item">
                    <h3>+1元
                        <small>赠送0元</small>
                    </h3>
                    <small>2018-08-31 15:30:16</small>
                    <p class="desc">尊敬的用户您好，充值已完成，感谢您的使德国德国的用~</p>
                    <div class="info">
                        <b>充值时间:</b>
                        <p>2018-08-31 15:30:16</p>
                    </div>
                    <div class="info">
                        <b>充值方式:</b>
                        <p>微信支付</p>
                    </div>
                    <div class="info">
                        <b>交易单号:</b>
                        <p>20180831153016182</p>
                    </div>
                </li>
            </ul>
        </div>
    </transition>
</template>
<script>
    import vHeader from 'components/header'
    export default {
        name: 'recharge-detail',
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
    .recharge-detail{
        @include fixed;
        .list{
            padding: .75rem;
            line-height: 1.25rem;
            &-item{
                padding: .75rem .5rem;
                border-radius: 4px;
                background-color: #fff;
                h3{
                    font-size: .8rem;
                    letter-spacing: 1px;
                    color: #e1523f;
                    font-weight: bold;
                    font-weight: 700;
                    small{
                        margin-left: .7rem;
                        display: inline-block;
                        font-weight: 400;
                        font-size: .6rem;
                        color: #e1523f;

                    }
                }
                small{
                    margin-bottom: 0.25rem;
                    display: block;
                    font-size: .7rem;
                    color:$color-text-d;
                }
                .desc{
                    font-size: .75rem;
                    color: #808080;
                }
                .info{
                    display: flex;
                    line-height: 1.5rem;
                    b{
                        font-size: .8rem;
                        font-weight:bold;
                        color:#333
                    }
                    p{
                        margin-left: .5rem;
                        font-size: .8rem;
                        color:$color-text-d;
                    }
                }
            }
        }
    }
</style>
