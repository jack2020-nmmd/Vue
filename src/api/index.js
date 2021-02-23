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