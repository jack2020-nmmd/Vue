import axios from 'axios';
import qs from 'qs';

const instance = axios.create({
    baseURL : '/api'
})
//config对象里面包含我们传进去的data、URL、和method
instance.interceptors.request.use(config => {
    config.data = qs.stringify(config.data)
    return config
})

instance.interceptors.response.use(config => {
    return config.data
}, err => {
    alert('请求失败')
    //默认会返回一个成功的promise实例，但是没有数据，因为返回错误了没有必要进行下一个回调
    return new Promise(()=>{})
})

export default instance