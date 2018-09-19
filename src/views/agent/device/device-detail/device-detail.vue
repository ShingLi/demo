<template>
    <transition name='slide' mode='out-in'>
        <div class="device-wrapper">
            <v-header title='设备详情'
                text='返回'
                @back='back'
                style='z-index:9'
                bg='agent'
            >
                <i class="iconfont icon-jiantouzuo" slot='back'></i>
                <div slot='right'>
                    <span class='change' @click='change' v-if='!isSave'>修改</span>
                    <span class='change' @click='save' v-else>保存</span>
                </div>
            </v-header>
            <div>
                <!-- 常规 -->
                <van-cell-group>
                    <van-cell title='常规属性'/>
                    <van-field
                        label='设备名称'
                        value='李成测试'
                        :readonly='readonly'
                    />
                    <van-field
                        label='设备地址'
                        value='安徽省芜湖市鸠江区北京中路辅助路'
                        :readonly='readonly'
                    />
                    <van-field
                        :disabled='readonly'
                        label='设备版本'
                        :value='versionText'
                        readonly
                        @click='versionPopup = true'
                    />
                    <van-cell>
                        <div slot='title' class='flex'>
                            <span>零钱支付</span>
                            <van-radio-group v-model="radio" :disabled='readonly'>
                                <van-radio name="1"> 是 </van-radio>
                                <van-radio name="2"> 否 </van-radio>
                            </van-radio-group>
                        </div>
                    </van-cell>
                    <van-cell>
                        <div slot='title' class='flex'>
                            <span>退款</span>
                            <van-radio-group v-model="radio2" :disabled='readonly'>
                                <van-radio name="1"> 是 </van-radio>
                                <van-radio name="2"> 否 </van-radio>
                            </van-radio-group>
                        </div>
                    </van-cell>
                </van-cell-group>
                <van-cell-group style='margin-top:.5rem'>
                    <van-cell>
                        <span slot='title'>监控属性(*不可修改)</span>
                    </van-cell>
                    <van-field
                        label='设备SN'
                        value='14768754236'
                        readonly
                    />
                    <van-field
                        label='设备状态'
                        value='离线'
                        readonly
                    />
                </van-cell-group>
                <van-cell-group v-if='isSave'>
                    <van-field>
                        <van-button
                            slot="button"
                            size="small"
                            type="primary"
                        >定位到当前位置</van-button>
                        <van-button
                            slot="button"
                            size="small"
                            type="primary"
                            style='margin-left:.8rem'
                            @click='onCancel'
                        >
                        取消编辑</van-button>
                    </van-field>
                </van-cell-group>
            </div>
            <!-- Popup -->
            <van-popup v-model='versionPopup' position='bottom'>
                <van-picker
                    :columns="columns"
                    show-toolbar
                    @cancel='versionPopup = false'
                    @confirm = 'onConfirm'
                ></van-picker>
            </van-popup>
        </div>
    </transition>
</template>
<script>
    import vHeader from 'components/header'
    import { Field, CellGroup, Radio, RadioGroup, Cell, Button, Popup, Picker } from 'vant'
    export default {
        name: 'device-detail',
        data () {
            return {
                radio: '2',
                radio2: '2',
                readonly: true,
                isSave: false,
                versionPopup: false,
                columns: ['DTU1.0', 'DTU2.0', 'DTU3.0', 'DTU4.0'],
                form: {}
            }
        },
        components: {
            vHeader,
            vanField: Field,
            vanCellGroup: CellGroup,
            vanRadio: Radio,
            vanRadioGroup: RadioGroup,
            vanCell: Cell,
            vanButton: Button,
            vanPopup: Popup,
            vanPicker: Picker
        },
        computed: {
            versionText () {
                let { version } = this.form
                if (version) {
                    return version
                }
                return 'Dtu1.0'
            }
        },
        methods: {
            back () {
                this.$router.go(-1)
            },
            change () {
                this.readonly = false
                this.isSave = true
            },
            onCancel () {
                this.readonly = true
                this.isSave = false
            },
            onConfirm (value) {
                this.versionPopup = false
                this.$set(this.form, 'version', value)
            },
            save () {
                this.isSave = false
                this.readonly = true
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '~styles/variables.scss';
    .van-radio-group{
        display: flex;
        flex:1;
    }
    .van-radio{
        margin-right: 1rem;
    }
    .device-wrapper{
        @include fixed;
        .flex{
            display: flex;
            span{
                display: flex;
                flex: 1;
                max-width: 90px;
            }
        }
        .change{
            color:#fff;
        }
    }
</style>
