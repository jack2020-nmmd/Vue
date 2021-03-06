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
    import {mapState} from 'vuex';

    import ShopGoods from '../../components/ShopGoods/ShopGoods.vue';
    import {SAVE_GOODDATAS,SAVE_CHOOSEFOOD} from '../../store/mutation_type';
    export default{
        components : {
            ShopGoods
            },
        computed: {
            ...mapState({
                shopDatas : state => state.shopDatas,
                chooseFood  : state => state.chooseFood
            })
        },
        async mounted(){
            //this.$store.dispatch('saveGoodsData')
            let shopDatas =JSON.parse(sessionStorage.getItem('session_data')) 
            if (shopDatas) {
                //将读取到的数据保存到vuex中
                this.$store.commit(SAVE_GOODDATAS, shopDatas)
                //计算购物车数据,计算出来的是为了和shopdatas有关联
                let carShop= shopDatas.goods.reduce((pre, next)=>{
                    pre.push(...next.foods.filter((item)=>item.count > 0))//不加...会放在在二维数组
                    return pre
                },[])
                console.log(carShop, 1111);
                //存入vuex中
                this.$store.commit(SAVE_CHOOSEFOOD, carShop)
            }else{
                this.$store.dispatch('saveGoodsData')
            }
            window.addEventListener('unload',()=>{
                sessionStorage.setItem('session_data', JSON.stringify(this.shopDatas))
            })
        },
        beforeDestroy(){
            sessionStorage.setItem('session_data', JSON.stringify(this.shopDatas))
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