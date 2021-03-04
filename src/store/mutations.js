import Vue from "vue";
import {
    SAVE_ADDRESS,
    SAVE_CATEGORY,
    SAVE_SHOPLIST,
    SAVE_USERINFO,
    SAVE_USERTOKEN,
    OUT_LOGIN,
    SAVE_GOODDATAS,
    DEL_COUNT,
    ADD_COUNT
} from './mutation_type';
export default {
    //SAVE_ADDRESS不加【】不表示变量，因为他是对象的key
    [SAVE_ADDRESS](state, address){
        state.address = address
    },
    //保存商品列表
    [SAVE_CATEGORY](state, categorys){
        state.categorys = categorys
    },
    //保存店铺列表
    [SAVE_SHOPLIST](state, shopList){
        state.shopList = shopList
    },
    [SAVE_USERINFO](state, userInfo){
        state.userInfo = userInfo
    },
    [SAVE_USERTOKEN](state, userToken){//vuex里面保存一个和本地也要保存一个
        state.userToken = userToken
        localStorage.setItem('token_key', userToken)
    },
    [OUT_LOGIN](state){
        state.userInfo = {}
        state.userToken = ''
        localStorage.removeItem('token_key')
    },
    [SAVE_GOODDATAS](state, shopDatas){//vuex里面保存一个和本地也要保存一个
        state.shopDatas = shopDatas
        console.log(state.shopDatas);
    },
    [ADD_COUNT](state, {food}){
        if (food.count > 0) {
            food.count++
        }else{
            Vue.set(food, 'count', 1)
            //food.count = 1
        }
    },
    [DEL_COUNT](state, {food}){
        if (food.count > 0) {
            food.count--
        }else{
            food.count = 0
        }
    }
}