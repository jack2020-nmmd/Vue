import axios from 'axios';
import ajax from './ajax';
//获取用户经纬度地址
export const getAddress = (latitude, longitude) => {
   return ajax(`/position/${latitude},${longitude}`)
}
//获取食品分类列表
export const getCategory = () => ajax('/index_category')

//根据经纬度获取商铺列表
export const getShopList = (latitude, longitude) => ajax('/shops', {params:{
   latitude : latitude,
   longitude : longitude
}})

//用户密码登录
export const pwdLogin = ({name, pwd, captcha}) =>{
  return ajax({url:"/login_pwd", 
   method:'POST',
  data:{
      name:name,
      pwd:pwd,
      captcha:captcha}
   })
}

//手机号验证码登陆
export const phoneLogin = ({phone , code}) => {
   return ajax("/login_sms", {data:{
      phone,
      code
   }})
}

//发送短信验证码
export const getCode = ({phone}) => {
   return ajax("/sendcode", {params:{
      phone
   }})
}