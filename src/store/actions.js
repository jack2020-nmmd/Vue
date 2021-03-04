import {getAddress, getCategory, getShopList, getShopData} from '../api';
import {SAVE_ADDRESS, SAVE_CATEGORY, SAVE_SHOPLIST, SAVE_USERTOKEN, SAVE_USERINFO,SAVE_GOODDATAS} from './mutation_type';

export default {
    async getAddressAction({commit}){
        let result = await getAddress(40.10038,116.36867)
        // if (result.code === 0) {
        //     commit(SAVE_ADDRESS, result.data)
        // }
        //加两个引号为了让他单纯转化为布尔值
        !!(result.code === 0) && commit(SAVE_ADDRESS, result.data)
    },
    async getCategoryAction({commit}, fn){
        let result = await getCategory()
        if (result.code === 0) {
            commit(SAVE_CATEGORY, result.data) 
            typeof fn === 'function' && fn()
        }
        
    },
    async getShopListAction({commit}){
        let result = await getShopList(40.10038, 116.36867)
        !!(result.code === 0) && commit(SAVE_SHOPLIST, result.data)
    },
    //保存用户token
    async saveUserTokenAction({commit}, result){
        commit(SAVE_USERTOKEN, result)
    },
    //保存商品信息
    async saveGoodsData({commit}){
        let result = await getShopData()
        // if (result.code === 0) {
        //     console.log(222, result);
        //     commit(SAVE_GOODDATAS, result.data)
        // }
        !!(result.code === 0) && commit(SAVE_GOODDATAS, result.data)
        
    }
}