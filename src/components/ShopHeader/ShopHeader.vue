<template>
<!-- 复用率高直接注册为全局组件 -->
    <div>
        <header class="header">
            <!-- <span class="header_search">
              <i class="iconfont icon-sousuo"></i>
            </span> -->
            <slot name = "left"></slot>
            <span class="header_title">
              <span class="header_title_text ellipsis">{{title}}</span>
            </span>
            <!-- <span class="header_login">
              <span class="header_login_text">登录|注册</span>
            </span> -->
            <slot name = "right"></slot>
        </header>
    </div>
</template>

<script setup>
    export default{
        props : {
            title : {
                required : true,//必须传
                type : String,//字符串
                default : "外卖"//默认title
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .header
        background-color #02a774
        position fixed
        z-index 100
        left 0
        top 0
        width 100%
        height 45px
        .header_search
            position absolute
            left 15px
            top 50%
            transform translateY(-50%)
            width 10%
            height 50%
            .iconsousuo
                font-size 25px
                color #fff
        .header_title
            position absolute
            top 50%
            left 50%
            transform translate(-50%, -50%)
            width 50%
            color #fff
            text-align center
            .header_title_text
                font-size 20px
                color #fff
                display block
        .header_login
            font-size 14px
            color #fff
            position absolute
            right 15px
            top 50%
            transform translateY(-50%)
            .header_login_text
                color #fff
</style>