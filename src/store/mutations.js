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
    ADD_COUNT,
    CLEAR_CAR,
    SAVE_SHOPDATA,
    SAVE_CHOOSEFOOD
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
    },
    [ADD_COUNT](state, {food}){
        if (food.count > 0) {
            food.count++
        }else{
            Vue.set(food, 'count', 1)
            //food.count = 1
            state.chooseFood.push(food)
        }
    },
    [DEL_COUNT](state, {food}){
        if (food.count > 0) {
            food.count--
            if (food.count === 0) {
                // state.chooseFood.splice(state.chooseFood.indexOf(food), 1)
                state.chooseFood.splice(state.chooseFood.findIndex((item)=>{return item===food}), 1)
            }}
        // }else{不用用else,因为不大于零的时候图标已经消失点击不到了
        //     food.count = 0
        //     state.chooseFood.splice(state.chooseFood.findIndex(food), 1)
        //     console.log(state.chooseFood);
        // }
    },
    [CLEAR_CAR](state){
        state.chooseFood.forEach(food => {
            food.count = 0
        });
        state.chooseFood = []
    },
    
    [SAVE_CHOOSEFOOD](state, foodDatas){//vuex里面保存一个和本地也要保存一个
        state.chooseFood = foodDatas
        console.log('fooddata');
    },
}