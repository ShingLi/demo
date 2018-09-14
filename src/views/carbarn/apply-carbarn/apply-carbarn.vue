<template>
    <transition name='slide' mode='out-in'>
        <div class="apply-wrapper">
            <v-header title='申请车位' text='' @back='back'>
                <i class="iconfont icon-jiantouzuo" slot='back'></i>
            </v-header>
            <div class='panel'>
                <form @submit.prevent='submit'>
                    <van-cell-group>
                        <van-field
                            label='姓名'
                            required
                            type='text'
                            v-model='data.name'
                        />
                        <van-field
                            label='手机号'
                            type='tel'
                            required
                            v-model='data.tel'
                        />
                        <van-field
                            label='车位类型'
                            readonly
                            required
                            placeholder='请选择车位类别'
                            :value='carText'
                            @click='showPickerCarBarnPopup =true'
                        />
                        <van-field
                            label='租赁时间'
                            readonly
                            required
                            placeholder='请选择时间'
                            :value='leaseTimeText'
                            @click='showTimePopup = true'
                        />
                        <van-field
                            v-if='isShowCharge'
                            label='充电站'
                            readonly
                            required
                            placeholder='不需要'
                            :value='needText'
                            @click='showNeedPopup = true'
                        />
                        <van-field
                            label='收货地址'
                            readonly
                            required
                            placeholder='选择省 / 市 / 区'
                            :value='areaText'
                            @click='showAreaPopup = true'
                        >
                        </van-field>
                    </van-cell-group>
                    <van-field
                            autosize
                            rows="5"
                            required
                            type="textarea"
                            maxlength="200"
                            label='详细地址'
                            placeholder='用于邮寄门禁卡，请务必认真填写！'
                        />
                    <van-cell-group class="btn-wrapper">
                        <van-button size='large' type='primary' class="btn">确定申请</van-button>
                    </van-cell-group>
               </form>
               <!-- 车位类型 -->
                <van-popup
                    v-model='showPickerCarBarnPopup'
                    position='bottom'
                >
                    <van-picker
                        show-toolbar
                        :loading='!carBarnLoaded'
                        :columns='colCarBarn'
                        @cancel='showPickerCarBarnPopup = false'
                        @confirm='onCarBarnConfirm'
                    />
                </van-popup>
                <!-- 租车时间 -->
                <van-popup v-model='showTimePopup' position='bottom'>
                    <van-picker
                        show-toolbar
                        :columns='colLeaseTime'
                        @cancel='showTimePopup = false'
                        @confirm='onTimeConfrim'
                    />
                </van-popup>
                <!-- 是否需要充电站 -->
                <van-popup v-model="showNeedPopup" position='bottom'>
                    <van-picker
                        show-toolbar
                        :columns='colNeed'
                        @cancel='showNeedPopup = false'
                        @confirm='onNeedConfirm'
                    />
                </van-popup>
                <!-- 收货地址 -->
                <van-popup v-model="showAreaPopup" position='bottom'>
                    <van-area
                        :loading='!areaListLoaded'
                        :area-list="areaList"
                        :value="data.areaCode"
                        @cancel='showAreaPopup = false'
                        @confirm='onAreaConfirm'
                    />
                </van-popup>
            </div>
        </div>
    </transition>
</template>
<script>
    import vHeader from 'components/header'
    import areaList from './area'
    import { Cell, CellGroup, Field, AddressEdit, Button, Picker, Popup, Area, Toast } from 'vant'
    import { isObj } from 'utils/featuers'
    const leaseTime = ['一年', '两年', '三年']
    const carbarn = ['摩托车车位', '电动车车位', '飞车车位']
    export default {
        name: 'apply-carbarn',
        data () {
            return {
                data: {},
                areaList,
                colCarBarn: [], // 车位类型
                colLeaseTime: [], // 租赁时间
                colNeed: ['不需要', '需要'],
                showTimePopup: false,
                showNeedPopup: false,
                showPickerCarBarnPopup: false,
                showAreaPopup: false,
                isShowCharge: false
            }
        },
        created () {
            this.colCarBarn = carbarn
            this.colLeaseTime = leaseTime
        },
        components: {
            vHeader,
            vanCellGroup: CellGroup,
            vanCell: Cell,
            vanField: Field,
            vanAddressEdit: AddressEdit,
            vanButton: Button,
            vanPicker: Picker,
            vanPopup: Popup,
            vanArea: Area
        },
        computed: {
            carBarnLoaded () {
                return this.colCarBarn.length
            },
            areaListLoaded () {
                return isObj(this.areaList) && Object.keys(this.areaList).length
            },
            carText () {
                const { carBarn } = this.data
                if (carBarn !== undefined) {
                    return carBarn
                }
                return ''
            },
            leaseTimeText () {
                const { leaseTime } = this.data
                let lease = leaseTime !== undefined ? leaseTime : ''
                // console.log(lease)
                return lease
            },
            needText () {
                const { isNeed } = this.data
                let need = isNeed !== undefined ? isNeed : ''
                return need
            },
            areaText () {
                const { province, city, county, areaCode } = this.data
                if (province && city && county && areaCode) {
                    const arr = [province, city, county]
                    if (province === city) {
                        arr.shift()
                    }
                    return arr.join('/')
                }
                return ''
            }
        },
        methods: {
            back () {
                this.$router.go(-1)
            },
            onCarBarnConfirm (value) {
                this.showPickerCarBarnPopup = false
                this.$set(this.data, 'carBarn', value)
            },
            onTimeConfrim (value) {
                // 租赁的时间 lease
                this.showTimePopup = false
                this.$set(this.data, 'leaseTime', value)
            },
            onNeedConfirm (value) {
                this.showNeedPopup = false
                this.$set(this.data, 'isNeed', value)
            },
            onAreaConfirm (values) {
                // console.log(values)
                this.showAreaPopup = false
                this.data.areaCode = values[2].code
                this.assignAreaValues(values)
            },
            assignAreaValues (values) {
                this.data = Object.assign({}, this.data, {
                    province: values[0] ? values[0].name : '',
                    city: values[1] ? values[1].name : '',
                    county: values[2] ? values[2].name : ''
                })
            },
            submit () {
                // 提交表单的数据
                Toast('提交功能等代接口')
            }
        },
        watch: {
            'data.carBarn' (newVal) {
                this.isShowCharge = newVal === '电动车车位'
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '~styles/variables.scss';
    .apply{
        &-wrapper{
            @include fixed;
            .panel{
                margin-top:1.2rem;
                .btn-wrapper{
                    width: 90%;
                    margin: 2rem auto;
                    .btn{
                        height: 2rem;
                        line-height: 2rem;
                    }
                }
            }
        }
    }
</style>
