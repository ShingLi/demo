<template>
    <div class="slider" ref='slider' :style='styleTop'>
        <div class="slider-group" ref='sliderGroup'>
            <slot></slot>
        </div>
    </div>
</template>
<script>
    import BScroll from 'better-scroll'
    export default {
        name: 'slider',
        props: {
            currentIndex: {
                type: Number,
                default: 0
            },
            top: {
                type: Number,
                default: 0
            }
        },
        computed: {
            styleTop () {
                return `top:${this.top}px`
            }
        },
        watch: {
            currentIndex (newVal) {
                this.slider.goToPage(newVal, 0, 1000)
            }
        },
        mounted () {
            setTimeout(() => {
                this._initSlider()
                this._setSliderWidth()
            }, 26)
        },
        methods: {
            _initSlider () {
                this.slider = new BScroll(this.$refs.slider, {
                    scrollX: true,
                    scrollY: false,
                    snap: {
                        threshold: 0.5,
                        momentum: false
                    },
                    bounce: false
                })
                this.slider.on('scrollEnd', () => {
                    let pageIndex = this.slider.getCurrentPage().pageX
                    this.$emit('switchItem', pageIndex)
                })
            },
            _setSliderWidth () {
                this.children = this.$refs.sliderGroup.children
                let width = 0
                let sliderWidth = this.$refs.slider.clientWidth
                for (let i = 0; i < this.children.length; i++) {
                    let child = this.children[i]
                    child.style.width = sliderWidth + 'px'
                    width += sliderWidth
                }
                this.$refs.sliderGroup.style.width = width + 'px'
            }
        }
    }
</script>
<style lang="scss" scoped>
    .slider{
        position: fixed;
        left: 0;
        width: 100%;
        bottom: 0;
        overflow: hidden;
        .slider-group{
            position: absolute;
            width: 100%;
            top: 0;
            bottom: 0;
        }
    }
</style>
