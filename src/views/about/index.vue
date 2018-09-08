<template>
    <transition name='slide' mode='out-in'>
        <div class="about-wrapper">
            <v-header title='关于我们' text='返回' @back='back'>
                <i class="iconfont icon-jiantouzuo" slot='back'></i>
            </v-header>
            <!-- 版本号 -->
            <div class="logo-wrapper">
                <img src="./logo_2.png">
                <p>版本号{{version}}</p>
            </div>
            <!--意见反馈 -->
            <van-cell-group>
                <van-cell title="意见反馈" is-link to ='/feedback'/>
            </van-cell-group>
            <van-cell-group>
                <van-cell title="版权声明" is-link  to='/copyright'/>
            </van-cell-group>
            <van-cell-group>
                <van-cell title="免责声明" is-link  />
            </van-cell-group>
            <p class="copyright">芜湖摩灿智能有限公司运营</p>
        </div>
    </transition>
</template>
<script>
    import vHeader from 'components/header'
    import { Cell, CellGroup } from 'vant'
    export default {
        name: 'about',
        data () {
            return {
                version: 'v3.0.0'
            }
        },
        components: {
            vHeader,
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
    .about{
        &-wrapper{
            @include fixed;
            .logo-wrapper{
                width: 100%;
                text-align: center;
                padding: 3rem 0;
                img{
                    width: 4rem;
                    height: 4rem;
                }
                p{
                    margin-top:.7rem;
                    font-size: .75rem;
                    color: #808080;
                }
            }
            .copyright{
                position: fixed;
                bottom: 3rem;
                width: 100%;
                text-align: center;
                color: #bbbbbb;
                font-size: .8rem;
            }
        }
    }
</style>
