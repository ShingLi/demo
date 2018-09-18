<template>
    <transition name='slide' mode="out-in">
        <div class="agent-center">
            <v-header title='代理商'
                text='返回'
                @back='back'
                bg='agent'
            >
                <i class="iconfont icon-jiantouzuo" slot='back'></i>
            </v-header>
            <div class="cell-wrapper">
                <van-cell-group>
                    <van-cell
                        title="账户密码管理"
                        is-link
                        to='/pwd'
                    >
                    <svg class="icon icon-zhanghu blueColor" aria-hidden="true" slot='icon'>
                        <use xlink:href="#icon-zhanghu"></use>
                    </svg>
                    </van-cell>
                    <van-cell
                        title="添加小区管理员"
                        is-link
                        to='/addSubAccount'
                    >
                        <svg class="icon icon-tianjiaren blueColor" aria-hidden="true" slot='icon'><use xlink:href="#icon-tianjiaren"></use></svg>
                    </van-cell>
                    <van-cell
                        title="安装人员管理"
                        is-link
                        to='/install'
                    >
                        <svg class="icon icon-admin blueColor" aria-hidden="true" slot='icon'><use xlink:href="#icon-admin"></use></svg>
                    </van-cell>
                </van-cell-group>
            </div>
        </div>
    </transition>
</template>
<script>
    import vHeader from 'components/header'
    import { Cell, CellGroup } from 'vant'
    export default {
        name: 'user-center',
        components: {
            vHeader,
            vanCellGroup: CellGroup,
            vanCell: Cell
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
    .agent-center{
        @include fixed;
        .cell{
            &-wrapper{
                margin-top:2rem;
                .icon{
                    width: 1rem;
                    height: 1rem;
                    margin-right: .5rem;
                    fill: currentColor;
                    color: #3C8CE7;
                    use{
                        font-size: 1rem;
                    }
                }
            }
        }
    }
</style>
