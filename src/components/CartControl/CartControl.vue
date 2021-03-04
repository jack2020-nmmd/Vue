<template>
    <div class="cartcontrol">
        <div class="iconfont iconjianhao" @click="changFoodCount(false)"></div>
        <div class="cart-count">{{food.count}}</div>
        <div class="iconfont iconjia" @click="changFoodCount(true)"></div>
    </div>

</template>

<script setup>
    import {DEL_COUNT, ADD_COUNT} from '../../store/mutation_type';
    export default {
        props:{
            food :{
                require : true,
                type : Object
            }
        },
        methods:{
            changFoodCount(isAdd){
                // if(isAdd){
                //     this.$store.commit(ADD_COUNT, {food:this.food})
                // }else{
                //     this.$store.commit(DEL_COUNT, {food:this.food})
                // }
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

