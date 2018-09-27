<template>
    <transition name='slide' mode='out-in'>
        <div class="order-list">
            <v-header title='订单查询'
                text='返回'
                @back='back'
                bg='agent'
            >
                <i class="iconfont icon-jiantouzuo" slot='back'></i>
            </v-header>
            <div class="main">
                <router-view/>
            </div>
            <div class="footer">
                <router-link tag='a' to='' class="anchor">
                    <i class="iconfont icon-qian"></i>
                    <span>投币</span>
                </router-link>
                <router-link tag='a' to='' class="anchor">
                    <i class="iconfont icon-qia"></i>
                    <span>刷卡</span>
                </router-link>
                <router-link tag='a' to='' class="anchor">
                    <i class="iconfont icon-icon--"></i>
                    <span>手机</span>
                </router-link>
                <router-link tag='a' to='' class="anchor">
                    <i class="iconfont icon-iconset0451"></i>
                    <span>虚拟卡</span>
                </router-link>
            </div>
        </div>
    </transition>
</template>
<script>
    import vHeader from 'components/header'
    export default {
        name: 'order',
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
    .order-list{
        @include fixed;
        .main{
            position: absolute;
            top:2.2rem;
            left: 0;
            width: 100%;
            bottom: 50px;
            overflow: hidden;
        }
        .footer{
            position: fixed;
            left: 0;
            width: 100%;
            bottom: 0;
            display: flex;
            background-color: #fff;
            .anchor{
                flex:1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                height: 50px;
                text-align: center;
                i{
                    font-size: 25px;
                }
                span{
                    display: block;
                    margin-top: 5px;
                    font-size: 10px;
                }
            }
        }
    }
</style>
