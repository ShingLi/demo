<template>
    <div class="full">
        <lottie :options="defaultOptions" :height="height" :width="width" v-on:animCreated="handleAnimation"/>
    </div>
</template>
<script>
    import Lottie from 'vue-lottie'
    import * as animationData from './loading.json'
    export default {
        name: 'loading',
        props: {
            width: {
                type: Number,
                default: 0
            },
            height: {
                type: Number,
                default: 0
            }
        },
        data () {
            return {
                defaultOptions: { animationData: animationData },
                animationSpeed: 1,
                anim: {}
            }
        },
        components: {
            Lottie
        },
        methods: {
            handleAnimation (anim) {
                this.anim = anim
            }
        }
    }
</script>
<style lang="scss" scoped>
    .full{
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%)
    }
</style>
