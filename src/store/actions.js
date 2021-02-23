import {getAddress, getCategory, getShopList} from '../api';
import {SAVE_ADDRESS, SAVE_CATEGORY, SAVE_SHOPLIST} from './mutation_type';

export default {
    async getAddressAction({commit}){
        let result = await getAddress(40.10038,116.36867)
        // if (result.code === 0) {
        //     commit(SAVE_ADDRESS, result.data)
        // }
        //加两个引号为了让他单纯转化为布尔值
        !!(result.code === 0) && commit(SAVE_ADDRESS, result.data)
    },
    async getCategoryAction({commit}){
        let result = await getCategory()
        !!(result.code === 0) && commit(SAVE_CATEGORY, result.data)
    },
    async getShopListAction({commit}){
        let result = await getShopList(40.10038, 116.36867)
        !!(result.code === 0) && commit(SAVE_SHOPLIST, result.data)
    }
}