<template>
    <transition name='slide' mode='out-in'>
        <div class="agent-wrapper">
            <header class="header">
                <v-header title='代理商首页'
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
                >
                    <i class="iconfont icon-setting-user" slot='icon'></i>
                </van-cell>
            </van-cell-group>
        </div>
    </transition>
</template>
<script>
    import vHeader from 'components/header'
    import { Cell, CellGroup, Toast} from 'vant'
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
            @include fixed;
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
        }
    }
</style>
