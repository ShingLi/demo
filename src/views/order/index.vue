<template>
    <transition name='slide' mode='out-in'>
        <div class="order-wrapper">
            <v-header
                class="v-header"
                title='我的订单'
                @back='back'
            >
                <div slot='back'>
                    <i class="iconfont icon-jiantouzuo"></i>
                </div>
            </v-header>
            <Scroll class="scroll">
                <van-cell-group class="top">
                    <van-cell
                        is-link
                        v-for='(n,index) in 4'
                        :key='index'
                        @click.native='todetail(index)'
                >
                        <span slot='title'>什么车队等候情况</span>
                    </van-cell>
                </van-cell-group>
            </Scroll>
        </div>
    </transition>
</template>
<script>
    import vHeader from 'components/header'
    import Scroll from 'components/scroll/scroll'
    import { Cell, CellGroup } from 'vant'
    export default {
        name: 'myorder',
        components: {
            vHeader,
            Scroll,
            vanCell: Cell,
            vanCellGroup: CellGroup
        },
        methods: {
            back () {
                this.$router.go(-1)
            },
            todetail (id) {
                this.$router.push({
                    path: `/myorder/${id}`
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '~styles/variables.scss';
    .order-wrapper{
        @include fixed;
        .top{
            margin-top:10px;
        }
        .scroll{
            position: absolute;
            top:2.2rem;
            left: 0;
            width: 100%;
            bottom: 0;
            overflow: hidden;
        }
    }
</style>
