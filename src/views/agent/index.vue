<template>
    <transition name='slide' mode='out-in'>
        <div class="agent-wrapper">
            <header class="header">
                <v-header title='代理商'
                    text='返回'
                    @back='back'
                    style="background:none"
                    >
                    <i class="iconfont icon-jiantouzuo" slot='back'></i>
                </v-header>
                <h4 class="total-text">今日总收益(元)</h4>
                <p class="total-money">0 <span>元</span></p>
                <ul class="featuers-desc">
                    <li class="item">
                        <span>投币</span>
                        <b>0</b>
                    </li>
                    <li class="item">
                        <span>刷卡</span>
                        <b>0</b>
                    </li>
                    <li class="item">
                        <span>手机</span>
                        <b>0</b>
                    </li>
                    <li class="item">
                        <span>虚拟卡</span>
                        <b>0</b>
                    </li>
                </ul>
            </header>
            <van-cell-group>
                <van-cell
                    title='绑定设备'
                    label='请扫描设备上的二维码'
                    is-link
                    @click='Tips'
                >
                    <i class="iconfont icon-saoma" slot='icon'></i>
                </van-cell>
                <van-cell
                    title='小区管理员'
                    label='点击进入查看小区管理员详情'
                    is-link
                    to='/community'
                >
                    <i class="iconfont icon-setting-user" slot='icon'></i>
                </van-cell>
            </van-cell-group>
            <!-- featuers 按照功能选择 -->
            <div class="featuers">
                <router-link tag='div' to='/device' class="item">
                    <div class="icon-wrapper z1">
                        <svg class="icon icon-mokuai" aria-hidden="true"><use xlink:href="#icon-mokuai"></use></svg>
                    </div>
                    <h4 class="title">设备管理</h4>
                    <p class="desc">点击进入管理您的设备</p>
                </router-link>
                <router-link tag='div' to='' class="item">
                    <div class="icon-wrapper z2">
                        <svg class="icon icon-dingdanchaxun" aria-hidden="true"><use xlink:href="#icon-dingdanchaxun"></use></svg>
                    </div>
                    <h4 class="title">订单查询</h4>
                    <p class="desc">查看您的所有订单详情</p>
                </router-link>
                <router-link tag='div' to='/chart' class="item">
                    <div class="icon-wrapper z3">
                        <svg class="icon icon-tongjibaobiao" aria-hidden="true"><use xlink:href="#icon-tongjibaobiao"></use></svg>
                    </div>
                    <h4 class="title">统计报表</h4>
                    <p class="desc">图表查看您的经营状态</p>
                </router-link>
                <router-link tag='div' to='/user-center' class="item">
                    <div class="icon-wrapper z4">
                        <svg class="icon icon-jilu" aria-hidden="true"><use xlink:href="#icon-jilu"></use></svg>
                    </div>
                    <h4 class="title">个人中心</h4>
                    <p class="desc">管理您的个人资料及钱包</p>
                </router-link>
            </div>
        </div>
    </transition>
</template>
<script>
    import vHeader from 'components/header'
    import { Cell, CellGroup, Toast } from 'vant'
    import 'assets/agent/font/iconfont'
    export default {
        name: 'agent-index',
        data () {
            return {

            }
        },
        metaInfo: {
            title: '代理商管理'
        },
        components: {
            vHeader,
            vanCellGroup: CellGroup,
            vanCell: Cell
        },
        methods: {
            back () {
                this.$router.go(-1)
            },
            Tips () {
                Toast('抱歉，该功能未开放！')
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '~styles/variables.scss';
    .van-cell{
        align-items: center !important;
        .iconfont{
            display: inline-block;
            margin-right: .5rem;
            font-size: 1.3rem;
            color: #3C8CE7;
        }
    }
    .agent{
        &-wrapper{
            // @include fixed;
            min-height: 100%;
            background-color: $color-background-d;
            .header{
                text-align: center;
                color:#fff;
                background: linear-gradient(#55c2fa, #4e93ff);
                // background: linear-gradient(#40e399, #26bfb7);
                .total{
                    &-text{
                        font-size: 1rem;
                        margin: .7rem 0;
                    }
                    &-money{
                        font-size: 2rem;
                        span{
                            font-size: .5rem;
                        }
                    }
                }
                .featuers-desc{
                    display: flex;
                    margin-top: .7rem;
                    .item{
                        flex:1;
                        display: flex;
                        flex-flow: column;
                        justify-content: space-around;
                        padding-bottom: .4rem;
                        font-size: .8rem;
                        b{
                            display: inline-block;
                            margin-top: .3rem;
                        }
                    }
                }
            }
            .featuers{
                width: 90%;
                margin: 1rem auto;
                display: flex;
                flex-wrap: wrap;
                .item{
                    width: 50%;
                    padding:1rem 0;
                    border-top: 1px solid #ccc;
                    border-left: 1px solid #ccc;
                    text-align: center;
                    color:$color-text-d;
                    background: #fff;
                    &:nth-child(2){
                        border-right: 1px solid #ccc;
                    }
                    &:nth-child(3){
                        border-bottom: 1px solid #ccc;
                    }
                    &:last-child{
                        border-right: 1px solid #ccc;
                        border-bottom: 1px solid #ccc;
                    }
                    .icon-wrapper{
                        width: 2.2rem;
                        height: 2.2rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 50%;
                        margin: auto;
                        color: #fff;
                        &.z1{
                            background: -webkit-linear-gradient(left,#ff6695, #ffa26e);
                        }
                        &.z2{
                            background: -webkit-linear-gradient(left,#26bfb7, #40e399);
                        }
                        &.z3{
                            background: -webkit-linear-gradient(left,#3a28b0, #b564d2);
                        }
                        &.z4{
                            background: -webkit-linear-gradient(left,#55c2fa, #4e93ff);
                        }
                        .icon{
                            width: 1.1rem;
                            height: 1.1rem;;
                            fill: currentColor;
                        }
                    }
                    .title{
                        margin:.5rem 0;
                        font-size: .7rem;
                    }
                    .desc{
                        font-size: .6rem;
                    }
                }
            }
        }
    }
</style>
