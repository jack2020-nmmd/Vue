import {
    SAVE_ADDRESS,
    SAVE_CATEGORY,
    SAVE_SHOPLIST
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
        console.log(state.shopList);
    }
}