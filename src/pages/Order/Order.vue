<template>
    <section class="profile">
        <!-- <header class="header">
            <a class="header_title">
                <span class="header_title_text">我的</span>
            </a>
        </header> -->
        <ShopHeader :title = "'我的'"/>
        <section class="profile-number">
          <a href="javascript:" class="profile-link">
            <div class="profile_image">
              <i class="iconfont iconpersonal"></i>
            </div>
            <div class="user-info" @click="login">
              <p class="user-info-top" v-if="!user.phone">{{user.name ? user.name : '登录注册'}}</p>
              <p>
                <span class="user-icon">
                  <i class="iconfont icon-shouji icon-mobile"></i>
                </span>
                <span class="icon-mobile-number" v-if="!user.name">暂无绑定手机号</span>
              </p>
            </div>
            <span class="arrow">
              <i class="iconfont icon-jiantou1"></i>
            </span>
          </a>
        </section>
        <section class="profile_info_data border-1px">
          <ul class="info_data_list">
            <a href="javascript:" class="info_data_link">
              <span class="info_data_top"><span>0.00</span>元</span>
              <span class="info_data_bottom">我的余额</span>
            </a>
            <a href="javascript:" class="info_data_link">
              <span class="info_data_top"><span>0</span>个</span>
              <span class="info_data_bottom">我的优惠</span>
            </a>
            <a href="javascript:" class="info_data_link">
              <span class="info_data_top"><span>0</span>分</span>
              <span class="info_data_bottom">我的积分</span>
            </a>
          </ul>
        </section>
        <section class="profile_my_order border-1px">
          <!-- 我的订单 -->
          <a href='javascript:' class="my_order">
            <span>
              <i class="iconfont icondingdan1"></i>
            </span>
            <div class="my_order_div">
              <span>我的订单</span>
              <span class="my_order_icon">
                <i class="iconfont iconicon-jiantou1"></i>
              </span>
            </div>
          </a>
          <!-- 积分商城 -->
          <a href='javascript:' class="my_order">
            <span>
              <i class="iconfont iconicon-jifen"></i>
            </span>
            <div class="my_order_div">
              <span>积分商城</span>
              <span class="my_order_icon">
                <i class="iconfont iconicon-jiantou1"></i>
              </span>
            </div>
          </a>
          <!-- 硅谷外卖会员卡 -->
          <a href="javascript:" class="my_order">
            <span>
              <i class="iconfont  iconicon_vip_01"></i>
            </span>
            <div class="my_order_div">
              <span>硅谷外卖会员卡</span>
              <span class="my_order_icon">
                <i class="iconfont iconicon-jiantou1"></i>
              </span>
            </div>
          </a>
        </section>
        <section class="profile_my_order border-1px">
          <!-- 服务中心 -->
          <a href="javascript:" class="my_order">
            <span>
              <i class="iconfont iconicon-fuwu"></i>
            </span>
            <div class="my_order_div">
              <span>服务中心</span>
              <span class="my_order_icon">
                <i class="iconfont iconicon-jiantou1"></i>
              </span>
            </div>
          </a>
        </section>
        <section class="profile_my_order border-1px">
          <!-- 退出按钮 -->
          <!-- <button @click="outLogin">退出登录</button> -->
          <mt-button type="danger" style="width:100%" @click="outLogin">退出登录</mt-button>
        </section>
      </section>
</template>

<script setup>
import { mapState } from 'vuex';
import { OUT_LOGIN } from '../../store/mutation_type';
import { MessageBox } from 'mint-ui'
export default {
  
  methods : {
    login(){
      // !!!this.user._id && this.$router.push('/login')
      !!this.user._id || this.$router.push('/login')
      console.log(this.user);
    },
    outLogin(){
      // if (confirm('确定退出登录吗')) {
      //   this.$store.commit(OUT_LOGIN)
      // }
      MessageBox.confirm()
        .then(
          resolve => {this.$store.commit(OUT_LOGIN)},
          reject => {console.log('取消');}
        )
    }
  },
  computed : {
    ...mapState({
      user : state => state.userInfo
    })
  }
}
</script>

<style lang="stylus" scoped>
    @import "../../common/stylus/mixins.styl"
    .profile //我的
          width 100%
          .profile-number
            margin-top 45.5px
            .profile-link
              clearFix()
              position relative
              display block
              background #02a774
              padding 20px 10px
              .profile_image
                float left
                width 60px
                height 60px
                border-radius 50%
                overflow hidden
                vertical-align top
                .iconpersonal
                  background #e4e4e4
                  font-size 62px
              .user-info
                float left
                margin-top 8px
                margin-left 15px
                p
                  font-weight: 700
                  font-size 18px
                  color #fff
                  &.user-info-top
                    padding-bottom 8px
                  .user-icon
                    display inline-block
                    margin-left -15px
                    margin-right 5px
                    width 20px
                    height 20px
                    .icon-mobile
                      font-size 30px
                      vertical-align text-top
                  .icon-mobile-number
                    font-size 14px
                    color #fff
              .arrow
                width 12px
                height 12px
                position absolute
                right 15px
                top 40%
                .iconicon-jiantou1
                  color #fff
                  font-size 5px
          .profile_info_data
            bottom-border-1px(#e4e4e4)
            width 100%
            background #fff
            overflow hidden
            .info_data_list
              clearFix()
              .info_data_link
                float left
                width 33%
                text-align center
                border-right 1px solid #f1f1f1
                .info_data_top
                  display block
                  width 100%
                  font-size 14px
                  color #333
                  padding 15px 5px 10px
                  span
                    display inline-block
                    font-size 30px
                    color #f90
                    font-weight 700
                    line-height 30px
                .info_data_bottom
                  display inline-block
                  font-size 14px
                  color #666
                  font-weight 400
                  padding-bottom 10px
              .info_data_link:nth-of-type(2)
                .info_data_top
                  span
                    color #ff5f3e
              .info_data_link:nth-of-type(3)
                border 0
                .info_data_top
                  span
                    color #6ac20b
          .profile_my_order
            top-border-1px(#e4e4e4)
            margin-top 10px
            background #fff
            .my_order
              display flex
              align-items center
              padding-left 15px
              >span
                display flex
                align-items center
                width 20px
                height 20px
                >.iconfont
                  margin-left -10px
                  font-size 30px
                .icondingdan1
                  color #02a774
                .iconicon-jifen
                  color #ff5f3e
                .iconicon_vip_01
                  color #f90
                .icon-fuwu
                  color #02a774
              .my_order_div
                width 100%
                border-bottom 1px solid #f1f1f1
                padding 18px 10px 18px 0
                font-size 16px
                color #333
                display flex
                justify-content space-between
                span
                  display block
                .my_order_icon
                  width 10px
                  height 10px
                  .iconicon-jiantou1
                    color #bbb
                    font-size 10px
  
  
</style>