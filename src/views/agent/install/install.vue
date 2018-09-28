<template>
    <transition name='slide' mode='out-in'>
        <div class="install-wrapper">
            <v-header title='安装人员管理'
                text='返回'
                @back='back'
                bg='agent'
            >
                <i class="iconfont icon-jiantouzuo" slot='back'></i>
            </v-header>
            <!-- 安装人员列表 -->
            <Scroll class="scroll">
                <div>
                </div>
            </Scroll>
        </div>
    </transition>
</template>
<script>
    import vHeader from 'components/header'
    import Scroll from 'components/scroll/scroll'
    // import { Collapse, CollapseItem } from 'vant'
    export default {
        name: 'install',
        components: {
            vHeader,
            Scroll
            // vanCollapse: Collapse,
            // vanCollapseItem: CollapseItem
        },
        data () {
            return {
                activeName: '1'
            }
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
    .install{
        &-wrapper{
            @include fixed;
            .scroll{
                position: absolute;
                top:2.2rem;
                left: 0;
                width: 100%;
                bottom:0;
            }
        }
    }
</style>
