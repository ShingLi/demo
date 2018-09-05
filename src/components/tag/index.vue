<template>
    <div class="tag-wrapper">
        <p class="tag">
            <i class="iconfont" :class="icon"></i>
            <span class='text'>常用功能</span>
        </p>
    </div>
</template>
<script>
    export default {
        name: 'tag',
        props: {
            icon: {
                type: String,
                default: ''
            }
        }
    }
</script>
<style lang="scss" scoped>
    .tag{
        &-wrapper{
            .tag{
                width: 5rem;
                height: 1.1rem;
                line-height: 1.1rem;
                color: #fff;
                font-size: .8rem;
                position: relative;
                margin: 0 0 1rem 1.3rem;
                text-align: center;
                background-color: #32cfaa;
                &::before{
                    content: "";
                    position: absolute;
                    left: -1.3rem;
                    top: 0;
                    width: 10px;
                    height: 1.1rem;
                    background-color: #32cfaa;
                }
                .text{
                    font-size: .7rem;
                }
            }
        }
    }
</style>
