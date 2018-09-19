<template>
    <transition name='slide' mode='out-in'>
        <div class="equipment">
            <v-header title='安装设备' text='返回' @back='back' style='z-index:9'>
                <i class="iconfont icon-jiantouzuo" slot='back'></i>
            </v-header>
            <Scroll class="scroll">
                <form @submit.prevent='submit'>
                    <div class="info">
                        <h4 class="desc">
                            <span></span>我的信息</h4>
                        <div>
                            <van-field
                                label="我的身份"
                                value= '代理商'
                                readonly
                            />
                            <van-field
                                label="我的编号"
                                value= '507'
                                readonly
                            />
                            <van-field
                                label="选择定位"
                                value= '507'
                                is-link
                                required
                                readonly
                            />
                        </div>
                        <h4 class="desc"><span></span>设备信息</h4>
                        <div>
                            <van-field
                                label="设备序列号"
                                value= '66666666666'
                                readonly
                            />
                            <van-field
                                label="主板型号"
                                value= '未知'
                                readonly
                            />
                            <van-field
                                label="DTU类型"
                                value= '电瓶车充电站GPS'
                                readonly
                            />
                            <van-field
                                label="DTU版本"
                                value= 'DTU版本1.0'
                                readonly
                            />
                            <van-field
                                label="设备类型"
                                value= '366十路充电站'
                                readonly
                            />
                            <van-field
                                label="类型"
                                value= '电瓶车充电站'
                                readonly
                            />
                            <van-field
                                label="设备硬件版本"
                                value= '电瓶车充电站'
                                readonly
                            />
                            <van-field
                                label="设备固件版本"
                                value= '电瓶车充电站'
                                readonly
                            />
                            <van-field
                                label="Boot版本"
                                value= '1.0'
                                readonly
                            />
                            <van-field
                                label="SN号"
                                placeholder='请输入SN号'
                                required
                                v-model.trim='form.sn'
                            />
                            <van-field
                                label="设备名称"
                                placeholder='请输入设备名称'
                                required
                                v-model.trim='form.deviceName'
                            />
                            <van-field
                                label="小区管理员"
                                placeholder='请选择'
                                required
                                readonly
                                is-link
                                :value= 'equipmentText'
                                @click='show = true'
                            />
                        </div>
                        <!-- 安装按钮 -->
                        <div class="btn">
                            <van-button type='primary' size='large' :loading='loading'>确认安装</van-button>
                        </div>
                        <div style="height:1px"></div>
                    </div>
                </form>
            </Scroll>
            <!-- 小区管理员Popup -->
            <van-popup v-model='show' position='bottom'>
                <van-picker
                    show-toolbar
                    :columns='columns'
                    @cancel='show = false'
                    @confirm = 'onequipmentConfirm'
                ></van-picker>
            </van-popup>
        </div>
    </transition>
</template>
<script>
    import vHeader from 'components/header'
    import Scroll from 'components/scroll/scroll'
    import { Field, Popup, Picker, Button } from 'vant'
    export default {
        name: 'install-equipment',
        data () {
            return {
                show: false,
                loading: false,
                columns: ['测试1', '测试3', '测试4'],
                form: {}
            }
        },
        components: {
            vHeader,
            Scroll,
            vanField: Field,
            vanPopup: Popup,
            vanPicker: Picker,
            vanButton: Button
        },
        computed: {
            equipmentText () {
                let { equipment } = this.form
                if (equipment) {
                    return equipment
                }
                return ''
            }
        },
        methods: {
            back () {
                this.$router.go(-1)
            },
            onequipmentConfirm (value) {
                this.show = false
                this.$set(this.form, 'equipment', value)
            },
            submit () {
                this.loading = true
                // Toast('表单提交')
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '~styles/variables.scss';
    .equipment{
        @include fixed;
        .scroll{
            position: absolute;
            top:2.2rem;
            left:0;
            width: 100%;
            bottom:0;
            // padding-top: 5%;
            // padding-bottom: 2rem;
            .info{
                // padding: 0 5%;
                .desc{
                    width: 90%;
                    padding: 5% 1%;
                    text-indent: .5rem;
                    line-height: 1;
                    position: relative;
                    color: $color-text-d;
                    font-size: .8rem;
                    span{
                        margin-right: .2rem;
                        border-left: .2rem solid #26bfb7;
                    }
                }
            }
        }
        .btn{
            width: 90%;
            margin: 2rem auto;
        }
    }
</style>
