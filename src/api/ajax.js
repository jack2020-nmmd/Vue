import axios from 'axios';
import qs from 'qs';
import router from '../router'
const instance = axios.create({
    baseURL : '/api'
})
//config对象里面包含我们传进去的data、URL、和method
instance.interceptors.request.use(config => {
    config.data = qs.stringify(config.data)//转化为服务器认识的编码encode
    const token = localStorage.getItem('token_key')
    if (config.headers.needToken) {
        if (token) {
            config.headers.authorization = token
        }else{
            throw Error('没有token请登录')
        }
    }
    return config
})

instance.interceptors.response.use(config => {
    return config.data
}, error => {
    if (!error.response) {
        alert(error.message)
        if (router.currentRoute.path !== '/login') {
            router.replace('/login')
        }
    }else if(error.code === 401){
        alert('过期请从新登录')
        if (router.currentRoute.path !== '/login') {
            router.replace('/login')
        }
    }else if(error.code === 404){
        alert('找不到路径资源')
    }else{
        alert('请求失败')
    }
    //默认会返回一个成功的promise实例，但是没有数据，因为返回错误了没有必要进行下一个回调
    return new Promise(()=>{})
})

export default instance//如果有多个不同的拦截器可以分别暴露