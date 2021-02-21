<template>
  <div class="footer-guide">
      <div :class="{active : $route.path === '/msite'}" class="bottom-item" @click="goPath('/msite')" >
          <i class=" iconfont iconrhome"></i>
          <span>首页</span>
      </div>
      <div class="bottom-item" @click="goPath( '/search')" :class="{active : $route.path === '/search'}">
          <i class="iconfont iconsousuo"></i>
          <span>搜索</span>
      </div>
      <div class="bottom-item" @click="goPath('/profile')" :class="{active : $route.path === '/profile'}"> 
          <i class="iconfont icondingdan"></i>
          <span>订单</span>
      </div>
      <div class="bottom-item" @click="goPath('/order')" :class="{active : $route.path === '/order'}">
          <i class="iconfont iconwode"></i>
          <span>我的</span>
      </div>
  </div>
</template>

<script>
export default {
    methods : {
        goPath(path){
            //编程式导航跳转指定路径
           path !== this.$route.path && this.$router.push(path)
        }
    }
}
</script>

<style lang="stylus">
    @import "../../common/stylus/mixins.styl"
    .footer-guide
        display flex
        top-border-1px(#000)
        position fixed
        width 100%
        height 50px
        bottom 0px
        left 0px
        box-sizing border-box
        background-color #fff
        .bottom-item
            display flex
            flex-direction column
            width 25%
            height 50px
            text-align center
            &.active
                color green
            .iconfont
                font-size 22px
                line-height 30px
</style>