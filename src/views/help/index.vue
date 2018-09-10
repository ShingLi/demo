<template>
    <transition name='slide' mode='out-in'>
        <div class="help-wrapper">
            <v-header title='提示' text='返回' @back='back'>
                <i class="iconfont icon-jiantouzuo" slot='back'></i>
            </v-header>
            <img src="./offLine.png" alt="">
            <p>即将上线，敬请期待</p>
        </div>
    </transition>
</template>
<script>
    import vHeader from 'components/header'
    export default {
        name: 'help',
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
    .help-wrapper{
        @include fixed;
        text-align: center;
        img{
            width: 80%;
            margin-top:20%;
            // margin-left: 10%;
        }
        p{
            font-size: .8rem;
            color: #e1523f;
        }
    }
</style>
