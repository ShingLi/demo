<template>
    <transition name='slide' mode='out-in'>
        <div class="set-wrapper">
            <v-header title='设置' text='返回' @back='back'>
                <i class="iconfont icon-jiantouzuo" slot='back'></i>
            </v-header>
            <div class="cell">
                <van-cell-group style="margin-bottom:1rem;">
                    <van-cell title="头像">
                        <img :src="userInfo.avatar" class="avatar">
                    </van-cell>
                </van-cell-group>
                <van-cell-group>
                    <van-cell title="用户名" :value="userInfo.nickname">
                    </van-cell>
                </van-cell-group>
                <van-cell-group>
                    <van-cell is-link to='/change-tel'>
                        <span slot='title'>手机号&nbsp;&nbsp;{{userInfo.tel}}</span>
                    </van-cell>
                </van-cell-group>
                <van-cell-group>
                    <van-cell title="密码设置" is-link @click='tips'></van-cell>
                </van-cell-group>
            </div>
        </div>
    </transition>
</template>
<script>
    import vHeader from 'components/header'
    import { Cell, CellGroup, Toast } from 'vant'
    export default {
        name: 'set',
        data () {
            return {
                userInfo: {
                    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80',
                    nickname: '玉伯',
                    tel: 13866353457
                }
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
            },
            tips () {
                Toast.fail('功能暂未开放')
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '~styles/variables';
    .set{
        &-wrapper{
            @include fixed;
            .cell{
                padding-top: 1rem;
                .avatar{
                    width: 44px;
                    height: 44px;;
                    border-radius: 50%;
                }
            }
        }
    }
</style>
