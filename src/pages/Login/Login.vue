<template>
  <section class="loginContainer">
      <div class="loginInner">
        <div class="login_header">
          <h2 class="login_logo">硅谷外卖</h2>
          <div class="login_header_title">
            <a href="javascript:;" @click="isUserNameLogin=false"   :class="{on : !isUserNameLogin}">短信登录</a>
            <a href="javascript:;" @click="isUserNameLogin=true" :class="{on : isUserNameLogin}">密码登录</a>
          </div>
        </div>
        <div class="login_content">
          <form>
            <div :class="{on : !isUserNameLogin}">
              <section class="login_message" >
                <input type="tel" maxlength="11" placeholder="手机号" v-model="phone" v-validate="'required|mobile'" name="phone">
                <span style="color: red;" v-show="errors.has('phone')">{{ errors.first('phone') }}</span>
                <!-- disabled只要一个不是false都会显示,||和&&区分什么时候回取后面的值,短路运算 -->
                <button  
                  :disabled="!verification || countDoenTime > 0"
                  class="get_verification " 
                  @click.prevent="getCode"
                  :class="{rightPhone : verification}"
                  >
                    {{countDoenTime ? `${countDoenTime}秒后可重发` : '获取验证码'}}
                </button>
              </section>
              <section class="login_verification">
                <input type="tel"  maxlength="8" placeholder="验证码" v-validate="'required|number'" name="number">
                <span style="color: red;" v-show="errors.has('number')">{{ errors.first('number') }}</span>
              </section>
              <section class="login_hint">
                温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
                <a href="javascript:;">《用户服务协议》</a>
              </section>
            </div >
            <div :class="{on : isUserNameLogin}" >
              <section>
                <section class="login_message">
                  <input type="tel" v-model= "username" maxlength="11" placeholder="手机/邮箱/用户名" v-validate="'required'" name='user'>
                  <span style="color: red;" v-show="errors.has('user')">{{ errors.first('user') }}</span>
                </section>
                <section class="login_verification">
                  <input :type="!showCircle?'password':'tel'" v-model= "pwd" maxlength="8" placeholder="密码" v-validate="'required'" name="pwd">
                  <span style="color: red;" v-show="errors.has('pwd')">{{ errors.first('pwd') }}</span>
                  <div class="switch_button" @click="showCircle=!showCircle" :class="{on : showCircle}">
                    <div class="switch_circle" :class="{on : showCircle}"></div>
                    <span class="switch_text">{{showCircle ? 'abc' : '...'}}</span>
                  </div>
                </section>
                <section class="login_message">
                  <input type="text" v-model="code" maxlength="11" placeholder="验证码" v-validate="'required'" name="number">
                  <span style="color: red;" v-show="errors.has('number')">{{ errors.first('number') }}</span>
                  <img class="get_verification" @click="replaceImage" ref="image" src="http://localhost:4000/captcha" alt="captcha">
                </section>
              </section>
            </div>
            <button class="login_submit" @click.prevent="login">登录</button>
          </form>
          <a href="javascript:;" class="about_us">关于我们</a>
        </div>
        <a href="javascript:" class="go_back">
          <i class="iconfont icon-jiantou2"></i>
        </a>
      </div>
    </section>
</template>

<script>
export default {
  data(){
    return {
      isUserNameLogin : true,
      showCircle :false,
      countDoenTime : 0,
      phone : '',
      veri : '',
      code : '',
      pwd : '',
      username : ''
      }
  },
  methods:{
    replaceImage(){
      this.$refs.image.src = "http://localhost:4000/captcha"
    },
    getCode(){
      this.countDoenTime = 5
      let intervalId = setInterval(() => {
        this.countDoenTime--
        this.countDoenTime === 0 && clearInterval(intervalId)
      }, 1000);
      this.$API.getCode({phone:this.phone})
    },
    async login(){
      let names = this.isUserNameLogin ? ['username', 'pwd', 'code'] : ['phone', 'veri']
      const success = await this.$validator.validateAll(names)//前端验证看是否正确,返回布尔值
      if (success) {
        //前端验证成功开始后端验证
        const result = await this.$API.pwdLogin({name:this.username, pwd:this.pwd, captcha:this.code})
        this.$store.dispatch('saveUserTokenAction', result.data.token)
        delete result.data.token
        this.$store.commit('save_userinfo', result.data)
        result.code === 0 && this.$router.push('/order')
      }else{
        console.log(success);
        alert('请正确输入....')
      }
    }
  },
  computed : {
    verification(){
        return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(this.phone)
      }
  }
}
</script>

<style lang="stylus">
    .loginContainer
      width 100%
      height 100%
      background #fff
      .loginInner
        padding-top 60px
        width 80%
        margin 0 auto
        .login_header
          .login_logo
            font-size 40px
            font-weight bold
            color #02a774
            text-align center
          .login_header_title
            padding-top 40px
            text-align center
            >a
              color #333
              font-size 14px
              padding-bottom 4px
              &:first-child
                margin-right 40px
              &.on
                color #02a774
                font-weight 700
                border-bottom 2px solid #02a774
        .login_content
          >form
            >div
              display none
              &.on
                display block
              input
                width 100%
                height 100%
                padding-left 10px
                box-sizing border-box
                border 1px solid #ddd
                border-radius 4px
                outline 0
                font 400 14px Arial
                &:focus
                  border 1px solid #02a774
              .login_message
                position relative
                margin-top 16px
                height 48px
                font-size 14px
                background #fff
                .get_verification
                  position absolute
                  top 50%
                  right 10px
                  transform translateY(-50%)
                  border 0
                  color #ccc
                  font-size 14px
                  background transparent
                  &.rightPhone
                    color #000
              .login_verification
                position relative
                margin-top 16px
                height 48px
                font-size 14px
                background #fff
                .switch_button
                  font-size 12px
                  border 1px solid #ddd
                  border-radius 8px
                  transition background-color .3s,border-color .3s
                  padding 0 6px
                  width 30px
                  height 16px
                  line-height 16px
                  color #fff
                  position absolute
                  top 50%
                  right 10px
                  transform translateY(-50%)
                  &.off
                    background #fff
                    .switch_text
                      float right
                      color #ddd
                  &.on
                    background #02a774
                  >.switch_circle
                    position absolute
                    top -1px
                    left -1px
                    width 16px
                    height 16px
                    border 1px solid #ddd
                    border-radius 50%
                    background #fff
                    box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                    transition transform .3s
                    &.on
                      transform translateX(27px)
              .login_hint
                margin-top 12px
                color #999
                font-size 14px
                line-height 20px
                >a
                  color #02a774
            .login_submit
              display block
              width 100%
              height 42px
              margin-top 30px
              border-radius 4px
              background #4cd96f
              color #fff
              text-align center
              font-size 16px
              line-height 42px
              border 0
          .about_us
            display block
            font-size 12px
            margin-top 20px
            text-align center
            color #999
        .go_back
          position absolute
          top 5px
          left 5px
          width 30px
          height 30px
          >.iconfont
            font-size 20px
            color #999
</style>