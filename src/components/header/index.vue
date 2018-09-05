<template>
    <div class="header_wrapper">
        <div class="back" @click='$router.go(-1)'>
            <slot name='back'></slot>
            <span class="text" v-text='text'></span>
        </div>
        <div class="title" v-text='title'></div>
        <div class="right">
            <slot name='right'></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'v-header',
        props: {
            text: {
                type: String,
                default: ''
            },
            title: {
                type: String,
                default: ''
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '~styles/variables.scss';
    .header_wrapper{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        width: 100%;
        height: 2.2rem;
        line-height: 2.2rem;
        background: $color-background-line;
        .back{
            display: flex;
            align-items: center;
            font-size: 0;
            .iconfont {
                font-size: 1rem;
                color: $color-text;
            }
            .text{
                font-size: 1rem;
                color: $color-text;
            }
        }
        .title{
            position: absolute;
            top:50%;
            left: 50%;
            transform: translate(-50%,-50%);
            color:$color-text;
        }
        .right{
            i{
                color: $color-text;
                 font-size: 1rem;
            }
        }
    }
</style>
