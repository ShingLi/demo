<template>
    <transition name='slide' mode='out-in'>
        <div class="statement-wrapper">
            <v-header title='版权声明' text='返回' @back='back'>
                <i class="iconfont icon-jiantouzuo" slot='back'></i>
            </v-header>
            <p class="copyright">芜湖摩灿版权声明</p>
            
        </div>
    </transition>
</template>
<script>
    import vHeader from 'components/header'
    export default {
        name: 'copyright',
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
                height: 2.2rem;
                line-height: 2.2rem;
                padding-left: 1.2rem;
                font-size: .9rem;
                color: #808080;
            }
        }
    }
</style>
