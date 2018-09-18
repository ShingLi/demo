<template>
    <transition name='slide' mode='out-in'>
        <div class="install-wrapper">
            <v-header title='小区管理员'
                text='返回'
                @back='back'
                bg='agent'
                style='z-index:9'
            >
                <i class="iconfont icon-jiantouzuo" slot='back'></i>
            </v-header>
            <!-- 安装人员列表 -->
            <Scroll class="scroll">
                <div class="zzzz">
                    <van-collapse v-model="activeName" accordion>
                        <template v-for='(n,index) in 20'>
                            <van-collapse-item title="李成小区管理员" :name="index+1" icon='contact' :key='index'>
                                <ul>
                                    <li class="item">
                                        <label for="">联系方式:</label>
                                        <p>13866353457</p>
                                    </li>
                                    <li class="item">
                                        <label for="">电子邮箱:</label>
                                        <p>745573545@qq.com</p>
                                    </li>
                                    <li class="item">
                                        <label for="">公司名称:</label>
                                        <p>13866353457</p>
                                    </li>
                                    <li class="item">
                                        <label for="">小区地点:</label>
                                        <p>13866353457</p>
                                    </li>
                                </ul>
                            </van-collapse-item>
                        </template>
                    </van-collapse>
                </div>
            </Scroll>
        </div>
    </transition>
</template>
<script>
    import vHeader from 'components/header'
    import Scroll from 'components/scroll/scroll'
    import { Collapse, CollapseItem } from 'vant'
    export default {
        name: 'install',
        data () {
            return {
                activeName: '1'
            }
        },
        components: {
            vHeader,
            Scroll,
            vanCollapse: Collapse,
            vanCollapseItem: CollapseItem
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
    .van-collapse-item {
        margin-bottom: .5rem;
        &:last-child{
            margin-bottom: 0;
        }
    }
    .install{
        &-wrapper{
            @include fixed;
            .scroll{
                position: absolute;
                top:2.2rem;
                left: 0;
                width: 100%;
                bottom:0;
                .zzzz{
                    margin:0 .7rem;
                    padding-top: .7rem;
                    padding-bottom: .7rem;
                }
                .item{
                    display: flex;
                    align-items: center;
                    line-height: 22px;
                    margin-bottom: 5px;
                    color:$color-text-d;
                    font-size: .7rem;
                    label{
                        display: inline;
                        margin-right: 15px;
                    }
                }
            }
        }
    }
</style>
