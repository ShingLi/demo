<template>
    <transition name='slide' mode='out-in'>
        <div class="balance-wrapper">
            <v-header title='余额' text='返回' @back='back'>
                <i class="iconfont icon-jiantouzuo" slot='back'></i>
            </v-header>
            <!-- main -->
            <img src="./balance.png" class="balance">
            <p class="m-text">账户余额</p>
            <p class="m-num">10000000000元</p>
            <router-link tag='div' class="recharge" to='/recharge'>充&nbsp;&nbsp;&nbsp;&nbsp;值</router-link>
            <router-link to ='/recharge-record' class="recharge-record" tag='div'>查看充值记录</router-link>
        </div>
    </transition>
</template>
<script>
    import vHeader from 'components/header'
    export default {
        name: 'balance',
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
    .balance{
        &-wrapper{
            text-align: center;
            @include fixed;
            .balance{
                margin-top: 2rem;
                width: 80%;
            }
            p{
                margin-bottom: .5rem;
                &.m-text{
                    font-size: 1rem;
                    color:$color-text-d;
                }
                &.m-num{
                    font-size: 1.2rem;
                    color:#e1523f;
                }
            }
            .recharge{
                width: 90%;
                height: 45px;
                margin:2rem auto 0;
                text-align: center;
                line-height: 45px;
                color:$color-text;
                border-radius: 3px;
                font-size: .8rem;
                border: 1px solid #4b0;
                background-color: #4b0;
            }
            .recharge-record{
                 width: 90%;
                height: 45px;
                margin:auto;
                text-align: center;
                line-height: 45px;
                color:#4e93ff;
                border-radius: 3px;
                font-size: .8rem;
            }
        }
    }
</style>
