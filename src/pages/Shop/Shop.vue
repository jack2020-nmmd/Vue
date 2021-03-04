<template>
    <div id="shopContain">
        <ShopGoods/>
        <ul class="pathNav">
            <li class="goods"><router-link to="/shop/goods" replace>订餐</router-link></li>
            <li class="rating"><router-link to="/shop/rating" replace>优惠</router-link></li>
            <li class="info"><router-link to="/shop/info" replace>商家</router-link></li>
        </ul>
        <router-view></router-view>
    </div>
    

</template>

<script setup>
    import ShopGoods from '../../components/ShopGoods/ShopGoods.vue';
    export default{
        components : {
            ShopGoods
            },
        async mounted(){
            this.$store.dispatch('saveGoodsData')
        }
    }
</script>

<style lang="stylus" scoped>
    @import "../../common/stylus/mixins.styl";
    #shopContain
        .pathNav
            display flex
            justify-content space-between
            bottom-border-1px(#333)
            li
                flex 1
                text-align center
                height 40px
                line-height 40px
                font-size 16px
                a
                    display block
                    position relative
                    &.router-link-active
                        color $green
                        &:after
                            content ""
                            display block
                            position absolute
                            bottom 0px
                            left 50%
                            margin-left -20px
                            width 40px
                            height 2px
                            background-color $green





        
</style>