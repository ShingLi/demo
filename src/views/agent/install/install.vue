<template>
    <transition name='slide' mode='out-in'>
        <div class="install-wrapper">
            <v-header title='安装人员管理'
                text='返回'
                @back='back'
                bg='agent'
                style='z-index:9'
            >
                <i class="iconfont icon-jiantouzuo" slot='back'></i>
            </v-header>
            <!-- 安装人员列表 -->
            <Scroll class="scroll">
                <div class="zzzz">
                    <van-collapse v-model="activeName" accordion>
                        <template v-for='(n,index) in 1'>
                            <van-collapse-item
                                :name="index+1"
                                :key='index'
                            >
                                <span slot='title'>小区地址：广告产业园</span>
                                <van-icon
                                    style="font-size:18px"
                                    name="edit"
                                    slot='right-icon'
                                    @click.stop='edit'
                                />
                                <ul>
                                    <li>
                                        <van-swipe-cell
                                            :right-width="50"
                                            :on-close="onClose(1)">
                                            <van-field
                                                class="field"
                                                label='李成'
                                                readonly
                                                value='13866353457'
                                            />
                                            <span
                                                class="del"
                                                slot='right'
                                                >删除</span>
                                        </van-swipe-cell>
                                    </li>
                                </ul>
                            </van-collapse-item>
                        </template>
                    </van-collapse>
                </div>
            </Scroll>
            <!--添加安装工 -->
            <van-dialog
                v-model="isShow"
                show-cancel-button
                title='添加安装工'
                :before-close="beforeClose"
                @confirm= 'confirm'
                @cancel = 'isShow = false'
            >
                <van-field
                    v-model.trim="form.username"
                    label="姓名"
                    placeholder="请输入姓名"
                />
                <van-field
                    v-model.trim="form.number"
                    type="number"
                    label="号码"
                    placeholder="请输入号码"
                />
            </van-dialog>
        </div>
    </transition>
</template>
<script>
    import Vue from 'vue'
    import vHeader from 'components/header'
    import Scroll from 'components/scroll/scroll'
    import {
        Collapse,
        CollapseItem,
        SwipeCell,
        Field,
        Button,
        Icon,
        Dialog,
        Toast
    } from 'vant'

    Vue.use(Dialog)
    export default {
        name: 'install',
        data () {
            return {
                activeName: '1',
                isShow: false,
                form: {}
            }
        },
        components: {
            vHeader,
            Scroll,
            vanCollapse: Collapse,
            vanCollapseItem: CollapseItem,
            vanSwipeCell: SwipeCell,
            vanField: Field,
            vanButton: Button,
            vanIcon: Icon
        },
        methods: {
            back () {
                this.$router.go(-1)
            },
            edit () {
                // 添加安装工
                this.isShow = true
            },
            beforeClose (action, done) {
                if (action === 'confirm') {
                    setTimeout(done, 1000)
                } else {
                    done()
                }
            },
            confirm () {
                let { username, number } = this.form
            },
            onClose (id) {
                // 右滑删除
                return (clickPosition, instance) => {
                    switch (clickPosition) {
                    case 'left':
                    case 'cell':
                    case 'outside':
                        instance.close()
                        break
                    case 'right':
                        Dialog.confirm({
                            title: '',
                            message: '您确定要删除该安装工吗？'
                        }).then(() => {
                            console.log(id)
                            instance.close()
                        }).catch(err => console.log(err))
                        break
                    }
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '~styles/variables.scss';
    .van-collapse-item {
        margin-bottom: .5rem;
        &:last-child{
            margin-bottom: 0;
        }
    }
    .van-swipe-cell__wrapper {
        display: flex;
        align-items: center;
    }
    .field{
        padding: 10px 0;
        &::after{
            content: normal
        }
    }
    .del {
        display: inline-block;
        padding: 10Px;
        margin-top: 6px;
        border-radius: 3px;
        font-size: .6rem;
        color: $color-text;
        background-color:#58A9DB;
    }
    .install{
        &-wrapper{
            @include fixed;
            .scroll{
                position: absolute;
                top:2.2rem;
                left: 0;
                width: 100%;
                bottom:0;
                .zzzz{
                    margin:0 .7rem;
                    padding-top: .7rem;
                    padding-bottom: .7rem;
                }
                .item{
                    display: flex;
                    align-items: center;
                    line-height: 22px;
                    margin-bottom: 5px;
                    color:$color-text-d;
                    font-size: .7rem;
                    label{
                        display: inline;
                        margin-right: 15px;
                    }
                }
            }
        }
    }
</style>
