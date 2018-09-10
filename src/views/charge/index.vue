<template>
    <transition name='slide' mode='out-in'>
        <div class="charge-wrapper">
             <v-header title='附近电站' text='首页' @back='back'>
                <i class="iconfont icon-jiantouzuo" slot='back'></i>
            </v-header>
            <!--搜索 -->
            <div class="search-wrapper">
                <p class="loc-city">芜湖市</p>
                <input type="text"
                    class="search"
                    placeholder="请输入充电站名称进行搜索"
                >
                <router-link to='/collect' tag='div'>
                    <i class="iconfont icon-shoucang"></i>
                    <span>收藏</span>
                </router-link>
            </div>
        </div>
    </transition>
</template>
<script>
    import vHeader from 'components/header'
    export default {
        name: 'charge',
        components: {
            vHeader
        },
        methods: {
            back () {
                this.$router.push({
                    path: '/userCenter'
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '~styles/variables.scss';
    .charge-wrapper{
        @include fixed;
        .search-wrapper{
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 2.4rem;
            padding: 0 15px;
            color:$color-text-d;
            background-color: #fff;
            .loc-city{
                font-size: .8rem;
            }
            .search{
                flex:1;
                font-size: .7rem;
                padding: 8px;
                margin:0 .7rem;
                border-radius: 4px;
                padding-left: 20px;
                outline: none;
                background-color: $color-background-d;
            }
            .icon-shoucang{
                color: #f5c026;
            }
            span {
                font-size: .7rem;
            }
        }
    }
</style>
