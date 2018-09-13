<template>
    <transition name='slide' mode='out-in'>
        <div class="apply-wrapper">
            <v-header title='申请车位' text='' @back='back'>
                <i class="iconfont icon-jiantouzuo" slot='back'></i>
            </v-header>
            <div class='panel'>
               <form action="">
                    <van-cell-group>
                        <van-field
                            label='姓名'
                            v-model='form.name'
                        />
                        <van-field
                            label='手机号'
                            type='tel'
                            v-model='form.tel'
                        />
                        <van-field
                            label='车位类型'
                        >
                        </van-field>
                    </van-cell-group>
               </form>
            </div>
        </div>
    </transition>
</template>
<script>
    import vHeader from 'components/header'
    import areaList from './area'
    import { Cell, CellGroup, Field, AddressEdit } from 'vant'
    export default {
        name: 'apply-carbarn',
        data () {
            return {
                form: {
                    name: '',
                    tel: '',
                    type: ''
                },
                areaList,
                addressLnfo: {}
            }
        },
        components: {
            vHeader,
            vanCellGroup: CellGroup,
            vanCell: Cell,
            vanField: Field,
            vanAddressEdit: AddressEdit
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
    .apply{
        &-wrapper{
            @include fixed;
            .panel{
                margin-top:1.2rem;
            }
        }
    }
</style>
