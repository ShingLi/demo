<template>
    <transition name='slide' mode='out-in'>
        <div class="order-wrapper">
            <v-header
                class="v-header"
                title='车位信息'
                @back='back'
            >
                <div slot='back'>
                    <i class="iconfont icon-jiantouzuo"></i>
                </div>
            </v-header>
            <Scroll class="scroll">
                <div></div>
            </Scroll>
        </div>
    </transition>
</template>
<script>
    import vHeader from 'components/header'
    import Scroll from 'components/scroll/scroll'
    import { Cell, CellGroup } from 'vant'
    export default {
        name: 'bindcarbarn',
        components: {
            vHeader,
            Scroll,
            vanCell: Cell,
            vanCellGroup: CellGroup
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
