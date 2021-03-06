<template>
    <div class="cartcontrol">
        <transition name="move">
          <div class="iconfont iconjianhao" @click="changFoodCount(false)" v-show="food.count"></div>
        </transition>
        <div class="cart-count" v-show="food.count > 0">{{food.count}}</div>
        <div class="iconfont iconjia" @click="changFoodCount(true)"></div>
    </div>

</template>

<script setup>
    export default {
        props:{
            food :{
                require : true,
                type : Object
            }
        },
        methods:{
            changFoodCount(isAdd){
                this.$store.dispatch('changeCount', {isAdd, food:this.food})
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 4px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)

    .iconjianhao
      display: inline-block
      padding 2px
      line-height 24px
      font-size 24px
      color $green
      &.move-enter-active,  &.move-leave-active
        transition all .5s
      &.move-enter, &.move-leave-to 
        transform translateX(20px) rotate(180deg)
        opacity 0
    .cart-count
      display: inline-block
      vertical-align: top
      width: 14px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 18px
      color: rgb(147, 153, 159)
    .iconjia
      display: inline-block
      padding: 2px
      line-height: 24px
      font-size: 22px
      color $green
</style>

