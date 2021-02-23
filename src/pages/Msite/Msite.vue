<template>
    <section class="msite">
        <!--首页头部-->
        <ShopHeader :title = "address.name?address.name:'定位中...'">
          <!-- <span class="header_search" slot = "left">
              <i class="iconfont iconsousuo"></i>
          </span> 
          <span class="header_login" slot = "right">
              <span class="header_login_text">登录|注册</span>
          </span> -->
          <!-- 这是新写法 -->
          <template v-slot:left>
            <span class="header_search" >
              <i class="iconfont iconsousuo"></i>
            </span>
          </template>
          <template v-slot:right>
            <span class="header_login" >
              <span class="header_login_text">登录|注册</span>
            </span>
          </template>
        </ShopHeader>
        <!--首页导航-->
        <nav class="msite_nav">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(category, index) in newCategorys" :key="index">
                <a href="javascript:" class="link_to_food" v-for="(categoryItem, index) in category" :key="index">
                  <div class="food_container">
                    <img :src="`https://fuss10.elemecdn.com/${categoryItem.image_url}`">
                  </div>
                  <span>{{categoryItem.title}}</span>
                </a>
              </div>
              
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
        </nav>
        <!--首页附近商家-->
        <ShopList/>
    </section>
</template>

<script setup>
  import _ from 'lodash';
  import Swiper from 'swiper';
  import "swiper/swiper.min.css";
  import {mapState} from 'vuex';
  import ShopList from '../../components/ShopList/ShopList';
  export default{
    components : {ShopList},
    async mounted(){
      //let result = await getAddress(40.10038,116.36867)
      this.$store.dispatch('getAddressAction')
      //this.$store.commit('save_address', result.data)
      this.$store.dispatch('getCategoryAction')
    },
    computed : {
      //...mapState(['address'])不能自定义映射的key值
      ...mapState({
        address:state => state.address,
        categorys:state => state.categorys
      }),
      newCategorys(){
        return _.chunk(this.categorys, 8)
      }
    },
    watch : {
      categorys(){
        //this.$nextTick保证组件下一次加载完毕执行
        this.$nextTick(()=>{
          new Swiper('.swiper-container', {
            autoplay: true,//可选选项，自动滑动
            pagination : {
            el: '.swiper-pagination'
          },
        loop : true,
      })
        })
      }
    }
}
</script>

<style lang="stylus" >
 @import "../../common/stylus/mixins.styl"
        .msite  //首页
          width 100%
          .msite_nav
            bottom-border-1px(#e4e4e4)
            margin-top 45px
            height 200px
            background #fff
            .swiper-container
              width 100%
              height 100%
              swiper-theme-color: #ff6600
              .swiper-wrapper
                width 100%
                height 100%
                .swiper-slide
                  display flex
                  flex-wrap wrap
                  .link_to_food
                    width 25%
                    .food_container
                      display block
                      width 100%
                      text-align center
                      padding-bottom 10px
                      font-size 0
                      img
                        display inline-block
                        width 50px
                        height 50px
                    span
                      padding-bottom 30px
                      display block
                      width 100%
                      text-align center
                      font-size 13px
                      color #666
              .swiper-pagination
                >span.swiper-pagination-bullet-active
                  background #02a774
</style>