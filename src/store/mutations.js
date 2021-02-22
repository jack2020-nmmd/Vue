import {SAVE_ADDRESS} from './mutation_type';
export default {
    //SAVE_ADDRESS不加【】不表示变量，因为他是对象的key
    async [SAVE_ADDRESS](state, address){
        state.address = address
    }
}