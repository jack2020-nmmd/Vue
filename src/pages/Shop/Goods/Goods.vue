<template>
    <div class="contain">
        <div class="leftContain">
                <ul class="navList">
                    <li v-for="(good, index) in goods" :key="index" :class="{active:false}">{{good.name}}</li>
                </ul>
        </div>
        <div class="rightContain">
            <div class="foods-wrapper">
                <ul ref="rightUI">
                    <li class="food-list-hook" v-for="(good, index) in goods" :key="index">
                        <h1 class="title">{{good.name}}</h1>
                        <ul>
                            <li class="food-item bottom-border-1px" v-for="(item, index) in good.foods" :key="index">
                                <div class="icon">
                                    <img width="57" height="57"
                                        :src="item.image">
                                </div>
                                <div class="content">
                                    <h2 class="name">{{item.name}}</h2>
                                    <p class="desc">{{item.description}}</p>
                                    <div class="extra">
                                        <span class="count">月售{{item.sellCount}}份</span>
                                        <span>好评率{{item.rating}}%</span>
                                    </div>
                                    <div class="price">
                                        <span class="now">￥{{item.price}}</span>
                                    </div>
                                    <div class="cartcontrol-wrapper">
                                    CartControl组件
                                    </div>
                                </div>
                            </li>
                            
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    
    
</template>

<script setup>
    import BetterScroll from 'better-scroll'
    import {mapState} from 'vuex';
    export default{
        data(){
            return {
                top : [],
                activeIndex : 0
            }
        },
        mounted(){
            if (this.goods) {
                this._initScroll()
                this._initTops()
            }
            this.top.findIndex((item, index)=>{

            })

        },
        computed:{
            ...mapState({
                goods : state => state.shopDatas.goods
            })
        },
        methods:{
            _initScroll(){
                new BetterScroll('.leftContain', {
                    movable: true,
                    zoom: true,
                    scrollY : true
                })
                new BetterScroll('.rightContain', {
                    movable: true,
                    zoom: true,
                    scrollY : true
                })
            },

            _initTops(){
                let list = Array.from(this.$refs.rightUI.children)
                let initTop = 0
                this.top.push(initTop)
                let tops = this.top
                // for (let index = 0; index < list.length; index++) {
                //     initTop += list[index].clientHeight//clientHeight是border和content的高度和
                //     tops.push(initTop)
                // }
                // this.top = tops//像文档碎片,不然没push进一次都会渲染
                list.reduce((pre, next)=>{
                    pre += next.clientHeight
                    tops.push(pre)
                    return pre//一定要返回作为下一次的开始值
                },initTop)
                this.top = tops
            }
        },
        watch:{
            goods(){
                this.$nextTick(()=>{//组件下一次渲染完毕调用
                    this._initScroll()
                    this._initTops()
                    })
            }
        }
            
    }
    
</script>

<style lang="stylus" scoped>
    @import "../../../common/stylus/mixins.styl"
    .contain
        display flex
        overflow hidden
        height calc(100vh - 224px)
        .leftContain
            // position absolute
            // bottom 0px
            // top 224px
            width 80px
            //height calc(100vh - 224px)//c3新特性计算高度
            overflow hidden
            background-color #f3f5f7
            .navList
                li 
                    width 100%
                    height 50px
                    text-align center
                    line-height 40px
                    position relative
                    &.active
                        background-color #fff
                        color $green
                    &:after
                        content ""
                        width 80%
                        height 2px
                        background-color #eee
                        position absolute
                        bottom 0px
                        left 10%
        .rightContain
            width 295px
        .foods-wrapper
            flex: 1
            .title
                padding-left: 14px
                height: 26px
                line-height: 26px
                border-left: 2px solid #d9dde1
                font-size: 12px
                color: rgb(147, 153, 159)
                background: #f3f5f7
            .food-item
                display: flex
                margin: 18px
                padding-bottom: 18px
                bottom-border-1px(rgba(7, 17, 27, 0.1))
                &:last-child
                    border-none()
                    margin-bottom: 0
                .icon
                    flex: 0 0 57px
                    margin-right: 10px
                .content
                    flex: 1
                    .name
                        margin: 2px 0 8px 0
                        height: 14px
                        line-height: 14px
                        font-size: 14px
                        color: rgb(7, 17, 27)
                    .desc, .extra
                        line-height: 10px
                        font-size: 10px
                        color: rgb(147, 153, 159)
                    .desc
                        line-height: 12px
                        margin-bottom: 8px
                    .extra
                        .count
                            margin-right: 12px
                    .price
                        font-weight: 700
                        line-height: 24px
                        .now
                            margin-right: 8px
                            font-size: 14px
                            color: rgb(240, 20, 20)
                        .old
                            text-decoration: line-through
                            font-size: 10px
                            color: rgb(147, 153, 159)
                    .cartcontrol-wrapper
                        position: absolute
                        right: 0
                        bottom: 12px
 
</style>