<template>
    <transition name='slide' mode='out-in'>
        <div class="statement-wrapper">
            <v-header title='免责声明' text='返回' @back='back'>
                <i class="iconfont icon-jiantouzuo" slot='back'></i>
            </v-header>
            <ul class="statement-list">
                <li class="copy-statement">免责声明</li>
                <li class="rule" v-for='(rule,index) in statement' :key='index'>
                    <i class="circle"></i>
                    <p class="desc" v-text='rule.descriable'></p>
                </li>
            </ul>
            <p class="copyright">芜湖摩灿智能有限公司运营</p>
        </div>
    </transition>
</template>
<script>
    import vHeader from 'components/header'
    export default {
        name: 'disclaimer',
        data () {
            return {
                statement: [
                    {
                        descriable: '电站每个插口只允许一台电动车充电，请不要接其他负载，以免断电保护；如因使用者操作不当引起的一切损失及后果由使用者自行承担，并赔偿电站相应损失。'
                    },
                    {
                        descriable: '仅为使用者提供电动车充电便利，不承担保管及任何安全保障，请在离开时锁好爱车；如出现损坏、遗失、被盗等情况，电站均不承担经济和法律责任。'
                    },
                    {
                        descriable: '请严格按照操作指南进行充电，如因使用者操作不当引发的一切损失及后果由使用者自行承担，并赔偿电站相应损失。'
                    }
                ]
            }
        },
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
    .statement{
        &-wrapper{
            @include fixed;
            .copyright{
                position: relative;
                margin-top:-2.2rem;
                // bottom: 3rem;
                height: 2.2rem;
                line-height: 2.2rem;
                width: 100%;
                text-align: center;
                color: #bbbbbb;
                font-size: .7rem;
            }
        }
        &-list{
            min-height: calc(100% - 2.2rem );
            padding-bottom: 2.2rem;
            @include clearfix;
            .copy-statement{
                height: 2rem;
                line-height: 2rem;
                padding-left: 1rem;
                color:$color-text-d;
            }
            .rule{
                display: flex;
                align-items: flex-start;
                padding: .8rem;
                background-color: #fff;
                .circle{
                    display: inline-block;
                    flex:0 0 10PX;
                    width: 10PX;
                    height: 10PX;
                    margin-top: 5px;
                    border-radius: 50%;
                    background-color:$color-background;
                }
                .desc{
                    flex:1;
                    line-height: 25Px;
                    margin-left: .5rem;
                    font-size: .7rem;
                    color:$color-text-d;
                }
            }
        }
    }
</style>
