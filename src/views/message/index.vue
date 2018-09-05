<template>
    <div class="message">
        <v-header title='我的消息' text='返回' @back='back'>
            <i class="iconfont icon-jiantouzuo" slot='back'></i>
            <i class="iconfont icon-calendar_icon" slot="right"></i>
        </v-header>
        <!--消息列表 -->

    </div>
</template>
<script>
    import vHeader from 'components/header'
    export default {
        name: 'message',
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
    .message{}
</style>
