<template>
    <div class="userCenterWrapper">
        <div class="bg">
            <v-header :title='title' class="v-header">
                <i class="iconfont icon-shezhi" slot='right'></i>
            </v-header>
            <div class="header-box">
                <div class="userInfo">
                    <img :src="avatar" class="avatar">
                    <div class="detail">
                        <p class="name">玉伯</p>
                        <p class="num">编号: 000000</p>
                    </div>
                </div>
                <div class="guide">
                    <ul>
                        <li class='item'>
                            <i class="iconfont icon-saoma"></i>
                            <p class="text">扫一扫</p>
                        </li>
                        <li class='item' @click="$router.push({path: '/balance'})">
                            <i class="iconfont icon-yue"></i>
                            <p class="text">余额</p>
                            <p class='money'>￥191111</p>
                        </li>
                        <li class='item'>
                            <i class="iconfont icon-qiaquan"></i>
                            <p class="text">卡券</p>
                        </li>
                        <li class='item'>
                            <i class="iconfont icon-bangzhu1"></i>
                            <p class="text">帮助</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
         <!-- 功能模块 -->
        <div class="featuers-wrapper">
            <tag icon='icon-gongneng' text='常用功能'></tag>
            <!-- 实际的功能模块 -->
            <ul>
                <template v-for='(item,index) in featuers'>
                    <li class="module" :key='index' @click='href(index)'>
                        <router-link :to='`${item.url}`' class="_a">
                            <i class="iconfont" :class="item.icon"></i>
                            <!-- badge -->
                            <b class="badge" v-if='index === 1'></b>
                            <p v-text='item.text'></p>
                        </router-link>
                    </li>
                </template>
            </ul>
        </div>
        <!-- footer -->
        <div class="footer">
            <router-link to='' tag='div'>
                <i class="iconfont icon-xiaoxi"></i>
                <span>充电</span>
            </router-link>
            <router-link to='' tag='div'>
                <i class="iconfont icon-xiche"></i>
                <span>洗车</span>
            </router-link>
            <router-link to='' tag='div'>
                <i class="iconfont icon-guanyuwomen"></i>
                <span>关于我们</span>
            </router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    import vHeader from 'components/header'
    import Tag from 'components/tag'
    export default {
        name: 'user-center',
        data () {
            return {
                avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80'
            }
        },
        created () {
            this.title = '个人中心'
            this.featuers = [
                {
                    icon: 'icon-shoucang',
                    text: '我的收藏',
                    url: '/collect'
                },
                {
                    icon: 'icon-xiaoxi',
                    text: '我的消息',
                    url: '/message'
                },
                {
                    icon: 'icon-zanwutixianjilu',
                    text: '充值记录',
                    url: '/recharge-record'
                },
                {
                    icon: 'icon-jizhangben',
                    text: '消费记录',
                    url: '/consume-record'
                },
                {
                    icon: 'icon-shezhi',
                    text: '故障保修',
                    url: '/feedback'
                },
                {
                    icon: 'icon-namai',
                    text: '我要购买',
                    url: '/tobuy'
                },
                {
                    icon: 'icon-wodekefu',
                    text: '联系客服',
                    url: ''
                },
                {
                    icon: 'icon-guanliyuan',
                    text: '代理商管理',
                    url: ''
                }
            ]
        },
        components: {
            vHeader,
            Tag
        },
        methods: {
            href (index) {
                if (index === 6) {
                    window.location.href = 'tel:18955310567'
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '~styles/variables.scss';
    .userCenterWrapper{
        width: 100%;
        padding-bottom: 2.5rem;
        min-height: calc(100vh);
        background-color: $color-background-d;
        ._a{
            display: block;
        }
        .bg{
            background: $color-background-line;
            .v-header{
                background: transparent;
            }
        }
        .header{
            &-box{
                // padding: 1rem;
                padding-bottom: 1rem;
                .userInfo{
                    display: flex;
                    align-items: center;
                    display: flex;
                    padding: 1rem;
                    .avatar{
                        flex:0 0 3.5rem;
                        width: 3.5rem;
                        height: 3.5rem;
                        border: 3px solid #9FFDCD;
                        border-radius: 50%;
                    }
                    .detail {
                        flex:1;
                        margin-left: 1rem;
                        p{
                            color: $color-text;
                            font-size: .8rem;
                            line-height: 30px;
                            &:last-child{
                                font-size: .65rem;
                            }
                        }
                    }
                }
                .guide{
                    margin-top: 1.2rem;
                    ul{
                        display: flex;
                        font-size: 0;
                        .item{
                            display: flex;
                            flex-flow: column;
                            flex: 1;
                            align-items: center;
                            color: $color-text;
                            font-size: .8rem;
                            .iconfont{
                                font-size: 1.5rem;
                            }
                            p{
                                line-height: 25px;
                                font-size: .8rem;
                                &.text{
                                    margin-top: .6rem;
                                    font-size: .7rem;
                                }
                                &.money{
                                    font-size: .7rem;
                                }
                            }
                        }
                    }
                }
            }
        }
        .featuers-wrapper{
            margin-top: 1rem;
            padding: 10px 0 0rem 0;
            min-height: 3rem;
            background: #fff;
            ul{
                display: flex;
                flex-wrap: wrap;
                .module{
                    position: relative;
                    width: 25%;
                    height: 3rem;;
                    text-align: center;
                    margin:  .8rem 0;
                    i{
                        font-size: 1.25rem;
                        &.icon-shoucang{
                            color: #f5c026;
                        }
                        &.icon-xiaoxi{
                            color: #40e399;
                        }
                        &.icon-zanwutixianjilu{
                            color: #55c2fa;
                        }
                        &.icon-jizhangben{
                            color: #e1523f;
                        }
                        &.icon-shezhi{
                            color: #55c2fa;
                        }
                        &.icon-namai{
                            color: #7344c0;
                        }
                        &.icon-wodekefu{
                            color: #b463d2;
                        }
                        &.icon-guanliyuan{
                            color: #4e93ff;
                        }
                    }
                    .badge{
                        position: absolute;
                        width: 0.4rem;
                        height: 0.4rem;
                        border-radius: 50%;
                        right: 1.65rem;
                        top:-2px;
                        background-color: #e1523f;
                    }
                    p{
                        margin-top:.6rem;
                        font-size: .7rem;
                    }
                }
            }
        }
        .footer{
            display: flex;
            position: fixed;
            height: 2.5rem;
            left: 0;
            width: 100%;
            bottom: 0;
            background-color: $color-background;
            div{
                padding: .28rem 0;
                flex: 1;
                display: flex;
                flex-flow: column;
                align-items: center;
                color:$color-text;
                .iconfont{
                    font-size: 1.1rem;
                }
                span{
                    margin-top: .25rem;
                    font-size: .6rem;
                }
            }
        }
    }
</style>
